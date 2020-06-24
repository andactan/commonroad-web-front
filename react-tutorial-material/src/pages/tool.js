import React from "react";
import NavBar from "../components/navbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid"
import InfoPaper from "../components/info-paper"
import ReasearchCard from "../components/research-card"

import {makeStyles} from "@material-ui/core/styles";


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
    maxHeight: "350px",
    height: "auto",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  title: {
    fontWeight: "bold",
    fontSize: "min(10vw, 50px)"
  }

}));


export default function Tool(props) {

  const {input} = props;

  const content = input;

  const classes = useStyles();

  const renderTitle = (items, name)=>{
    if (items.length > 0) {
      return (
          <Grid item xs={12}>
            <Divider style={{marginTop: "40px", marginBottom: "40px"}} />
            <Typography className={classes.title}>{name}</Typography>
          </Grid>
      );
    } else {
      return (<div></div>);
    }
  }

  const renderGeneralText = ()=>{
    if (content.general.picture != ""){
      return(
          <Grid item ms={12} md={5}>
            <Typography>{content.general.text}</Typography>
          </Grid>
      );
    } else {
      return(
        <Grid item xs={12}>
            <Typography>{content.general.text}</Typography>
        </Grid>
      );
    }
  };

  const renderGeneralPicture = ()=>{

    if (content.general.picture != ""){
      return(
        <Grid item ms={12} md={7} style={{textAlign: "center"}}>
          <img src={require("../assets/" + content.general.picture)} alt="picture" className={classes.img}></img>
        </Grid>
      );
    } else {
      return(
        <div></div>
      );
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <main className={classes.main}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title}>{content.general.title}</Typography>
          </Grid>

          {renderGeneralText()}

          {renderGeneralPicture()}

          {renderTitle(content.tutorials, "Tutorials")}

          {content.tutorials.map(function (item) {
              const cardProps = {
                title: item.title,
                link: item.link,
                description: item.description,
              }

              return (
                <Grid item sm={12} md={4}> 
                  <InfoPaper {...cardProps}/>
                </Grid>
              )
          })}

          {renderTitle(content.links, "Links")}

          {content.links.map(function (item) {
              const cardProps = {
                title: item.title,
                link: item.link,
                description: item.description,
              }

              return (
                <Grid item xs={12} sm={4}> 
                  <InfoPaper {...cardProps}/>
                </Grid>
              )
            })}

          {renderTitle(content.papers, "Publications")}

          {content.papers.map(function (item) {
              const cardProps = {
                title: item.title,
                authors: item.authors,
                BibTex: item.BibTex,
                more: item.more,
                fullText: item.fullText
              }

              return (
                <Grid item sm={12} md={6}> 
                  <ReasearchCard {...cardProps}/>
                </Grid>
              )
          })}
          
        </Grid>
      </main >
    </div >
  );
}
