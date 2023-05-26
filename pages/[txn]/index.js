import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function StampPage(props) {
  const router = useRouter()
  const { stamp } = props;
  console.log(stamp)

  const stampTXN = router.query.txn

  return (
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <IconButton onClick={() => { router.push("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m: 2 }} /></IconButton>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
          <Paper sx={{ position: 'relative', p: 1, }}>
            <img width="100%" src={`${stamp.stamp_url}`} srcSet={`${stamp.stamp_url}`} alt={stamp.title} loading="lazy" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
            <Typography variant="h6">
              ASSET DETAILS
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="Details">
                <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row">STAMP</TableCell>
                    <TableCell align="right">{stamp.stamp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">CREATOR</TableCell>
                    <TableCell align="right">{stamp.creator}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">CPID</TableCell>
                    <TableCell align="right">{stamp.cpid}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BLOCK INDEX</TableCell>
                    <TableCell align="right">{stamp.block_index}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">SUPPLY</TableCell>
                    <TableCell align="right">{stamp.supply}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">DIVISIBLE</TableCell>
                    <TableCell align="right">{stamp.divisible}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">LOCKED</TableCell>
                    <TableCell align="right">{stamp.locked}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BTC TX</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const txn = ctx.query.txn;
  const res = await fetch(`https://stampchain.io/api/stamps?tx_hash=${txn}`)
  const data = await res.json()
  const stamp = data[0]
  return {
    props: { stamp },
  }
}

export default StampPage