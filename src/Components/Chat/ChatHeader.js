import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
const ChatHeader = () => {
    return (
        <div>
            <div className="d-flex py-2 border-bottom border-dark">
        <div className="pl-3 pr-2 d-flex align-items-center">
          <Avatar src="" />
        </div>
        <div className="w-100 pl-3">
          <h6 className="p-0 m-0">Mr. Abcd</h6>
          <small>Typing...</small>
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center pr-3">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
        </div>
    );
};

export default ChatHeader;