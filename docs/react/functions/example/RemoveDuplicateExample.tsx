import { useRef, useState } from "react";

const removeDuplicateElement = (key: string, data: any) => {
  const prims: any = { boolean: {}, number: {}, string: {} };
  const objs: any = [];

  return data.filter(function (item: any) {
    var type = typeof item[key];
    if (type in prims)
      return prims[type].hasOwnProperty(item[key])
        ? false
        : (prims[type][item[key]] = true);
    else return objs.indexOf(item[key]) >= 0 ? false : objs.push(item[key]);
  });
};

const RemoveDuplicateExample = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState<{ id: number; value: string }[]>([]);
  const [result, setResult] = useState([]);

  const add = () => {
    setData((prev: { id: number; value: string }[]) => [
      ...prev,
      { id: (prev.length && prev[prev.length - 1].id + 1) ?? 0, value: value },
    ]);
    if (inputRef && inputRef.current) {
      setValue("");
      inputRef.current.focus();
    }
  };

  const remove = () => {
    const result = removeDuplicateElement("value", data);
    setResult(result);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <input
          style={{ border: "1px solid #ddd", padding: 8 }}
          placeholder="Enter value!"
          value={value}
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button style={{ padding: "4px 16px" }} onClick={add}>
            Add
          </button>
          <button style={{ padding: 4 }} onClick={remove}>
            Remove Duplicate
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: 8,
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: 8,
        }}
      >
        <textarea
          style={{ border: "1px solid #ddd" }}
          rows={4}
          readOnly
          value={JSON.stringify(data)}
        />
        <textarea
          style={{ border: "1px solid #ddd" }}
          rows={4}
          readOnly
          value={JSON.stringify(result)}
        />
      </div>
    </div>
  );
};

export default RemoveDuplicateExample;
