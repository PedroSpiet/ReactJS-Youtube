import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { Menu, AccountCircle, VideoCall, MoreVert, Apps } from '@material-ui/icons'

const usingStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none'
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    grow: {
        flexGrow: 1
    },
    img: {
        width: '8%'
    }
}))

function Home() {
    const classes = usingStyles()

    return (
        <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuIcon} color="inherit">
             <Menu /> 
          </IconButton>
          <img className={classes.img} src="images/download.png" />
          <div className={classes.grow}/>
            <IconButton 
             className={classes.icons}
             color="inherit">
            <VideoCall />     
            </IconButton> 

            <IconButton 
             className={classes.icons}
             color="inherit">
                <MoreVert />
            </IconButton>

            <IconButton 
             className={classes.icons}
             color="inherit">
                <Apps />
            </IconButton>
            
          <Button 
            startIcon={ <AccountCircle /> }
             variant='outlined'
              color='Secondary'>
                  Fazer Login
              </Button>
        </Toolbar>
      </AppBar>
    )
}
export default Home