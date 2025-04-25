"use client";

import { withHomeCardLayout } from "@/hoc";
import { Typography } from "antd";

import classes from "../../home.module.scss";
import Image from "next/image";

const { Text, Title } = Typography;

const IntroCard: React.FC = () => {
  return (
    <div className={classes["intro-card"]}>
      <div></div>
      <div>
        <Text className="subtle-text">A Full Stack Developer</Text>
        <Title className="m-0">Usman Malik</Title>
        <Text className="subtle-text">
          I am a Full Stack Developer based in Pakistan
        </Text>
      </div>
    </div>
  );
};

export default withHomeCardLayout(IntroCard);
