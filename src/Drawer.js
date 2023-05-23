import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ backgroundColor: '#132028', height: '100%', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }} component="nav" aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{ bgcolor: 'transparent', fontWeight:600, fontSize:22, py:2, textAlign: 'center' }} component="div" id="nested-list-subheader">
            SRC-20 STAMPS
          </ListSubheader>
        }>
        <Divider variant="middle" />

      </List>
    </Box>
  );

  return (
    <div sx={{ color: "#ffffff", fontSize: 34 }} style={{ marginBottom: "-8px", paddingRight: "18px", paddingTop: "18px", textAlign: "right", width: '100%' }}>
      <IconButton onClick={toggleDrawer('right', true)}><MenuTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}