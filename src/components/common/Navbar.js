import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import logo from "../../icons/it-logo.png";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ position: "static", zIndex: 1, width: "100%"}}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">
            <img src={logo} height={50} />
          </Link>
        </Menu.Item>
        <Menu.Item key="home">
          <a href="#news">AKTUALNOŚCI</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#description">OPIS</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#management">ZARZĄD</a>
        </Menu.Item>
        <Menu.Item>
          <Link to="/departments">DZIAŁY</Link>
        </Menu.Item>
        <Menu.Item>
          <a href="#partners">PARTNERZY</a>
        </Menu.Item>
        <Menu.Item>
          <Link to="#contact">KONTAKT</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;

const styles = {
  logo: {
    width: "50px",
    height: "50px",
  },
};
