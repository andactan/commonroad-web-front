import React from "react";
import NavBar from "../components/navbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card"
import Divider from "@material-ui/core/Divider";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"


import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CardContent } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(5),
    maxWidth: "1250px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  img: {
    maxWidth: "100%",
    height: "auto"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


export default function Scenarios() {

  const classes = useStyles();

  const title = "title"

  return (
    <div>
      <NavBar></NavBar>
      <main className={classes.main}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2">{title}</Typography>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum lectus quis eleifend fermentum.
              Maecenas non dolor venenatis, tempus velit vel, congue tortor. Suspendisse potenti. Sed cursus,
            </Typography>
          </Grid>

          <Grid item xs={12} sm={7}>
            <img src={require("../assets/scenario-3.gif")} alt="cool img" className={classes.img}></img>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.title} variant="h3">subtitle1</Typography>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Link href="#" variant="h5">Tutorial1</Link>
              <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Link href="#" variant="h5">Tutorial2</Link>
              <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Link href="#" variant="h5">Tutorial3</Link>
              <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="h2">Documentation</Typography>
                <Divider />
                <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="h2">Forum</Typography>
                <Divider />
                <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="h2">git repository</Typography>
                <Divider />
                <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="h2">Papers</Typography>
                <Divider />
                <List component="nav">
                  <ListItem button>
                    <ListItemText primary="super cool paper 1" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="super cool paper 2" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="super cool paper 3" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>






        </Grid>
      </main >
    </div >
  );
}
