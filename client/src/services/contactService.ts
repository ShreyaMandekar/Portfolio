import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    timestamp: string;
  };
}

export const contactService = {
  async sendMessage(formData: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Failed to send message');
      } else if (error.request) {
        throw new Error('Network error. Please check your connection.');
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  },

  async getMessages(page: number = 1, limit: number = 10, status: string = 'all') {
    try {
      const response = await api.get(`/contact?page=${page}&limit=${limit}&status=${status}`);
      return response.data;
    } catch (error: any) {
      throw new Error('Failed to retrieve messages');
    }
  },

  async getContactStats() {
    try {
      const response = await api.get('/contact/stats');
      return response.data;
    } catch (error: any) {
      throw new Error('Failed to retrieve contact statistics');
    }
  }
};

export default contactService;