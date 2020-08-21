import Head from "next/head";
import { useRouter } from "next/router";
export default function Search() {
  const router = useRouter();

  return (
    <>
      <h1>search</h1>
      <button onClick={() => router.push("/search-results")}>search</button>
    </>
  );
}
