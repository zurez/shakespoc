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

export default function SearchResult({ name, sprite, description, reset }) {
  const lgMatch = useMediaQuery("(min-width:600px)");

  const [showSkeleton, setShowSkeleton] = useState(true);

  return (
    <Card sx={{ maxWidth: lgMatch ? "30vw" : "80vw" }} raised={true}>
      <CardHeader title={name} />
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
        src={sprite}
        onLoad={() => setShowSkeleton(false)}
        onError={({ currentTarget }) => {
          currentTarget.error = null;
          currentTarget.src =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
        }}
      />

      <CardContent>
        <Typography textAlign="center" paragraph={true}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth={true} variant="contained" onClick={reset}>
          Search again?
        </Button>
      </CardActions>
    </Card>
  );
}
