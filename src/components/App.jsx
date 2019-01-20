import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../shared/components/layout/Header';
import Cover from '../shared/components/layout/Cover';
import Footer from '../shared/components/layout/Footer';
import Skill from './Skill/Skill';
import cover from '../shared/images/cover.jpeg';

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#000103',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  layout: {
    width: 'auto',
    background: `url(${cover})`,
    backgroundPosition: 'top left',
    backgroundSize: '100% auto',
  },
  footer: {
    padding: theme.spacing.unit,
    background: theme.palette.primary.contrastText,
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />

      <Helmet>
        <title>Doni Setiawan</title>
        <meta property="og:title" content="Doni Setiawan" />
        <meta property="twitter:title" content="Doni Setiawan" />
        <meta name="title" content="Doni Setiawan" />
        <meta name="description" content="Doni Setiawan" />
        <meta property="og:description" content="Doni Setiawan" />
        <meta property="og:image" content="" />
        <link rel="icon" type="image/png" href="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@doni_g6s" />
      </Helmet>

      <MuiThemeProvider theme={theme2}>
        <div className={classes.layout}>
          <Header />
          <main>
            <Cover />
            <Skill />
          </main>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
