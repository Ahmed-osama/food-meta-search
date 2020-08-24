import { useEffect, useState } from "react";
import { useApi } from "@/hooks/api.hook";
import MealListItem from "@/components/MealListItem/MealListItem";
import {
  Grid,
  CircularProgress,
  Button,
  makeStyles,
  Divider,
} from "@material-ui/core";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import SortIcon from "@material-ui/icons/Sort";
import FilterIcon from "@material-ui/icons/FilterList";
import useSearchResultsStore from "@/store/search-results.store";

const useStyles = makeStyles((theme) => ({
  filterActionContainer: {
    alignSelf: "flex-start",
    borderBottom: `1px solid${theme.palette.grey["300"]}`,
  },

  filterAction: {
    flexBasis: "50%",
    height: "60px",
    borderRadius: "0",
    color: theme.palette.grey["700"],
    "&:first-child": {
      borderRight: `1px solid${theme.palette.grey["300"]}`,
    },
  },
}));

export default function SearchResults() {
  const mealsList = useSearchResultsStore();

  useEffect(mealsList.call, []);
  const {
    isLoading,
    hasData,
    filteredSortedList,
    sortState,
    setFilters,
    setSorting,
    filtersState,
  } = mealsList;
  const {
    query: { meal, location },
  } = useRouter();
  const { filterActionContainer, filterAction } = useStyles();
  return (
    <>
      <Template
        header={() => (
          <Header
            headerText={`results for`}
            meal={meal}
            location={location}
            filter
          />
        )}
      >
        <Grid
          item
          container
          direction="row"
          spacing={0}
          className={filterActionContainer}
        >
          <Button
            className={filterAction}
            startIcon={<FilterIcon />}
            onClick={() =>
              setFilters({
                meal_name: !filtersState.meal_name ? "piz" : "",
              })
            }
          >
            Filter
          </Button>
          <Button
            className={filterAction}
            startIcon={<SortIcon />}
            onClick={() => setSorting(!sortState)}
          >
            Sort
          </Button>
        </Grid>
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
            ? filteredSortedList.map((props, index) => (
                <MealListItem
                  {...props}
                  key={props.id}
                  index={index}
                  key={props.id}
                />
              ))
            : null}
        </Grid>
      </Template>
    </>
  );
}
