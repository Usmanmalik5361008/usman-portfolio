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
        <Col span={12}>
          <IntroCard />
        </Col>
        <Col span={12}>
          <Row gutter={gutter} className="h-100">
            <Col span={24}>
              <TagLineCard />
            </Col>
            <Col span={12}>
              <ProjectCard />
            </Col>
            <Col span={12}>
              <ProfileCard />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <NumbersCard />
        </Col>
        <Col span={12}>
          <WorkTogetherCard />
        </Col>
      </Row>
    </section>
  );
}
