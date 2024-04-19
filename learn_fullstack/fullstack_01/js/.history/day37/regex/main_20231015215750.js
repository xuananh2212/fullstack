/**
 *
 *  regex
 *  Biểu thức chính quy
 *  - tập hợp các ký tự hiệu theo 1 quy tắc nhất định đề xử lý chuỗi.
 *  - viết bằng ngôn ngữ Perl
 * - tác dụng
 * -so khớp: test()
 * - cắt chuỗi: match()
 * - thay thế: replace()
 *
 *  Cú pháp /regex/modified
 * - regex => các ký hiệu của biểu thức chính quy
 * - modified => cấu hình cho biểu thức chính quy
 *  g: -> global
 *   i -> không phân biệt chữ hoa chữ thường.
 *   m -> multi line -> khớp nhiều dòng
 *    s -> single line > khớp 1 dòng
 *
 * các ký hiệu cơ bản
 * - char -> tìm chuỗi char trong chuỗi gốc
 * - khớp dầu chuỗi: ^
 * - khớp cuối chuỗi: $
 */

const str = "tuananh.web@gmail.com";
const pattern = /tuananh/;
console.log(pattern.test(str));
