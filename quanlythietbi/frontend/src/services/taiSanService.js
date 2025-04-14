import api from './api';

// Service cho tài sản
export const TaiSanService = {
    // Lấy tất cả tài sản
    getAll: () => {
        return api.get('/tai-san');
    },

    // Lấy chi tiết tài sản theo ID
    getById: (id) => {
        return api.get(`/tai-san/${id}`);
    },

    // Tạo tài sản mới
    create: (data) => {
        return api.post('/tai-san', data);
    },

    // Cập nhật tài sản
    update: (id, data) => {
        return api.put(`/tai-san/${id}`, data);
    },

    // Xóa tài sản
    delete: (id) => {
        return api.delete(`/tai-san/${id}`);
    }
};
