import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useApi } from "@/hooks/api.hook";
import MealListItem from "@/components/MealListItem/MealListItem";
export default function SearchResults() {
  const mealsList = useApi({
    url: "/api/meals",
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
        {isLoading ? <h2>Loading..</h2> : null}
        {hasData ? data.map((props) => <MealListItem {...props} />) : null}
      </ul>
    </>
  );
}
