// checkSession.js (or a different name if you prefer)
import api from './api';

export const checkSession = async () => {
  try {
    const response = await api.getSession();
    console.log('Session Response:', response.data);
    if (response.data && response.data.user) {
      return { isLoggedIn: true, userRole: response.data.user.role };
    } else {
      return { isLoggedIn: false, userRole: null };
    }
  } catch (error) {
    console.error('Error checking session:', error.message);
    return { isLoggedIn: false, userRole: null };
  }
};
