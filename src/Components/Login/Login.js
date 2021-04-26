import { makeStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { firebaseConfig } from '../../firbase.config';
//ui login 
const image = 
    {
      url: 'https://lh3.googleusercontent.com/0bBfFEkB6ypK6aYw3JAjrk9Kkut-mICiVuQBFBLPdJRcXmUs6RJv3TSEb0HrJteG9Eyx9ITFMEOW10FrqDC41hQVsaukAgdtsXdNjis=w512-l90-sg-rj-c0xffffff',
      title: 'Login',
      width: '40%',
    }
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      background: 'linear-gradient(700deg, #11887A, #24CC63)',
      minHeight: '100vh'
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

 
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const classes = useStyles();
     //login settings
const handleLogin = () => {
    firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const information = {
        loggedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(information);
      history.replace(from);
    })
    .catch((error) => {
     const errorMessage = error.message;
      console.log(
        "🚀errorMessage",
        errorMessage
      );
    });
    }
    return (
        <div onClick={handleLogin} className={classes.root}>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              margin: '20% auto'
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))
      </div>)
    
};

export default Login;