import { Box, Grid, Table } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navbar from "../../commons/Navbar"
import { Users } from "../Users"

const Admin_users = () => {

  const [user, setUser] = useState([])

useEffect(() => {
  axios.get("http://localhost:3000/api/users/allUsers")
  .then(users=>{
setUser(users.data)
  })
}, [])

  return (
    <>
    <Navbar/>
    <Users users = {user}/>
</>
  )
}

export function GridAllUsers({product}) {

  const navigate = useNavigate()

  const handleRemove = function (){
      axios.delete(`http://localhost:3001/api/products/${product.id}`)
      .then(message=>{
          if(message.status == 204){
              window.location.reload()
              alert('Producto eliminado correctamente')
          }
      })
  }

  const handleEdit = function (){
      navigate(`/product/${product.id}`)
  }

return (
  <div className='paper'>
      <Paper
      sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      >
      <Grid container spacing={2}>
          <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${product.urlId}.jpg`} />
          </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                  {product.name}
              </Typography>
              </Grid>
              <Grid item>
              <Button sx={{ cursor: 'pointer' }} variant="body2" onClick={handleEdit}>
                  Edit
              </Button>
              <Button sx={{ cursor: 'pointer' }} variant="body2" onClick={handleRemove}>
                  Remove
              </Button>
              </Grid>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1" component="div">
              ${product.price}
              </Typography>
          </Grid>
          </Grid>
      </Grid>
      </Paper>
  </div>
);
}


export default Admin_users