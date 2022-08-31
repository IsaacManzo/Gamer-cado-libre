import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';



export default function PaginationControlled(games) {
    const navigate = useNavigate();
  const sendTo = (string) => {
    console.log(string)
    navigate(`/${string}`);
  };
    let gamesPageQuantity
if(games.games.length) gamesPageQuantity=games.games[games.games.length-1].page
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value)
    if(value == 1){
     return setPage(value) , sendTo('')
    }
    setPage(value);
    sendTo(value)
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={gamesPageQuantity} page={page} onChange={handleChange} />
    </Stack>
  );
  }