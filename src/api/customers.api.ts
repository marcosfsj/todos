import api from '../config/api';

const getAllCustomers = () => api.get('/customers').then(res => res.data.data);

export default getAllCustomers;
