import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";

import TaskCard from "../../components/TaskCard";
import { adminData } from "../../utils/AdminTaskCardData";

export interface TaskTypes {
  title: string;
  description: string;
  image: string | null;
  videoWithPreview: string | null;
  createdDate: string;
  manager: string;
  priority: "high" | "normal" | "low";
};

function AdminDashboard() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Box sx={appStyles.searchContainer}>
        <TextField
          value={searchText}
          onChange={handleSearch}
          sx={appStyles.searchField}
          placeholder="Search..."
          label="Search"
        />

        <FormControl sx={appStyles.filterField}>
          <InputLabel id="filter">Filter</InputLabel>
          <Select
            labelId="filter"
            id="filter"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Manger Name</MenuItem>
            <MenuItem value={20}>Priority</MenuItem>
            <MenuItem value={30}>Status</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2} mt={2}>
        {adminData.map((task, index) => {
          return (
            <Grid item xs={4} key={index}>
              <TaskCard task={task} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={appStyles.paginationContainer}>
        <Pagination count={10} color="secondary" size="large" />
      </Box>
    </>
  );
}

export default AdminDashboard;

const appStyles = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    width: "50%",
  },
  searchField: {
    margin: "20px 10px",
    display: "flex",
    flex: 1,
    borderRadius: "20px",
  },
  filterField: {
    width: "30%",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 1,
  },
};

