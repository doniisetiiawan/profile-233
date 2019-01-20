import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

import react from '../../shared/images/react.svg';
import babel from '../../shared/images/babel.svg';
import materialUi from '../../shared/images/material-ui.svg';
import redux from '../../shared/images/redux.svg';
import firebase from '../../shared/images/firebase.svg';
import mongodb from '../../shared/images/mongodb.svg';
import mysql from '../../shared/images/mysql.svg';
import express from '../../shared/images/express.svg';
import graphql from '../../shared/images/graphql.svg';
import apollo from '../../shared/images/apollo.svg';
import webpack from '../../shared/images/webpack.svg';
import nextjs from '../../shared/images/nextjs.svg';
import jest from '../../shared/images/jest.svg';

const styles = theme => ({
  skill: {
    background: theme.palette.primary.contrastText,
    opacity: 0.7,
  },
  avatar: {
    height: 50,
    padding: theme.spacing.unit,
  },
});

function Skill(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" alignItems="center" className={classes.skill}>
      <Tooltip title="React" position="top" trigger="mouseenter">
        <img alt="React logo" src={react} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Babel" position="top" trigger="mouseenter">
        <img alt="Babel logo" src={babel} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Material UI" position="top" trigger="mouseenter">
        <img alt="Material UI logo" src={materialUi} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Redux" position="top" trigger="mouseenter">
        <img alt="Redux logo" src={redux} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Firebase" position="top" trigger="mouseenter">
        <img alt="Firebase logo" src={firebase} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Express" position="top" trigger="mouseenter">
        <img alt="Express logo" src={express} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="MongoDB" position="top" trigger="mouseenter">
        <img alt="MongoDB logo" src={mongodb} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="MySQL" position="top" trigger="mouseenter">
        <img alt="MySQL logo" src={mysql} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="GraphQL" position="top" trigger="mouseenter">
        <img alt="Graphql logo" src={graphql} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Apollo" position="top" trigger="mouseenter">
        <img alt="Apollo logo" src={apollo} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Webpack" position="top" trigger="mouseenter">
        <img alt="Webpack logo" src={webpack} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="NextJS" position="top" trigger="mouseenter">
        <img alt="NextJS logo" src={nextjs} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Jest" position="top" trigger="mouseenter">
        <img alt="Jest logo" src={jest} className={classes.avatar} />
      </Tooltip>
    </Grid>
  );
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);
