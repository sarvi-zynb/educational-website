import React from "react";
import Card from "./FeatureCard";
import img1 from "../../../assets/img/customer-support 1.png";
import img2 from "../../../assets/img/shield 1.png";
import img3 from "../../../assets/img/video-player 1.png";
import img4 from "../../../assets/img/coding 1.png";
import { Col, Row } from "antd";

const images = [img1, img2, img3, img4];

function Feature() {
  return (
    <>
      <Row gutter={30} style={{ padding: "70px",marginTop:'182px' }} justify={"center"}>
        <Col span={5}>
          <Card
            src={img4}
            title='انجام پروژه های کاربردی'
            caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است '
          />
        </Col>
        <Col span={5}>
          <Card
            src={img3}
            title='کیفیت بالای ویدیو ها'
            caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است '
          />
        </Col>
        <Col span={5}>
          <Card
            src={img2}
            title='گارانتی 100 ٪'
            caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است '
          />
        </Col>
        <Col span={5}>
          <Card
            src={img1}
            title='پشتیبانی دوره'
            caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است '
          />
        </Col>
      </Row>
    </>
  );
}

export default Feature;
