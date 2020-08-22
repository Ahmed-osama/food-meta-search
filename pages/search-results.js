import { useEffect, useState } from "react";
import { useApi } from "@/hooks/api.hook";
import MealListItem from "@/components/MealListItem/MealListItem";
import { Grid, CircularProgress } from "@material-ui/core";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";
export default function SearchResults() {
  const mealsList = useApi({
    url: "/api/meals",
    defaultData: [],
  });
  useEffect(mealsList.call, []);
  const { data, isFetched, isLoading, hasData } = mealsList;
  return (
    <>
      <Template header={() => <Header headerText={"results for : ${}"} />}>
        <Grid
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          spacing={2}
          xs={12}
        >
          {isLoading ? (
            <Grid
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              style={{ alignSelf: "stretch", height: "calc(100vh - 56px)" }}
              container
            >
              <CircularProgress disableShrink />
            </Grid>
          ) : null}
          {hasData
            ? data.map((props) => <MealListItem {...props} key={props.id} />)
            : null}
        </Grid>
      </Template>
    </>
  );
}
