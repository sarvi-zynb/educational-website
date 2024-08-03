import React from "react";
import { Layout, Menu, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "../../assets/img/Logo.png";
import styles from "./NavBar.module.css";

const { Header } = Layout;
const items1 = ["خانه", "چاشکده", "مقالات", "درباره ما", "تماس با ما"].map(
  (item) => ({
    item,
    label: item,
  })
);

function NavBar() {
  return (
    <>
      <Header
        className={styles.header}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className={`demo-logo ${styles.logo}`}>
          <img src={logo} alt='لوگو' />
          <span>ولتون آکادمی</span>
        </div>
        <Menu
          mode='horizontal'
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0, justifyContent: "center" }}
        />
        <div className={styles.leftSide}>
          <SearchOutlined style={{ fontSize: "20px" }} />
          <Button type='primary' style={{ padding: "5px 30px" }} ghost>
            ورود
          </Button>
        </div>
      </Header>
    </>
  );
}

export default NavBar;
