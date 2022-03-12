import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Router,
} from "react-router-dom";
import { Button, Layout, Typography } from "antd";

import Navbar from "./components/common/Navbar";
import history from "./history";

import "./styles/App.css";
import MainPage from "./pages/MainPage";
import DepartmentsPage from "./pages/DeparmentsPage";
import DescriptionPage from "./pages/DescriptionPage";
import ManagementPage from "./pages/ManagementPage";
import PartnersPage from "./pages/PartnersPage";
import NewsPage from "./pages/NewsPage";

const { Footer, Side, Content } = Layout;

const App = () => {
  return (
    // <Layout>
    <BrowserRouter history={history}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/#news" element={<NewsPage />} />
        <Route path="/#description" element={<DescriptionPage />} />
        <Route path="/#management" element={<ManagementPage />} />
        <Route path="/#partners" element={<PartnersPage />} />

        <Route path="/departments" element={<DepartmentsPage />} />
      </Routes>
    </BrowserRouter>
    /* </Layout> */
  );
};

export default App;
