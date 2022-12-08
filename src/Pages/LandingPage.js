import { AppBar, Badge, Button, ButtonBase, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <h1>LandingPage</h1>
      <h4>Header</h4>

      <Typography className="title" variant="h2">
        Test
      </Typography>
      <AppBar color="primary">AppBar</AppBar>
      <ButtonBase variant="contained" color="secondary">
        Button
      </ButtonBase>
      <Button variant="contained" color="error">
        Button
      </Button>
      <Button variant="contained" color="warning">
        Button
      </Button>
      <Button variant="contained" color="info">
        Button
      </Button>
      <Button variant="contained" color="success">
        Button
      </Button>

      <Badge>Badge</Badge>
    </>
  );
};

export default LandingPage;
