import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Button, Drawer, List, Typography, Divider, ListItem, ListItemText, ListItemIcon, Box} from '@material-ui/core'
import { Menu, AccountCircle, VideoCall, MoreVert, Apps, Whatshot, Subscriptions, VideoLibrary, HistoryOutlined, AddCircle } from '@material-ui/icons'
import  HomeIcon  from '@material-ui/icons/Home'


const usingStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
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
    },
    draw: {
        baground: 'red'
    },
    listItemText: {
        fontSize: 14
    }
}))

function Home() {
    const classes = usingStyles()

    return (
        <div>
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

      <Drawer 
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
                <ListItem button>
                    <ListItemIcon>{<HomeIcon />} </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }}
                    primary={'Inicio'}
                    >                        
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>{<Whatshot />} </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }}
                    primary={'Em Alta'}
                    >                        
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>{<Subscriptions />} </ListItemIcon>
                    <ListItemText classes={{
                        primary: classes.listItemText
                    }}
                    primary={'Inscrições'}
                    >                        
                    </ListItemText>
                </ListItem>

          </List>
          <Divider />
          <List>
          <ListItem button>
                <ListItemIcon>{<HistoryOutlined />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Histórico'}
                >                        
                </ListItemText>
                </ListItem>

                <ListItem button>
                <ListItemIcon>{<VideoLibrary />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Biblioteca'}
                >                        
                </ListItemText>
                </ListItem>
          </List>

          <Divider />
          <Box p={5}>
              <Typography variant='body1'>
                  Faça Login para Curtir vídeos, comentar e se inscrever
              </Typography>
              <Box mt={2}>
                  <Button 
                    size='large'
                    variant='outlined'
                    color="secondary"
                    startIcon={<AccountCircle />}
                    >
                        Fazer Login
                    </Button>
              </Box>
          </Box>
          <Divider />
          <List>
          <ListItem button>
                <ListItemIcon>{<AddCircle />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Filmes'}
                >                        
                </ListItemText>
                </ListItem>

                <ListItem button>
                <ListItemIcon>{<AddCircle />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Jogos'}
                >                        
                </ListItemText>
                </ListItem>

                <ListItem button>
                <ListItemIcon>{<AddCircle />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Música'}
                >                        
                </ListItemText>
                </ListItem>

                <ListItem button>
                <ListItemIcon>{<AddCircle />} </ListItemIcon>
                <ListItemText classes={{
                    primary: classes.listItemText
                 }}
                primary={'Esporte'}
                >                        
                </ListItemText>
                </ListItem>
          </List>
        </div>
      </Drawer>
</div>
    )
}
export default Home