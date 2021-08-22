import React, { useState } from "react";
import Image from "next/image";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function Rules({ data }) {
    const [rules, setRules] = useState([]);
    function addRule() {
        setRules(rules.concat([null]));
    }
    function removeRule(index) {
        alert(index);
        setRules(rules=>rules.filter((item, i) => i !== index));
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={8}>
                    {rules.map((item, index) => (
                        <Grid container spacing={2} key={index} >
                            <Grid item xs={10}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Rule"
                                    fullWidth
                                    multiline
                                    rows={1}
                                    variant="outlined"
                                    value={item}
                                    />
                            </Grid>
                            <Button variant="contained" color="secondary" onClick={() => removeRule(index)}>Remove</Button>
                        </Grid>))}
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>

                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs>
                    <Button variant="contained" color="primary" onClick={() => addRule()} >+Add Rule</Button>
                </Grid>
            </Grid>
        </div>
    );
}