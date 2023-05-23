import * as React from 'react';
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

function Main(props) {
  const { } = props;
  const matches = useMediaQuery('(min-width:796px)');
  const router = useRouter();
  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
        <Paper sx={{ position: 'relative', mb: 4 }}>
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />
          <Grid container>
            <Grid item md={12}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item sm={6} sx={{ flexGrow: 1 }}>

                </Grid>
                <Grid item md={6} sx={{ flexGrow: 1 }}>
                  <Drawer />
                </Grid>
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 } }}>
                <Typography component="span" variant="h4" color="#eda803" gutterBottom>
                  BITCOIN STAMPS
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 2 }} variant="h5" paragraph color="#c4cad6">
                  Unprunable UTXO Art, Because Sats Dont Exists
                </Typography>
                <Typography variant="subtitle1" color="#eda803">
                  Introducing <b>SRC-20</b> Token Specs!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ pb: 2 }}>
          <Paper component="form" sx={{ p: '2px 4px', mt: 2, display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search stamp, creator, TX, CPID" inputProps={{ 'aria-label': 'search google maps' }} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4 }}>
            <ImageList variant="standard" cols={matches ? 3 : 2} gap={26}>
              {stamps.map((item) => (
                <ImageListItem onClick={() => { }} key={item.img} sx={{ m: { xs: 0, md: 2 } }}>
                  <img style={{ minHeight: 240, maxHeight: 308 }} src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <ImageListItemBar sx={{ "& .MuiImageListItemBar-subtitle": (theme) => theme.typography.stampSubTitle, "& .MuiImageListItemBar-title": (theme) => theme.typography.stampTitle, background: 'rgba(0,0,0,0.86)' }} title={'Stamp:'} subtitle={'Author:'} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
const stamps = [
  { link: '/tcardomomo', img: '/st1.png', title: 'CARDOMOMO', Species: 'Elattaria Cardomumum' },
  { link: '/dienteleon', img: '/st2.png', title: 'DIENTE DE LEON', Species: 'Taraxacum Officinale' },
  { link: '/damiana', img: '/st3.jpg', title: 'DAMIANA', Species: 'Turnera Diffusa' },
  { link: '/coladecaballo', img: '/st4.webp', title: 'COLA DE CABALLO', Species: 'Equisetum Arvense' },
  { link: '/chilcuague', img: '/st5.png', title: 'CHILCUAGUE', Species: 'Heliopsis Longipes' },
  { link: '/canela', img: '/st6.jpg', title: 'CANELA', Species: 'Cinnamumum Ceylanicum' },
  { link: '/albahaca', img: '/st7.jpg', title: 'ALBAHACA', Species: 'Ocimun Basilicum' },
  { link: '/tcacao', img: '/st8.webp', title: 'CACAO', Species: 'Theobroma Cacao', },
  { link: '/jamaica', img: '/st9.png', title: 'JAMAICA', Species: 'Hibiscus Sabdariffa' },
  { link: '/cuachalalate', img: '/st10.png', title: 'CUACHALALATE', Species: 'Amphipterygium Adstringens' },
  { link: '/reishi', img: '/st11.jpg', title: 'HONGO REISHI', Species: 'Ganoderma Lucidum' },
  { link: '/gengibre', img: '/st12.png', title: 'GENGIBRE', Species: 'Zingiber Officinale' },
  { link: '/chilchahua', img: '/st4.webp', title: 'CHILCHAHUA', Species: 'Tagetes Nelsonii Greenm' },
  { link: '/cafeverde', img: '/st2.png', title: 'CAFE VERDE', Species: 'Coffea Arabica' },
  { link: '/hinojo', img: '/st3.jpg', title: 'HINOJO', Species: 'Foeniculum Vulgare', },
  { link: '/cempasuchil', img: '/st7.jpg', title: 'CEMPASUCHIL', Species: 'Tagetes Erecta L' }
];
export default Main;