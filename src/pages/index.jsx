import React from "react";

import { Row, Col, Card, Input } from "antd";
import { RightCircleOutlined, SearchOutlined } from "@ant-design/icons";

import logo from "./../imgs/logo.png";
import songlib from "./../imgs/songlib.png";

var arr = [...new Array(16).keys()];

export default function Index() {
  return (
    <div className="index">
      <div className="content">
        <Row className="center">
          <Col span={10} className="left">
            <div className="left-splash">
              <img src={songlib} alt="" />
              <h1>{/* Unlimited, ad-free, customized radio */}Discovery, sharing, music life</h1>
              <div className="input-wrap">
                <Input
                  size="large"
                  style={{
                    width: "50%",
                    margin: "0 auto",
                    borderRadius: "16px",
                  }}
                  placeholder="Artist or Genre"
                  suffix={<SearchOutlined />}
                />
              </div>
              <div className="text">
                <p>{/* Join millions of listeners around the world */}A music product focused on professional musicians, DJ</p>
                <p className="">
                  {/* Completely free to use. No card details required. */}Friends recommendation and social networking functions
                </p>
              </div>
            </div>
          </Col>
          <Col span={14} className="right">
            <h3 className="">{/* Trending Stations */}Trending Music</h3>
            <Row gutter={[20, 20]}>
              {arr.map((it, index) => (
                <Col span={8} key={index}>
                  <Card
                    className="cards"
                    bodyStyle={{ padding: 10 }}
                    bordered={false}
                  >
                    <div className="img-wraps">
                      <div className="img-wrap">
                        <img src="https://album1.cdn107.com/ca/1f/ca1f90d3101fafdab26d628e02982022_md.jpg" />
                        <img src="https://album1.cdn107.com/de/cf/decfc5323d4f672123dd2727768cff28_md.jpg" />
                        <img src="https://album1.cdn107.com/d7/a4/d7a4e7f8e0cbd9b5f861d5d19bf80554_md.jpg" />
                        <img src="https://album1.cdn107.com/05/01/0501bf0ab29cabf2f501f11e9e946223_md.jpg" />
                      </div>
                      <div className="play-hover">
                        <RightCircleOutlined />
                      </div>
                    </div>

                    <div className="card-inner">
                      <div>Singing In The Shower</div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <div className="footer">
          <div className="footer-item">
            <a href="/aboutus" target="popout">
              About
            </a>
          </div>
          <div className="footer-item">
            <a href="/contactus" target="popout">
              Contact
            </a>
          </div>
          <div className="footer-item">
            <a href="/terms" target="popout">
              Terms &amp; Privacy
            </a>
          </div>
          <div className="footer-item">
            <a href="/faq" target="popout">
              Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
