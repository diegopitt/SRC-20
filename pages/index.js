import React, { useState } from "react";
import Drawer from '../src/Drawer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mui/material';
import Pagination from '@mui/material/Pagination';

function Main(props) {
  const { data } = props;
  const matches = useMediaQuery('(min-width:796px)');
  const router = useRouter();
  let [page, setPage] = useState(1);
  let [Sdata, setSData] = useState(data);
  let [searchText, setSearchText] = useState("");
  const handlePageChange = async (e, p) => {
    const res = await fetch(`https://stampchain.io/api/stamps?page=${p}&page_size=10`)
    const data = await res.json()
    setSData(data)
    setPage(p);
  }
  const handleSearch = async () => {
    if (searchText == "") return false
    const res = await fetch(`https://stampchain.io/api/stamps?creator=${searchText}`)
    const data = await res.json()
    setSData(data)
  }
  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
        <Paper sx={{ position: 'relative', mb: 4 }}>
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
          <Grid container>
            <Grid item md={12} sx={{ flexGrow: 1 }}>
              <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" sx={{ p: 2 }}>
                <Drawer />
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 } }}>
                <Typography component="div" variant="h4" color="#eda803" noWrap gutterBottom>BITCOIN STAMPS</Typography>
                <Typography sx={{ fontWeight: 500, mt: 2 }} variant="h5" paragraph color="#c4cad6">Unprunable UTXO Art, Because Sats Dont Exists</Typography>
                <Typography variant="subtitle1" color="#eda803">Introducing <b><u>SRC-20 Token Specs!</u></b></Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ py: 2 }}>
          <Paper component="form" sx={{ border: '1px solid #394956', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase sx={{ ml: 1, flex: 1, input: { color: '#394956' } }} onChange={(e)=> setSearchText(e.target.value)} placeholder="Search stamp, creator, TX, CPID" inputProps={{ 'aria-label': 'search' }} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={handleSearch} sx={{ p: '10px', color: '#394956' }} aria-label="Search stamp, creator, TX, CPID">
              <SearchIcon color="#394956" />
            </IconButton>
          </Paper>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Pagination sx={{ mt: 3, mb: 1 }} onChange={handlePageChange} count={10} page={page} variant="outlined" color="action" />
          <Grid item xs={12} sm={10}>
            <ImageList variant="standard" cols={matches ? 3 : 2} gap={26}>
              {Sdata.map((item) => (
                <ImageListItem onClick={() => { router.push(`/${item.tx_hash}`) }} key={item.stamp} sx={{ m: { xs: 0, md: 2 } }}>
                  <img style={{ minHeight: 240, maxHeight: 308 }} src={`${item.stamp_url}`} srcSet={`${item.stamp_url}`} alt={item.title} loading="lazy" />
                  <ImageListItemBar sx={{ "& .MuiImageListItemBar-subtitle": (theme) => theme.typography.stampSubTitle, "& .MuiImageListItemBar-title": (theme) => theme.typography.stampTitle, background: 'rgba(0,0,0,0.86)' }} title={`Stamp ${item.stamp}`} subtitle={`${item.creator}`} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Pagination sx={{ mt: 2, mb: 4 }} onChange={handlePageChange} count={10} page={page} variant="outlined" color="action" />
        </Grid>
      </Grid>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://stampchain.io/api/stamps?page=1&page_size=10')
  const data = await res.json()
  return {
    props: { data },
  }
}
export default Main;