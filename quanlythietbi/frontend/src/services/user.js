import api from './api';

// Service cho Đăng ký và Đăng nhập
export const AuthService = {
    // Đăng ký người dùng
    register: (data) => {
        return api.post('/register', data);
    },

    // Đăng nhập người dùng
    login: (data) => {
        return api.post('/login', data);
    },

    // Đăng xuất người dùng (nếu có)
    logout: () => {
        return api.post('/logout');
    }
};
