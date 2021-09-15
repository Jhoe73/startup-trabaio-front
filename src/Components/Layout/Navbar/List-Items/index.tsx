import React from 'react';
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomIcon from '@material-ui/icons/Room';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export const mainListItems = (
  <div>
    <Link href='/dashboard'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Início" />
      </ListItem>
    </Link>
    <Link href='/dashboard/places'>
      <ListItem button>
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <ListItemText primary="Espaços" />
      </ListItem>
    </Link>
    <Link href='/dashboard/community'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Comunidade" />
      </ListItem>
    </Link>
    <Link href='/dashboard/profile'>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
    </Link>
    <Link href='/dashboard/exit'>
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sair" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Relatórios</ListSubheader>
    <Link href='/dashboard/book'>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" />
      </ListItem>
    </Link>
    <Link href='/dashboard/plans'>
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="Meus Planos" />
      </ListItem>
    </Link>
  </div>
);