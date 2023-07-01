import axios from 'axios';
const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
//custome phương thức get trong axios
export const getApi = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
export default request;
