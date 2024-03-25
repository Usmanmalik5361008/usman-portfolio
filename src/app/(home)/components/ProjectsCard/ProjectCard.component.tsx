"use client";

import { withHomeCardLayout } from "@/hoc";
import classes from "../../home.module.scss";
import { Typography } from "antd";

const { Text, Title } = Typography;

const ProjectCard = () => {
  return (
    <div className={classes["project-card"]}>
      <Text className="subtle-text">Showcase</Text>
      <Title level={3} className="m-0">My Projects</Title>
    </div>
  );
};

export default withHomeCardLayout(ProjectCard);
