import { Alert, Stack } from "@mui/material";
import React from "react";
import { spacing } from "./SharedStyles";

export default function ErrorList() {
  return (
    <Stack
      spacing="5%"
      sx={{ zIndex: 500, position: "absolute", bottom: "5%", left: "5%" }}
    >
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}
