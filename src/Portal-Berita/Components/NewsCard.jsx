import { Card, Button, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import React from "react";

export default function NewsCard({ article }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      {article ? <CardMedia component="img" height="180" image={article.urlToImage} /> : <Skeleton variant="rectangular" height={180} />}
      <CardContent>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {article ? article.title : <Skeleton />}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
          }}
          variant="body2"
          color="text.secondary"
        >
          {article ? article.content : <Skeleton />}
        </Typography>
      </CardContent>
      <CardContent>
        {article ? (
          <Button size="small" href={article.url}>
            Read More
          </Button>
        ) : (
          <Skeleton>
            <Button size="small"> : </Button>
          </Skeleton>
        )}
      </CardContent>
    </Card>
  );
}
