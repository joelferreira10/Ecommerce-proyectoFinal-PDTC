import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Link, NavLink} from 'react-router-dom'
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function Sidebar(){
    return(
        <div>
            <Toolbar /> 
            <Divider />
            {/*Crear producto*/}
          <Link  to='home'>
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
}


export default Sidebar