
import {Box, List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
  Avatar, Checkbox,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { useUser } from '../contexts/userContext';

type UProps = {
  searchTerm: string
}

const UserCard = ({searchTerm}: UProps) => {
  const {users} = useUser();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [check, setCheck] = useState<string>("");

  const handleCheck = (id: number) => {
    console.log(id);
  }
  return(
    <Box sx={{ width: '100%', maxWidth: 1100, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {users.filter((u) => {
            if (searchTerm === "") {
              return u;
            }else if(u.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || u.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ){
              return u;
            }
          }).map((u, k) => (
            <ListItem disablePadding key={k}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={`${u.first_name} ${u.last_name}`} src={u.avatar} />
              </ListItemIcon>
              <ListItemText primary={`${u.first_name} ${u.last_name}`}/>
              <Typography>{u.email}</Typography>
              <Checkbox {...label} value={check} onClick={() => handleCheck(u.id)} onChange={(e) => setCheck(e.target.value)} />
            </ListItemButton>
          </ListItem>
          )) }
        </List>
      </nav>
      </Box>
  )
}

export default UserCard;
