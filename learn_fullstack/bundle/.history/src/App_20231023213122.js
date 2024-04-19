// import vào node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
// cách import từ src
import "./Assets/css/style.css";
import "./Assets/css/Footer.scss";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import image1 from "./images/img01.webp";
export const App = () => {
  return `
    <div class="container">${Header()} 
  <main>
  <h1>Trang chủ F8</h1>
  <a href="" class="btn btn-primary">Vào Hệ Thống</a>
  <hr/>
  ${moment().format("DD/MM/YYYY hh:mm:ss")}
  <img src= "${image1}" width=30 />
  </main>
  ${Footer()}
  </div>`;
};
