import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../style/AboutStyle.css';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 10, '& h2': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h5' sx={{ ml: 2 }}>Contact Us</Typography>
        <p className='contact-contents'>At Blueline, we have a simple mission: to empower you to use your wealth to live a great life. To do that, we believe we must measure success against your life goals, not just against an arbitrary number. We are committed to using our time and talents to help you discover your life goals, identify how best to employ your wealth to achieve those goals and implement strategies for success.</p>
      </Box>
      <Box sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', textAlign: 'center' }}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SupportAgentIcon sx={{ color: 'red', mr: 2 }} />
                    1800-0000-0000 (Toll-free)
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ color: 'blue', mr: 2 }} />
                    bluelineinvestments@gmail.com
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CallIcon sx={{ color: 'green', mr: 2 }} /> 9456684588
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ m: 3, p: 2 }}>
        <Box sx={{ bgcolor: 'black', color: 'white', textAlign: 'center',borderRadius:('2px','','0','2px'
        ) }}>
          <Typography sx={{ p: 2, borderRadius: 2 }}
          >
            Contact Details
          </Typography>
        </Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 'bold' }}>
            Toll-Free Number
          </AccordionSummary>
          <AccordionDetails >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SupportAgentIcon sx={{ color: 'red', mr: 2 }} />
              1800-0000-0000 (Toll-free)
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 'bold' }}>
            Email
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ color: 'blue', mr: 2 }} />
              bluelineinvestments@gmail.com
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 'bold' }}>
            Phone
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon sx={{ color: 'green', mr: 2 }} /> 9456684588
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Layout>
  )
}

export default Contact;