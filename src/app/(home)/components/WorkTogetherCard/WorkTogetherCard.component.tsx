"use client";

import { withHomeCardLayout } from "@/hoc";

import { Typography } from "antd";

const { Title } = Typography;

const WorkTogetherCard = () => {
  return (
    <div className="l-w-t-card">
      <Title>
        Lets <br />
        Work <mark className="primary-text-color">Together</mark>
      </Title>
    </div>
  );
};

export default withHomeCardLayout(WorkTogetherCard);
