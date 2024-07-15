import { ReactNode, useEffect, useState } from "react";

interface TabsProps {
  defaultActiveKey?: string;
  items: {
    key: string;
    label: string;
    content: ReactNode;
  }[];
}

const Tabs: React.FC<TabsProps> = ({ defaultActiveKey, items = [] }) => {
  const [active, setActive] = useState(defaultActiveKey ?? items[0].key);
  const [index, setIndex] = useState(() => {
    let result = 0;
    items.map((item, index) => {
      if (item.key == defaultActiveKey) {
        result = index;
      }
    });
    return result++;
  });
  const [content, setContent] = useState<ReactNode>(() => {
    return (
      items.find((item) => item?.key == defaultActiveKey)?.content ??
      items[0].content
    );
  });

  useEffect(() => {
    if (defaultActiveKey) {
      setActive(defaultActiveKey);
      items.map((item, index) => {
        if (item.key == defaultActiveKey) {
          setContent(item.content);
          setIndex(index++);
        }
      });
    }
  }, [defaultActiveKey]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        {items.map((item, index) => (
          <div
            key={item.key}
            onClick={() => {
              setActive(item.key);
              setContent(item.content);
              setIndex(index++);
            }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              padding: "4px 0",
              ...(active == item.key ? { color: "#520044" } : {}),
            }}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 2, width: "100%", background: "#e6e6e6" }}>
        <div
          style={{
            width: `${100 / items.length}%`,
            transform: `translateX(${100 * index}%)`,
            height: "100%",
            background: "#520044",
            transitionDuration: "200ms",
            transition: "transform cubic-bezier(0.4, 0, 0.2, 1) 150ms",
          }}
        ></div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Tabs;
