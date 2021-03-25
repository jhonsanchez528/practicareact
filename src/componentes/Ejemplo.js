
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));



function Ejemplo(props) {
    const classes = useStyles();
    const [clics, setClics] = useState(0);

    const aumentarValor = () => {
        setClics(clics + 1)
        
    }

    

    return (
        <div>
            <Container fixed>
            <Alert severity="success">usted llego a {clics}</Alert>
            <Button
                onClick={aumentarValor}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                {props.nombreBoton} {clics}
            </Button>
            </Container>
        </div>
    );
}
export default Ejemplo;