import React from "react";
import { Card, Col, Row, Typography } from "antd";
import styles from "./FeatureCard.module.css";

const { Text } = Typography;

function FeatureCard(props) {
  return (
    <>
      <Card bordered={false}>
        <Row gutter={[0, 18]} style={{textAlign:'center'}}>
          <Col span={24}>
            <img src={props.src} />
          </Col>
          <Col span={24}>
            <Text className={styles.title}>{props.title}</Text>
          </Col>
          <Col span={24}>
            <Text className={styles.caption}>{props.caption}</Text>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default FeatureCard;
