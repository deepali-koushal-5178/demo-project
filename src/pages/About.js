import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material';
import '../style/AboutStyle.css';

function About() {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        '& h4': {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem'
        },
        '& p': {
          textAlign: 'justify',
        },
        '@media (max-width: 600px)': {
          mt: 0,
          '$ h4': {
            fontSize: '1.5rem'
          }
        }

      }}>
        <Typography variant='h4'>
          Welcome to the Blueline
        </Typography>
        <p className='about-contents'>
          Blueline Investments is an innovative and comprehensive financial tailored firm with a simple mission: To empower each client to use their wealth to live a great life. Since 1995, we have provided financial planning and investment advice to Individuals, high-net-worth families groups, retirement plans and non-profit organizations.
        </p>
        <br />
        <p className='about-contents'>
          At Blueline, we have a simple mission: to empower you to use your wealth to live a great life. To do that, we believe we must measure success against your life goals, not just against an arbitrary number. We are committed to using our time and talents to help you discover your life goals, identify how best to employ your wealth to achieve those goals and implement strategies for success.
        </p>
      </Box>    
    </Layout>
  )
}

export default About;