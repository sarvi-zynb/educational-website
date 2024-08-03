import React from "react";
import { Card, Col, Row, Typography } from "antd";
import styles from "./Cards.module.css";

const { Text } = Typography;

function Cards() {
  return (
    <>
      <Text className={styles.title}>
        برای شروع مسیر <a style={{ color: "#FF001F" }}>برنامه نویسی</a> از این
        ویديو ها شروع کن.
      </Text>
      <Row>
        <Col span={12}>
          <Card bordered={false}></Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}></Card>
        </Col>
      </Row>
    </>
  );
}

export default Cards;
