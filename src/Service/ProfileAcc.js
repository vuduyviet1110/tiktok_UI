import * as request from '@/ultilities/requestApi';
export const Users = async (q, type = 'less') => {
  // axios thì không cần dùng template string để nối chuỗi như fetch
  const res = await request
    // có baseURL thì chỉ cần viết đuôi
    // custome method get thành getAPi có chức năng là get api rồi .data
    .getApi('users/search', {
      params: {
        q,
        type,
      },
    });
  return res.data;
};
