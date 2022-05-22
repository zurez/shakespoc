import React, { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, CardActions } from "@mui/material";

export default function SearchResult({
  name,
  sprite,
  description,
  reset,
  error,
}) {
  const lgMatch = useMediaQuery("(min-width:600px)");
  const fallbackImageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
  const [showSkeleton, setShowSkeleton] = useState(true);

  return (
    <Card sx={{ maxWidth: lgMatch ? "30vw" : "80vw" }} raised={true}>
      <CardHeader title={error ? "Not found!" : name} />
      <Box
        alignContent={"center"}
        justifyContent={"center"}
        display={showSkeleton ? "flex" : "none"}
      >
        <Skeleton
          animation="pulse"
          variant="rectangular"
          height={"10vh"}
          width={"100vw"}
        />
      </Box>

      <CardMedia
        component={"img"}
        display={!showSkeleton ? "flex" : "none"}
        src={error ? fallbackImageUrl : sprite}
        onLoad={() => setShowSkeleton(false)}
        onError={({ currentTarget }) => {
          currentTarget.error = null;
          /** ToDo: This can lead to an infinite error loop if 0.png is not available */
          currentTarget.src = fallbackImageUrl;
        }}
      />

      <CardContent>
        <Typography textAlign="center" paragraph={true}>
          {error ? error : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth={true}
          variant="contained"
          onClick={reset}
          aria-label="search again?"
        >
          Search again?
        </Button>
      </CardActions>
    </Card>
  );
}
