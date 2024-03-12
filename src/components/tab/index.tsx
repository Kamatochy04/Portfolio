import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TabContent } from "../tabContent";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: <TabContent />,
  },
  {
    key: "2",
    label: "Tab 2",
    children: <TabContent />,
  },
  {
    key: "3",
    label: "Tab 3",
    children: <TabContent />,
  },
];

const Tab: React.FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default Tab;
