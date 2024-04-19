import "bootstrap/dist/css/bootstrap/css/bootstrap.min.css";
import moment from "moment";
import "./Assets/Style.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
export const App = () => {
  return `
    <div class="container">
    ${Header}
    <main>
    <h1>Trang chủ F8</h1>
    <a href="" class="btn btn-primary">vào hệ thống</a>
    </hr>
    ${moment().format("DD/MM/YYYY HH:mm:ss")} 
    </main>
    ${Footer()}
    </div>
    `;
};
