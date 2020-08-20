import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useApi } from "@/hooks/api.hook";
export default function SearchResults() {
  const mealsList = useApi({
    url: "https://5f3ed66c13a9640016a69219.mockapi.io/api/meals",
    defaultData: [],
  });
  useEffect(mealsList.call, []);

  const { data, isFetched, isLoading, hasData } = mealsList;
  return (
    <>
      <h1>SearchResults</h1>
      <Head>
        <title>seera foods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {isLoading ? <h2>Looading..</h2> : null}
        {hasData
          ? data.map(({ meal_name }) => (
              <li>
                <img src={"https://source.unsplash.com/100x100/?meal"} alt="" />
                {meal_name}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
