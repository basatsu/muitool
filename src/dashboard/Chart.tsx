import * as React from 'react';


import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid
  , Label, ResponsiveContainer } from 'recharts';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page 2', uv: 490, pv: 2400, amt: 2400},
{name: 'Page 3', uv: 900, pv: 2400, amt: 2400},
{name: 'Page 4', uv: 340, pv: 2400, amt: 2400},
{name: 'Page 5', uv: 450, pv: 2400, amt: 2400}];

export default function Chart() {

  return (
<Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <Grid container spacing={1}>
      <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
      </Grid>
      </Container>
</Box>
  );
}