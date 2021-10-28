import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()); 
  }, [dispatch])

  return(
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading}  variant="h2" align="center">Memories</Typography>
        <img className={classes.image}  src={ memories } alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifu="space-between" alignItems="stretch" spacing={3}>
            <Grid items xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid items xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;