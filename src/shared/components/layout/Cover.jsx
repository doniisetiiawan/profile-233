import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
  heroUnit: {
    background: theme.palette.primary.dark,
    opacity: 0.7,
    minHeight: 'calc(100vh - 206px)',
  },
  heroContent: {
    maxWidth: 700,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 13}px 0 ${theme.spacing.unit * 10}px`,
    color: theme.palette.primary.contrastText,
  },
  text: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Tangerine',
    fontSize: '2.5rem',
    fontWeight: 700,
  },
});

const Cover = (props) => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography className={classes.text} component="h1" variant="h4" align="center" gutterBottom>
          Hello there, so glad you are here.
        </Typography>
        <Typography className={classes.text} variant="h6" align="center">
          Let me tell you a bit about myself. I'm...
        </Typography>
        <Typography className={classes.text} variant="h6" align="center">
          <FontAwesomeIcon icon={faStar} size="xs" /> Software Engineer <FontAwesomeIcon icon={faStar} size="xs" />
        </Typography>
        <Typography className={classes.text} variant="h6" align="center">
          Ex-Laravel supporter and now focus at React
        </Typography>
      </div>
    </div>
  );
};

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cover);
