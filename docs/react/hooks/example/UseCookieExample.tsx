import useCookie from "@site/src/hooks/useCookie";
import { useState } from "react";

const UseCookieExample = () => {
  const [value, updateCookie, deleteCookie] = useCookie("key", "John Smith");
  const [input, setInput] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>
        Value: <span style={{ fontWeight: 600 }}>{value as string}</span>
      </p>
      <input
        style={{ padding: 8, border: "1px solid #ddd" }}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new value!"
      />
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <button
          style={{ border: "1px solid #ddd", padding: "0 32px" }}
          // @ts-ignore
          onClick={() => updateCookie(input)}
        >
          Update
        </button>
        <button
          style={{ border: "1px solid #ddd", padding: "0 32px" }}
          // @ts-ignore
          onClick={() => deleteCookie()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UseCookieExample;
