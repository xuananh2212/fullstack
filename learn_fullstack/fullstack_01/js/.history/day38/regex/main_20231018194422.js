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
 * - khớp các kí tự đại hiện.
 *  [A-Z] -> chữ hoa
 *  [a-z]  -> chữ thường
 *   [0-9] -> số
 * khớp độ dài
 * (min, max) -> độ dài từ min đến max
 * (min,) -> độ dài từ min đến vô cùng
 * (max) -> độ dài cố định.
 * {0,1} -> ?
 * {1,} -> +
 * {0,} -> *
 * - nếu muốn so khớp các ký hiệu bị trùng với ký hiệu của biểu
 * thức chính quy => thêm dấu \ phía trước
 * Các ký hiệu viết tắt
 * - \d => [0-9]
 *   \D -> các kí tự không phải là số
 *   \s -> khoảng trắng
 *   \S -> khoảng phải khoảng trắng
 *   \w => A-Za-z0-9_
 *   \W => ^A-Za-z0-9_
 * Phủ định: ^
 * hoặc: |
 *
 */

const str = "ABC";
const pattern = /[^ABC]+/;
const check = pattern.test(str);
console.log(check);
console.log(str);
