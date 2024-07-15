import usePageVisibility from "@site/src/hooks/usePageVisibility";
import { useEffect, useState } from "react";

const UsePageVisibilityExample = () => {
  const [status, setStatus] = useState<string[]>([]);
  const isChange = usePageVisibility();

  useEffect(() => {
    if (isChange) {
      setStatus((prev) => [...prev, "Page Change!"]);
    }
  }, [isChange]);

  return (
    <ul
      style={{
        border: "1px solid #ddd",
        overflow: "auto",
        padding: 16,
        maxHeight: 100,
      }}
    >
      {status.map((item, index) => (
        <li key={index}>
          {index} + {item}
        </li>
      ))}
    </ul>
  );
};

export default UsePageVisibilityExample;
