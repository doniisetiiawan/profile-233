import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';

const styles = () => ({
  footerText: {
    textAlign: 'center',
    fontSize: '16px',
  },
  icon: {
    width: '13px',
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="h5" className={classes.footerText} gutterBottom>
            <Tooltip disableHoverListener title="Android App onProgress" placement="top">
              <IconButton aria-label="Android">
                <FontAwesomeIcon icon={faGooglePlay} size="sm" />
              </IconButton>
            </Tooltip>
            <Tooltip disableHoverListener title="iOS App onProgress" placement="top">
              <IconButton aria-label="iOS">
                <FontAwesomeIcon icon={faAppStoreIos} size="sm" />
              </IconButton>
            </Tooltip>
          </Typography>
          <Typography variant="h5" className={classes.footerText} color="textSecondary" component="p">
            Made with <FontAwesomeIcon icon={faHeart} size="sm" /> & <FontAwesomeIcon icon={faGithub} size="sm" /> <strong>-</strong> <FontAwesomeIcon icon={faCopyright} size="sm" /> 2019
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
