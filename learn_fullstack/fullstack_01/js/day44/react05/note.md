# vấn đề

- chia sẻ dữ liệu giữa các Component với nhau -> render props + state của component cha
- dữ liệu dùng chung cho các component -> thông tin user sau khi đăng nhập

# giải pháp

- local State -> dùng useState
- Global State: Context Api + useReducer, thư viện bên ngoài : Redux
  Muốn lấy dữ liệu từ context
  import đối tượng context
  import hook useContext

-> gom thành 1 hook mới -> tạo 1 hàm bắt đầu
từ khoá use(React sẽ hiểu là React hook)
