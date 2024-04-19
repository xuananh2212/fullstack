// import vào node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
// cách import từ src
import "./Assets/css/style.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
export const App = () => {
  return `
    <div class="container">${Header()} 
  <main>
  <h1>Trang chủ F8</h1>
  <a href="" class="btn btn-primary">Vào Hệ Thống</a>
  <hr/>
  ${moment().format("DD/MM/YYYY")}
  </main>
  ${Footer()}
  </div>`;
};
