import  { Paper,Box, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';




function SearchComponent() {
 
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }


  return (
    <>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here"
        inputProps={{ 'aria-label': 'search here' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      
     
    </Paper>

    <Box container>
        {search(data).map((dataObj)=>{
          return (
            <Box item  key={dataObj.id}>
               <Typography variant='h6' component={'h6'}>{dataObj.username}</Typography>
               
            </Box>
          )
        })}
      </Box>

    </>
  );
}

export default SearchComponent