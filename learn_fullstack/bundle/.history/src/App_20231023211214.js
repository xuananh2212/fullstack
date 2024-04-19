import "./assets/css/style.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
export const App = () => {
  return `<div>${Header()} <main><h1>Trang chủ F8</h1></main>${Footer()}</div>`;
};
