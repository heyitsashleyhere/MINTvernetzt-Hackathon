import React from 'react';
import UserCard from './UserCard.jsx';
import { Grid } from "@mui/material";

export default function CardDisplay({users}) {

  return (
    <Grid container spacing={1} minHeight={'100vh'}>
        {users.map(user => (
            <Grid item xs={3} key={user._id}>
                <UserCard user={user} />
            </Grid>
        ))}
    
    </Grid>
  )
}
