import React, {useState} from 'react'
import { Stack, Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import ReactBoxFlip from 'react-box-flip';

function FrontCard({user}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={ <Avatar src={user.photo}/> }
        title={`${user.firstName} ${user.lastName}`}
        subheader={user.position ? user.position : null}
      />
      
      <CardContent>
        {user.description && (
            <Typography variant="body2" sx={{mb: 2}}>{user.description}</Typography>
        )}
        {user.activityAreas && (
            <Stack direction="row" spacing={2}>
                <Typography>Activity area</Typography>
                <Typography>{user.activityAreas.join('/')}</Typography>
            </Stack>
        )}
      </CardContent>
    </Card>
  )
} 

function BackCard({user}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={ <Avatar src={user.photo}/> }
        title={`${user.firstName} ${user.lastName}`}
        subheader={user.position ? user.position : null}
      />
      
      <CardContent>
        {user.description && (
            <Typography variant="body2" sx={{mb: 2}}>{user.description}</Typography>
        )}
        {user.activityAreas && (
            <Stack direction="row" spacing={2}>
                <Typography>Activity area</Typography>
                <Typography>{user.activityAreas.join('/')}</Typography>
            </Stack>
        )}
      </CardContent>
    </Card>
  )
} 

export default function UserCard({user}) {
  const [isFlipped, setIsFlipped] = useState(false)
  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  return (
        <>
        <button onClick={handleClick}> Flip </button>
            <ReactBoxFlip isFlipped={isFlipped}>
                <FrontCard user={user} />
                <BackCard user={user} />
            </ReactBoxFlip>
        </>
  )
}
