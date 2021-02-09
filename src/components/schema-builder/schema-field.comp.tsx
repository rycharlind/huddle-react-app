import React from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        }
    }),
);

const SchemaFieldComp = (props: any) => {
    const classes = useStyles();

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>

            <TextField
                id={props.guid}
                name="fieldName"
                label="Field Name"
                variant="outlined"
                onChange={props.handler}
                value={props.fieldName}
            />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Field Type</InputLabel>
                <Select
                    id={props.guid}
                    native
                    name="fieldType"
                    value={props.fieldType}
                    onChange={props.handler}
                    label="Field Type"
                >
                    <option aria-label="None" value=""/>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                </Select>
            </FormControl>

            <IconButton aria-label="delete" onClick={() => props.deleteHandler(props.guid)}>
                <DeleteIcon />
            </IconButton>

        </div>
    )
}

export default SchemaFieldComp
