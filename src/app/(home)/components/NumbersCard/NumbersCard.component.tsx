"use client";

import { Typography } from "antd";

import { withHomeCardLayout } from "@/hoc";
import classes from "../../home.module.scss";

const { Text, Title } = Typography;

const NumbersCard = () => {
  return (
    <div className={classes["numbers-card"]}>
      <Number title={"Years Experience"} num={"04"} />
      <Number title={"Total Clients"} num={"15+"} />
      <Number title={"Total Projects"} num={"20+"} />
    </div>
  );
};

const Number: React.FC<{ title: string; num: string }> = ({ title, num }) => (
  <div className={classes["number"]}>
    <Title level={1} className="m-0">
      {num}
    </Title>
    <Text className={`subtle-text font-medium ${classes["num-title"]}`}>
      {title}
    </Text>
  </div>
);

export default withHomeCardLayout(NumbersCard);
