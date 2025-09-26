const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true
  },
  userAgent: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: 'Unknown'
  },
  city: {
    type: String,
    default: 'Unknown'
  },
  visitCount: {
    type: Number,
    default: 1
  },
  lastVisit: {
    type: Date,
    default: Date.now
  },
  firstVisit: {
    type: Date,
    default: Date.now
  },
  pagesVisited: [{
    page: {
      type: String,
      required: true
    },
    visitCount: {
      type: Number,
      default: 1
    },
    lastVisit: {
      type: Date,
      default: Date.now
    }
  }],
  referrer: {
    type: String,
    default: 'Direct'
  },
  device: {
    type: String,
    enum: ['desktop', 'mobile', 'tablet'],
    default: 'desktop'
  },
  browser: {
    type: String,
    default: 'Unknown'
  },
  os: {
    type: String,
    default: 'Unknown'
  }
}, {
  timestamps: true
});

// Index for better query performance
visitorSchema.index({ ipAddress: 1 });
visitorSchema.index({ lastVisit: -1 });
visitorSchema.index({ visitCount: -1 });

// Method to update visitor data
visitorSchema.methods.updateVisit = function(page) {
  this.visitCount += 1;
  this.lastVisit = new Date();
  
  // Update page visit data
  const pageIndex = this.pagesVisited.findIndex(p => p.page === page);
  if (pageIndex >= 0) {
    this.pagesVisited[pageIndex].visitCount += 1;
    this.pagesVisited[pageIndex].lastVisit = new Date();
  } else {
    this.pagesVisited.push({
      page: page,
      visitCount: 1,
      lastVisit: new Date()
    });
  }
  
  return this.save();
};

module.exports = mongoose.model('Visitor', visitorSchema);