import * as React from 'react';
import Drawer from '../src/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Minting() {

  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
        <Paper sx={{ position: 'relative', mb: 4 }}>
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
          <Grid container>
            <Grid item md={12}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item sm={6} sx={{ flexGrow: 1 }}></Grid>
                <Grid item md={6} sx={{ flexGrow: 1 }}>
                  <Drawer />
                </Grid>
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 } }}>
                <Typography component="span" variant="h4" color="#eda803" gutterBottom>
                  MINTING STAMPS
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 2 }} variant="h5" paragraph color="#c4cad6">
                  Unprunable UTXO Art, Because Sats Dont Exists
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4 }}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
            <Typography variant="h6">
              STAMP MINTING UTILITY
            </Typography>

          </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Minting;