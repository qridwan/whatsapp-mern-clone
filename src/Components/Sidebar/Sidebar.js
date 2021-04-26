import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Group from '../Group/Group';
import SearchBar from '../SearchBar/SearchBar';
import './Sidebar.css';


const Sidebar = () => {
    const [user] = useContext(UserContext);
    const url = user.photo
    return (
        <div className="sidebar border-right border-dark">
    <div className="d-flex pt-2">
    <div className="pl-3 pr-5 d-flex  align-items-center">
        <Avatar src={url}/>
    </div>
    <div className=" d-flex justify-content-center align-items-center">
       <IconButton><DonutLargeIcon /></IconButton> 
       <IconButton><MessageIcon /></IconButton>
       <IconButton><MoreVertIcon /></IconButton>
    </div>
    </div>

    <div className="my-3">
        <SearchBar />
    </div>


    <div className="">
    <Group/>
    <Group/>
    <Group/>
    </div>
        </div>
    );
};

export default Sidebar;