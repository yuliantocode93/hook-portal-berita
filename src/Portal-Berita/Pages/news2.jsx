/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import NewsPage from "../Components/NewsPage";
import ErrorAlert from "../Components/ErrorAlert";
import NavBar from "../Components/NavBar";

export default function News2({ apiKey }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (keyword) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    if (keyword !== "") {
      url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    }

    getNews(url);
  };

  const getNews = (url) => {
    setIsLoading(true);
    setErrorMessage("");
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.articles);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <NavBar />
      <SearchBar label="Search News" isLoading={isLoading} callback={handleSearch} />
      {errorMessage === "" ? (
        <Box sx={{ py: "1em", px: "1em", overflow: "hidden" }}>
          <NewsPage isLoading={isLoading} data={data} />
        </Box>
      ) : (
        <ErrorAlert msg={errorMessage} />
      )}
    </Container>
  );
}
