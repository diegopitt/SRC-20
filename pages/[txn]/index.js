import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';


function StampPage(props) {
  const router = useRouter()
  const { stamp } = props;
  console.log(stamp)

  const stampTXN = router.query.txn

  return (
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <IconButton onClick={() => { router.push("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
          <Paper sx={{ position: 'relative', p: 2, }}>
            <img width="100%" src={`${stamp.stamp_url}`} srcSet={`${stamp.stamp_url}`} alt={stamp.title} loading="lazy" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#132028' }}>
            <Typography variant="h6">
              Details
            </Typography>
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