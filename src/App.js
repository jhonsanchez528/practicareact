import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  altura: {
    paddingTop: 20,
    
  }, 
textoGrande:{
  fontSize: 80,

},
ajusteBoton:{
  padding: 54,
  position: 'absolute',
},

}));


function App() {
  const classes = useStyles();
  return (

    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.altura} >
        <Typography component="div" style={{ backgroundColor: '#c0c0c0',  padding: 50,
    borderRadius: 20, }} >

          <div className={classes.root}>
            <Grid container spacing={3}>
              <h1  style={{color: 'white', textAlign:'center'}}>CALCULADORA</h1>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <form className={classes.root} noValidate autoComplete="off">
                    
                    <TextField className={classes.textoGrande} fullWidth  id="outlined-basic" label="Ingrese un valor" variant="outlined" />
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button fixed  variant="contained" color="secondary">
                    AC
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                 
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}}  >
                    CE
                  </Button>
                  
                </Paper>
                
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}}  >
                    %
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    /
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    7
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    8
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    9
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    X
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    4
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    5
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    6
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    -
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root}>
            
            <Grid container spacing={3}>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    2
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    3
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                
                  <Paper className={classes.ajusteBoton}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    +
                  </Button>
                  </Paper>
                
              </Grid>
            </Grid>
          </div>
          <div className={classes.root}>
          <Grid container spacing={3}>

              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    0
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    .
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" style={{color: "green", borderColor: "green"}} >
                    =
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
