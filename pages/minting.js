import * as React from 'react';
import Drawer from '../src/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlined from '@mui/icons-material/FileUploadOutlined';

function Minting() {
  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
        <Paper sx={{ position: 'relative', mb: 4 }}>
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" sx={{ p: 2 }}>
                <Drawer />
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 } }}>
              <Typography component="span" variant="h4" color="#eda803" gutterBottom>MINTING STAMPS</Typography>
                <Typography sx={{ fontWeight: 500, mt: 2 }} variant="h5" paragraph color="#c4cad6">Unprunable UTXO Art, Because Sats Dont Exists</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4 }}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
              <Typography variant="h6">STAMP MINTING UTILITY</Typography>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#132028' }}>
                <Typography sx={{ mt: 1 }} variant="body1" color="#c4cad6">Image File:</Typography>
                <TextField fullWidth variant="standard" type="text" InputProps={{ endAdornment: (<IconButton component="label"><FileUploadOutlined color="action" /><input styles={{display:"none"}} type="file" hidden name="[stamp]" /></IconButton>) }} />
              </Paper>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#132028' }}>
                <Typography sx={{ mt: 1 }} variant="body1" color="#c4cad6">Artist / Creator Bitcoin Address.</Typography>
                <Typography sx={{ mb: 0.3 }} variant="body2">Legacy (starts with 1) or Segwit (starts with bc1q)</Typography>
                <TextField fullWidth hiddenLabel id="t1" variant="filled"  size="small" />
              </Paper>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#132028' }}>
                <Typography sx={{ mt: 1 }} variant="body1" color="#c4cad6">Artist / Creator Name (optional):</Typography>
                <TextField fullWidth hiddenLabel id="t1" variant="filled"  size="small" />
              </Paper>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#132028' }}>
                <Typography sx={{ mt: 1 }} variant="body1" color="#c4cad6">Collection Name (optional):</Typography>
                <TextField fullWidth hiddenLabel id="t1" variant="filled"  size="small" />
              </Paper>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#132028' }}>
                <Typography sx={{ mt: 1 }} variant="body1" color="#c4cad6">Asset Issuance:</Typography>
                <TextField fullWidth hiddenLabel id="t1" variant="filled"  size="small" />
              </Paper>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Button sx={{ px:4, my:4, backgroundColor: '#00b9d8', color: '#e4ffff', fontSize: 16 }} onClick={() => {  }}>QUOTE</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Minting;