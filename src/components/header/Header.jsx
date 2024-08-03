import React from "react";
import styles from "./Header.module.css";
import { Button, Col, Row, Typography } from "antd";
import man from "../../assets/img/man-watching-presentation-in-mobile.png";
import circles from "../../assets/img/circles.svg";
import Ellipse1 from "../../assets/img/Ellipse 9.svg";
import Ellipse2 from "../../assets/img/Ellipse 8.svg";
import Ellipse3 from "../../assets/img/Ellipse 7.svg";
import Ellipse4 from "../../assets/img/Ellipse 10.svg";
import Ellipse5 from "../../assets/img/Ellipse 11.svg";
import Ellipse6 from "../../assets/img/Ellipse 12.svg";
import playIcon from "../../assets/img/play-fill (1) 1.svg";

const { Text } = Typography;
function Header() {
  return (
    <>
      <Row justify={"center"}>
        <Col span={10} className={styles.rightSide}>
          <Row>
            <Text className={styles.title}>
              برای یادگیری مسیر <a style={{ color: "#FF001F" }}>برنامه نویسی</a>{" "}
              اینجا <a style={{ color: "#FF001F" }}>بهترین</a> جاست برای شروع
            </Text>
          </Row>
          <Row>
            <Text type='secondary' style={{ lineHeight: "31px" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان
              <br /> گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان{" "}
            </Text>
          </Row>
          <Row style={{alignItems:'center', justifyContent:'flex-start', marginTop:'58px'}}>
            <Col span={6}>
            <Button type='primary' size="large">
            دوره های آموزشی
          </Button>
            </Col>
            <Col span={6} style={{display:'flex', alignItems:'center'}}>
              <img className={styles.play} src={playIcon}/>
              <Text style={{marginRight:'18px'}}>تماشای ویدیو</Text>
            </Col>
          </Row>
        </Col>
        <Col span={10} className={styles.leftSide}>
          <img src={circles} className={styles.circles} />
          <div className={styles.redRectangle} />
          <div className={styles.blueRectangle} />
          <img src={man} alt='عکس' />
          <Row className={styles.card1}>
            <Col span={14}>
              <div className={styles.titleMentor}>+۷ منتور</div>
              <div className={styles.captionMentor}>
                پشتیبانی و کوچ رایگان دوره ها
              </div>
            </Col>
            <Col span={10}>
              <img
                src={Ellipse1}
                style={{ position: "absolute", zIndex: "4" }}
              />
              <img
                src={Ellipse2}
                style={{ position: "absolute", right: "25px", zIndex: "3" }}
              />
              <img
                src={Ellipse3}
                style={{ position: "absolute", right: "50px", zIndex: "2" }}
              />
            </Col>
          </Row>
          <Col className={styles.card2}>
            <div className={styles.titleMentor2}>دوره های جدید</div>
            <Row className={styles.captionMentor2}>
              <img src={Ellipse4} />
              <span>دوره فرانت</span>
            </Row>
            <Row className={styles.captionMentor2}>
              <img src={Ellipse5} />
              <span>منطق برنامه نویسی</span>
            </Row>
            <Row className={styles.captionMentor2}>
              <img src={Ellipse6} />
              <span>مسیر برنامه نویسی</span>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Header;
