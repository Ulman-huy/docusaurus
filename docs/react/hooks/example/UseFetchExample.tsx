import useFetch from "@site/src/hooks/useFetch";

const UseFetchExample = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return <div>{data ? JSON.stringify(data) : ""}</div>;
};

export default UseFetchExample;
