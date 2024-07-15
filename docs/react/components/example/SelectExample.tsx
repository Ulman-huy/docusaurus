import Select from "./Select";

const SelectExample = () => {
  return (
    <Select
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ]}
      value="Select Me!"
    />
  );
};

export default SelectExample;
