/**
 *  try catch
 */

try {
  // code logic
  // nếu đoạn chương trình trog block try bị lỗi => đẩy lỗi sang block catch và lưu thông tin vào bieesn exception
  console.log("chuong trinh bat dau");
  console.log(a);
} catch (e) {
  console.log(e.stack);
  //   console.log([e]);
}
