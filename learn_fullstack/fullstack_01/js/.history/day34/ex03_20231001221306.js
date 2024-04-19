/**
 *  API: application programming interface.
 *  - giao dien lap trinh ung dung
 *  - font-end & back-end
 *  - back-end & back-end
 *  - sử dụng các hàm trong 1 thư viện
 *  khi làm việc với web api => thường sử dụng chuẩn restFull
 * - URL : server API +path(resource)
 * - html method : phương thức giao tiếp
 *  - Get : lấy dữ liệu
 *   - post : thêm mới dữ liệu
 * - put : cật nhập
 * - patch : cật nhập
 * - delete : xoá dữ liệu
 * => back-end sẽ xây dựng.
 * vd:
 * url: https://api.fullstack.edu.vn/users
 * tổng hợp http method + resource => endpoint
 * ví dụ:
 * - POST/users
 * - GET/users
 */

const apiUrl = `http://localhost:3000/users`;

// fetch(apiUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });

const getUsers = async () => {
  const response = await fetch(apiUrl);
  const users = await response.json();
  // response message body.
  document.body.innerHTML = users
    .map(({ name, email }) => {
      return `
         <h2>${name}</h2>
         <h3>${email}</h3>
        `;
    })
    .join("");
  console.log(users);
};

getUsers();
