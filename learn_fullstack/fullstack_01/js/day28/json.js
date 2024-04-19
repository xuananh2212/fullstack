/*
  JSON (javascript object motation)
  là chuỗi.
  chuyển dữ liệu từ web F8 thành  định dạng chung mà App F8 đọc được(đảm bảo tính toàn vẹn của dữ liệu)
  -> hầu như các ngôn ngữ đều đọc được và chuyển kiểu dữ liệu của ngôn ngữ đó.
  . các thao tác  với Json
  1. chuyển từ các kiểu dữ liệu thành JSON
  JSON.Stringify;
  2. chuyển từ Json về kiểu dữ liệu tương ứng.
  JSON.parse();
*/

var users = [
  {
    id: 1,
    name: "tuan anh",
    email: "xuantuananh2212@gmail.com",
  },
  {
    id: 2,
    name: "tuan anh",
    email: "xuantuananh2212@gmail.com",
  },
  {
    id: 3,
    name: "tuan anh",
    email: "xuantuananh2212@gmail.com",
  },
  {
    id: 4,
    name: "tuan anh",
    email: "xuantuananh2212@gmail.com",
  },
];

var json = JSON.stringify(users);
console.log(json);

var users = JSON.parse(json);

/**
 *  nguyên tắc
 * - key phải nằm trong dấu nhảy kép
 * - kết thúc cặp key
 * - chỉ có 1 thẻ bọc trong file .json [object, array]
 *
 */
