import { makeStyles, Box, Typography } from '@material-ui/core';
import Image from '../img/bg.jpg';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
    },
    rightContainer: {
        width: '73%',
        height: '100vh',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;