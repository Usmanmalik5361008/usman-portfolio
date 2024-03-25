"use client";

import classes from "../../home.module.scss";

import { withHomeCardLayout } from "@/hoc";
import { Typography } from "antd";

const { Text, Title } = Typography;

const ProfileCard = () => {
  return (
    <div className={classes["profile-card"]}>
      <Text className="subtle-text">Stay with me</Text>
      <Title level={3} className="m-0">
        Profile
      </Title>
    </div>
  );
};

export default withHomeCardLayout(ProfileCard);
