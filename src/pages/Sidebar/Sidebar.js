import React, { useState } from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreIcon from '@mui/icons-material/More';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import CustomeLink from './CustomeLink';
import useLoggedInUser from '../../hooks/useLoggedInUser';

const Sidebar = ({ handleLogout, user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loggedInUser] = useLoggedInUser();

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const result = user[0]?.email?.split('@')[0];

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitterIcon' />
            <CustomeLink to='/home/feed'>
                <SidebarOptions active Icon={HomeIcon} text='Home' />
            </CustomeLink>
            <CustomeLink to='/home/explore'>
                <SidebarOptions active Icon={SearchIcon} text='Explore' />
            </CustomeLink>
            <CustomeLink to='/home/notifications'>
                <SidebarOptions active Icon={NotificationsIcon} text='Notifications' />
            </CustomeLink>
            <CustomeLink to='/home/messages'>
                <SidebarOptions active Icon={MailOutlineIcon} text='Messages' />
            </CustomeLink>
            <CustomeLink to='/home/bookmarks'>
                <SidebarOptions active Icon={BookmarkBorderIcon} text='Bookmarks' />
            </CustomeLink>
            <CustomeLink to='/home/lists'>
                <SidebarOptions active Icon={ListAltIcon} text='Lists' />
            </CustomeLink>
            <CustomeLink to='/home/profile'>
                <SidebarOptions active Icon={PermIdentityIcon} text='Profile' />
            </CustomeLink>
            <CustomeLink to='/home/more'>
                <SidebarOptions active Icon={MoreIcon} text='More' />
            </CustomeLink>

            <Button variant='outlined' className='sidebar_tweet'>
                Tweet
            </Button>

            <div className="Profile_info">
                <Avatar src={userProfilePic} />
                <div className="user_info">
                    <h4>
                        {
                            loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName
                        }
                    </h4>
                    <h5>@{result}</h5>
                </div>
                <IconButton
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={openMenu ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className='Profile_info1'>
                        <Avatar src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                        <div className="user_info subUser_info">
                            <div>
                                <h4>
                                    {
                                        loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName
                                    }
                                </h4>
                                <h5>@{result}</h5>
                            </div>
                            <ListItemIcon className='done_icon'><DoneIcon /></ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out @sdshuvo</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;