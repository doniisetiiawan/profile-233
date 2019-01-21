import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { isMobile } from 'react-device-detect';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'transparent',
    color: theme.palette.primary.contrastText,
  },
  toolbarTitle: {
    flex: 1,
    color: theme.palette.primary.contrastText,
    fontFamily: 'Maven Pro',
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolbarTitle}>
          <Typography variant="h6" color="inherit" noWrap>
            {isMobile ? 'DS' : 'Doni Setiawan'}
          </Typography>
        </div>
        <Tooltip title="Twitter: @doni_g6s" placement="bottom" trigger="mouseenter">
          <IconButton aria-label="Twitter" className={classes.icon} href="https://twitter.com/doni_g6s" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="xs" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github: doniisetiiawan" placement="bottom" trigger="mouseenter">
          <IconButton aria-label="Github" className={classes.icon} href="https://github.com/doniisetiiawan" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xs" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Resume" placement="bottom" trigger="mouseenter">
          <IconButton aria-label="Resume" className={classes.icon}>
            <FontAwesomeIcon icon={faFile} size="xs" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="bottom" trigger="mouseenter">
          <IconButton aria-label="LinkedIn" className={classes.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="xs" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email: donisetiawan.050@gmail.com" placement="bottom" trigger="mouseenter">
          <IconButton aria-label="Email" className={classes.icon} href="mailto:donisetiawan.050@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="xs" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
