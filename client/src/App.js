import 'fontsource-roboto'; 
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import { withStyles , ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, unstable_createMuiStrictModeTheme as createMuiTheme, Button, TextField, Container, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// Custom Components
import ExampleCard from './components/ExampleCard.js'
import ExampleChips from './components/ExampleChips.js'
import ExampleProgress from './components/ExampleProgress.js'
import ExampleBadges from './components/ExampleBadges.js'

// Material UI CSS
const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
  mb3: {
    marginBottom: theme.spacing(3),
  }
});

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    // Get MUI CSS
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Container>
          {/* Some Examples, find more at https://material-ui.com/components/button/ and https://material-ui.com/api/button/ */}
          <Alert variant="filled" severity="success" onClose={() => {}}>
            Material UI Alert!
          </Alert>
          <Box my={3}>
            <TextField label="Material UI Textfield" variant="filled" size="small"/>
            <Button variant="contained" color="primary">
              Material UI Button!
            </Button>
          </Box>
          <ExampleCard/>
          <ExampleChips/>
          <ExampleProgress/>
          <ExampleBadges/>
        </Container>

        {/* <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router> */}
      </ThemeProvider>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(App);
