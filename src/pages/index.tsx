import Layout from "@theme/Layout";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    location.href = "/docs/welcom";
  }, []);

  return <Layout></Layout>;
}
