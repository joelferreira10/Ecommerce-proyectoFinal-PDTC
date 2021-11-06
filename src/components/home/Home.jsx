import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Switch as Switchs} from 'react-router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar } from '@mui/material';
import logo from './../home/logo.png'
import Sidebar from './Sidebar'

const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
            <Toolbar /> 
            <Divider />
            {/*Crear producto*/}
          <Link to='/'>
            <List>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleIcon fontSize="large" color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Crear Producto"/>
                </ListItem>
            </List>
          </Link>
            { /*Listado de productos*/ }
            {/* <List>
                <ListItem button>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon fontSize="large" color="secondary"/>
                  </ListItemIcon>
                  <ListItemText primary="Lista de productos"/>
                </ListItem>
            </List>

            <List>
                <ListItem button>
                  <ListItemIcon>
                    <GroupSharpIcon fontSize="large" color="success"/>
                  </ListItemIcon>
                  <ListItemText primary="Lista de usuarios"/>
                </ListItem>
            </List> */}
            <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" sx={{mr:2}} src={logo} />
          <Typography  variant="h6" noWrap component="div">
             Bird Store  Panel Administrador 
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Cuando la pantalla es menor a sm */}
        {<Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar/>
        </Drawer>}

          {/*Cuando la pantalla es mayor a SM */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Sidebar/>
        </Drawer>
      </Box>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
        <Switchs>
          <Route path="/" exact>
            home
          </Route>
        </Switchs>
        
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim 
          
        </Typography>*/}
        
      </Box>
      </Router>
    
  </Box>
  );
}


export default Home