import { useDebounce } from "@site/src/hooks/useDebounce";
import { useState } from "react";

const UseDebounceExample = () => {
  const [value, setValue] = useState("");

  const debounceValue = useDebounce(value, 1000);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "auto" }}>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value!"
          className="border p-2"
          style={{ border: "1px solid #ddd", padding: 8 }}
        />
        <p style={{ marginTop: 8 }}>Value: {debounceValue}</p>
      </div>
    </div>
  );
};

export default UseDebounceExample;
