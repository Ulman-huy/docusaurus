import Tabs from "@site/src/components/Tabs";

const TabsExample = () => {
  const items = [
    {
      key: "1",
      label: "Tab 1",
      content: "Content 1",
    },
    {
      key: "2",
      label: "Tab 2",
      content: "Content 2",
    },
  ];

  return <Tabs items={items} defaultActiveKey="1" />;
};
export default TabsExample;
