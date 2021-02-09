import React from "react";
import HuddleLogo from '../../assets/huddle-logo.svg'
import Avatar from '@material-ui/core/Avatar';
import {Button} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from '../../services/firebase.service'

const HeaderComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            padding: '0px 16px'
        }}>
            <Button style={{display: 'flex', alignItems: 'center'}}>
                <img style={{width: "50px", marginRight: '16px'}} src={HuddleLogo}/>
                <span style={{marginRight: '16px'}}>Huddle</span>
            </Button>
            <div style={{display: 'flex', flexGrow: 1}}></div>
            <Button onClick={handleClick}>
                <Avatar>RL</Avatar>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => firebase.auth().signOut()}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export {
    HeaderComponent
}
