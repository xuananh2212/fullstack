/**
 *  try catch
 */
var a = 20;
try {
  // code logic
  // nếu đoạn chương trình trog block try bị lỗi
  //=> đẩy lỗi sang block catch và lưu thông tin vào
  //bieesn exception
  // nếu trường hợp là lỗi logic những vẫn muốn đẩy vào ngoại lệ.
  if (a < 10) {
    throw new Error("biến a phải từ 20 trở lên");
  }
  console.log("chuong trinh bat dau");
  console.log(a);
} catch (e) {
  console.log(e.stack);
  //   console.log([e]);
}
