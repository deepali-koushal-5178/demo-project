import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { plans } from '../data/Data';

function Menu() {
  return (
    <Layout>
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold', my: 3, textAlign:'center'}}>
           Our Services
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: '20px' }}>
          {
            plans.map((data, id) => (
              <Card sx={{ maxWidth: '300px', m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: '300px' }}
                    component={'img'}
                    src={data.img}
                    alt={data.name}
                  />
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {data.name}
                    </Typography>
                    <Typography sx={{ textAlign: 'justify'}}>
                      {data.describe}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
      </Box>
    </Layout>
  )
}

export default Menu;