import React from "react";
import { Typography } from "@mui/material";

const Text = ({ variant = "h6", children, fontSize = "1rem" }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default Text;
