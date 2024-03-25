"use client";

import { Typography } from "antd";

import { withHomeCardLayout } from "@/hoc";

const { Text } = Typography;

const TagLineCard = () => {
  return (
    <div className="tag-line-card">
      <Text>Latest Work and Features Latest Work and Features</Text>
    </div>
  );
};

export default withHomeCardLayout(TagLineCard);
