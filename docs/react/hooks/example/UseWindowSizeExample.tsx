import useWindowSize from "@site/src/hooks/useWindowSize";

const UseWindowSizeExample = () => {
  const windowSize = useWindowSize();

  return (
    <div style={{ border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
      <div>
        <p style={{ margin: 8 }}>Width: {windowSize.width}px</p>
        <p style={{ margin: 8 }}>Height: {windowSize.height}px</p>
      </div>
    </div>
  );
};

export default UseWindowSizeExample;
