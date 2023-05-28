import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp';

function StampPage(props) {
  const router = useRouter()
  const { stamp } = props;
  const stampTXN = router.query.txn
  return (
    <>
      <Paper square elevation={3} sx={{ backgroundColor: '#132028', mb: 4 }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid container item xs={8} sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: '#eda803', fontWeight: 600, fontSize: 22, py: 2, ml:2 }} component="div">BITCOIN STAMPS</Typography>
          </Grid>
          <Grid container item xs={4} sx={{ flexGrow: 1 }} direction="row" justifyContent="flex-end" alignItems="flex-end">
            <IconButton onClick={() => { router.push("/") }}><ReplyTwoToneIcon sx={{ color: "#828fa2", fontSize: 33, mx: 2, my: 1 }} /></IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7} sx={{ '& .markdown': { py: 3, }, }}>
            <Paper sx={{ position: 'relative', p: 1, }}>
              <img width="100%" src={`${stamp.stamp_url}`} srcSet={`${stamp.stamp_url}`} alt={stamp.title} loading="lazy" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
              <Typography variant="h6">
                CREATOR
              </Typography>
              <Typography component="span" variant="body2">
                {stamp.creator}
              </Typography>
              <IconButton aria-label="copy" onClick={() => { navigator.clipboard.writeText(stamp.creator) }} >
                <ContentCopySharpIcon sx={{ fontSize: 16, ml:1}} color="action" />
              </IconButton>
              <Typography variant="h6" sx={{ mt: 2}}>
                TXN
              </Typography>
              <Typography component="div" variant="body2" noWrap sx={{ maxWidth: 256, display: "inline-block" }}>
                {stamp.tx_hash}
              </Typography>
              <IconButton aria-label="copy" onClick={() => { navigator.clipboard.writeText(stamp.tx_hash) }} >
                <ContentCopySharpIcon sx={{ fontSize: 16, ml:1}} color="action" />
              </IconButton>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
              <Typography variant="h6">
                ASSET DETAILS
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="Details">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th">STAMP</TableCell>
                      <TableCell align="right">{stamp.stamp}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">CPID</TableCell>
                      <TableCell align="right">{stamp.cpid}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" sx={{ whiteSpace: 'nowrap' }}>BLOCK INDEX</TableCell>
                      <TableCell align="right">{stamp.block_index}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">SUPPLY</TableCell>
                      <TableCell align="right">{stamp.supply}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">DIVISIBLE</TableCell>
                      <TableCell align="right">{stamp.divisible}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">LOCKED</TableCell>
                      <TableCell align="right">{stamp.locked}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">BTC TX</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
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