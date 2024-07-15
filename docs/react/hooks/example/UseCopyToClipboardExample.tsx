import { useCopyToClipboard } from "@site/src/hooks/useCopyToClipboard";
import { useState } from "react";

const UseCopyToClipboardExample = () => {
  const [value, setValue] = useState("John Smith");
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div>
      <input
        style={{
          padding: 8,
          border: "1px solid #ddd",
          display: "block",
          width: "100%",
        }}
        placeholder="Enter value and Copy!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{ display: "block", width: "100%", padding: 4, marginTop: 4 }}
        onClick={() => copy(value)}
      >
        Copy
      </button>
      <p className="mt-2">Value: {copiedText}</p>
    </div>
  );
};

export default UseCopyToClipboardExample;
