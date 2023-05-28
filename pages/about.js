import * as React from 'react';
import Drawer from '../src/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function About() {

  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
        <Paper sx={{ position: 'relative', mb: 4 }}>
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
          <Grid container>
            <Grid item md={12}>
              <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" sx={{ p: 2 }}>
                <Drawer />
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 } }}>
                <Typography sx={{ fontWeight: 500 }} variant="h5" paragraph color="#c4cad6">
                  About
                </Typography>
                <Typography component="span" variant="h4" color="#eda803" gutterBottom>
                  BITCOIN STAMPS
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4 }}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
            <Typography variant="h6" gutterBottom>
              BITCON STAMPS
            </Typography>
            <Typography align="justify" paragraph component="p" variant="body4" gutterBottom>
            Storing "Art on the Blockchain" as a method of achieving permanence is often a misnomer in the NFT world. Most NFTs are merely image pointers to centralized hosting or stored on-chain in prunable witness data. We propose a method of embedding base64-formatted image data using transaction outputs in a novel fashion.
            </Typography>
            <Typography align="justify" paragraph component="p" variant="body4" gutterBottom>
            The means by which this is achieved is encoding an image's binary content to a base64 string, placing this string as a suffix to STAMP: in a transaction's description key, and then broadcasting it using the Counterparty protocol onto the Bitcoin ledger. The length of the string means that Counterparty defaults to bare multisig, thereby chunking the data into outputs rather than using the limited (and prunable) OP_RETURN. By doing so, the data is preserved in such a manner that is impossible to prune from a fullnode, preserving the data immutably forever.
            </Typography>
            <Typography align="justify" paragraph component="p" variant="body4" gutterBottom>
            Given the cost of preserving data in this manner, we suggest the following guidance: 24x24 pixel, 8-colour-depth PNG or GIF. The constraints of this "canvas" are ideal for pixel art. In particular, the CryptoPunks use a native resolution of 24x24 pixels. While the technical specifications are open to interpretation and reinvention, inclusion within the Bitcoin Stamps directory will rely on a number of consensus rules on Bitcoin Stamps which are distinct from any other cases of using P2SH to encode data in this manner.
            </Typography>
            <Typography align="justify" paragraph component="p" variant="body4" gutterBottom>
            Bitcoin Stamps will be numbered based on the transaction timestamp. This is to ensure that the Bitcoin Stamps directory is ordered chronologically. The first Bitcoin Stamp will be the first transaction to include the STAMP: string with a valid base64 string appended in the description key, and so on. A transaction with an invalid or indecipherable base64 string will not be considered a Bitcoin Stamp. The Bitcoin Stamp number will begin at zero and continue indefinitely.
            </Typography>
          </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;