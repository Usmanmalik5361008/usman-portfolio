import { Col, Row } from "antd";
import {
  IntroCard,
  NumbersCard,
  ProfileCard,
  ProjectCard,
  TagLineCard,
  WorkTogetherCard,
} from "./components";
import classes from "./home.module.scss";
import { Gutter } from "antd/es/grid/row";

export default function Home() {
  const gutter: [Gutter, Gutter] = [20, 20];

  return (
    <section className={`container ${classes["home-page-wrapper"]}`}>
      <Row gutter={gutter}>
        <Col xs={24} sm={12} md={12}>
          <IntroCard />
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Row gutter={gutter} className="h-100">
            <Col xs={24} sm={24} md={24}>
              <TagLineCard />
            </Col>
            <Col xs={24} sm={12} md={12}>
              <ProjectCard />
            </Col>
            <Col xs={24} sm={12} md={12}>
              <ProfileCard />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <NumbersCard />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <WorkTogetherCard />
        </Col>
      </Row>
    </section>
  );
}
