const express = require('express');
const Visitor = require('../models/Visitor');
const router = express.Router();

// Track visitor
router.post('/track', async (req, res) => {
  try {
    const { page, referrer, device, browser, os, country, city } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent') || 'Unknown';

    // Check if visitor already exists
    let visitor = await Visitor.findOne({ ipAddress });

    if (visitor) {
      // Update existing visitor
      await visitor.updateVisit(page);
    } else {
      // Create new visitor
      visitor = new Visitor({
        ipAddress,
        userAgent,
        country: country || 'Unknown',
        city: city || 'Unknown',
        referrer: referrer || 'Direct',
        device: device || 'desktop',
        browser: browser || 'Unknown',
        os: os || 'Unknown',
        pagesVisited: [{
          page: page || 'home',
          visitCount: 1,
          lastVisit: new Date()
        }]
      });
      await visitor.save();
    }

    res.json({
      success: true,
      message: 'Visitor tracked successfully'
    });

  } catch (error) {
    console.error('Track visitor error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track visitor'
    });
  }
});

// Get visitor statistics
router.get('/stats', async (req, res) => {
  try {
    const { period = '30' } = req.query;
    const daysAgo = new Date(Date.now() - period * 24 * 60 * 60 * 1000);

    // Total visitors
    const totalVisitors = await Visitor.countDocuments();

    // Recent visitors
    const recentVisitors = await Visitor.countDocuments({
      lastVisit: { $gte: daysAgo }
    });

    // Unique visitors today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayVisitors = await Visitor.countDocuments({
      lastVisit: { $gte: today }
    });

    // Top pages
    const topPages = await Visitor.aggregate([
      { $unwind: '$pagesVisited' },
      {
        $group: {
          _id: '$pagesVisited.page',
          totalVisits: { $sum: '$pagesVisited.visitCount' },
          uniqueVisitors: { $addToSet: '$_id' }
        }
      },
      {
        $project: {
          page: '$_id',
          totalVisits: 1,
          uniqueVisitors: { $size: '$uniqueVisitors' }
        }
      },
      { $sort: { totalVisits: -1 } },
      { $limit: 10 }
    ]);

    // Device statistics
    const deviceStats = await Visitor.aggregate([
      {
        $group: {
          _id: '$device',
          count: { $sum: 1 }
        }
      }
    ]);

    // Browser statistics
    const browserStats = await Visitor.aggregate([
      {
        $group: {
          _id: '$browser',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Country statistics
    const countryStats = await Visitor.aggregate([
      {
        $group: {
          _id: '$country',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Recent activity
    const recentActivity = await Visitor.find()
      .sort({ lastVisit: -1 })
      .limit(10)
      .select('country city device browser lastVisit visitCount')
      .lean();

    res.json({
      success: true,
      data: {
        overview: {
          totalVisitors,
          recentVisitors,
          todayVisitors
        },
        topPages,
        deviceStats,
        browserStats,
        countryStats,
        recentActivity
      }
    });

  } catch (error) {
    console.error('Get visitor stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve visitor statistics'
    });
  }
});

// Get visitor analytics for charts
router.get('/analytics', async (req, res) => {
  try {
    const { period = '7' } = req.query;
    const daysAgo = new Date(Date.now() - period * 24 * 60 * 60 * 1000);

    // Daily visitor count
    const dailyVisitors = await Visitor.aggregate([
      {
        $match: {
          lastVisit: { $gte: daysAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$lastVisit' },
            month: { $month: '$lastVisit' },
            day: { $dayOfMonth: '$lastVisit' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 }
      }
    ]);

    // Hourly visitor distribution
    const hourlyVisitors = await Visitor.aggregate([
      {
        $match: {
          lastVisit: { $gte: daysAgo }
        }
      },
      {
        $group: {
          _id: { $hour: '$lastVisit' },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id': 1 }
      }
    ]);

    res.json({
      success: true,
      data: {
        dailyVisitors,
        hourlyVisitors
      }
    });

  } catch (error) {
    console.error('Get visitor analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve visitor analytics'
    });
  }
});

module.exports = router;