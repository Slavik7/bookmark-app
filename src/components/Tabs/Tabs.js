import { Tab, Tabs as TabsContainer } from "@mui/material";
import React, { useState } from "react";

const Tabs = ({ setCategory, categories }) => {
  const [value, setValue] = useState("all");
  return (
    <TabsContainer
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        setCategory(newValue);
      }}
      variant="scrollable"
    >
      {categories.length &&
        categories.map((cat, index) => (
          <Tab label={cat} value={cat} key={index} />
        ))}
    </TabsContainer>
  );
};

export default Tabs;
