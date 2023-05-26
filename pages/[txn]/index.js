import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Image from 'next/image'
import { useRouter } from 'next/router'

function StampPage(props) {
  const router = useRouter()
  const { stamp } = props;
  console.log(stamp)

  const stampTXN = router.query.txn

  return (
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
          <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', p: 2, }}>
            <Image src={stamp.stamp_url} width={500} height={500} alt="stamp" />

          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#f7dfca' }}>
            <Typography variant="h6" gutterBottom>
              PRESENTACION
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