import { Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";

export default function NewsPage(props) {
  const { isLoading = true, data } = props;

  return (
    <Grid container spacing={2}>
      {(isLoading ? Array.from(new Array(4)) : data).map((item, index) => (
        <Grid item sm={3} key={index}>
          <NewsCard article={item} />
        </Grid>
      ))}
    </Grid>
  );
}

NewsPage.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
