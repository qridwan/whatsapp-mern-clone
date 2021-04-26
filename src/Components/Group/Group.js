import { Avatar } from '@material-ui/core';
import React from 'react';

const Group = () => {
    return (
        <div>
          <div className="d-flex my-2">
    <div className="pl-3 pr-2 d-flex align-items-center">
          <Avatar src="" />
        </div>
    <div className="w-100 pl-1">
          {" "}
          <h6 className="p-0 m-0">Group-1</h6>
          <span className="p-0 m-0">20+member</span>
        </div>
    </div>  
        </div>
    );
};

export default Group;