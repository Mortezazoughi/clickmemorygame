import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: 'teal' }}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3} style={{ marginLeft: '10%' }}>
          <h2 style={{ color: 'white' }}>Click Memory Game</h2>
        </Grid>

        <Grid item xs={6} sm={3} style={{ marginLeft: '40%' }}>
          <h3 style={{ color: 'white' }}>Morteza Zoughi</h3>
        </Grid>
      </Grid>
    </div>
  );
}

// import React from 'react';

// const Footer = () => (
//   <footer className="footer" style={footerStyle}>
//     <p>
//       <h3>Click Memory Game</h3>
//     </p>
//     <p>
//       <h4>Morteza Zoughi</h4>
//     </p>
//   </footer>
// );

// const footerStyle = {
//   background: 'teal',
//   height: '10%',
//   color: '#fff',
//   overflow: ' auto',
//   display: 'inline-block',
//   padding: '0',
//   width: '100%',
//   textAlign: 'center'
// };

// export default Footer;
