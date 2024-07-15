import useOutsideClick from "@site/src/hooks/useOutsideClick";

const UseOutsideClickExample = () => {
  const { ref, click } = useOutsideClick();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div
          ref={ref}
          style={{
            width: 200,
            height: 100,
            padding: 16,
            cursor: "pointer",
            background: "#52004410",
          }}
        >
          Click me!
        </div>
        <p style={{ margin: 8 }}>
          {click ? "Click Inside!" : "Click Outside!"}
        </p>
      </div>
    </div>
  );
};

export default UseOutsideClickExample;
