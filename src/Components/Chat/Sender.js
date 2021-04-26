import React from 'react';

const Sender = () => {
    const dateFormat = require("dateformat");
    const now = new Date();
    const thisTime = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
    return (
        <div className="mr-5 mt-3">
                        <h6 className="p-0 m-0 pr-1 text-right">Mr Ridwan</h6>
            <div className="d-flex justify-content-end">
            <div className="bg-dark text-light w-50 p-2 rounded">
            <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error!</p>
            <small className="p-0 m-0">@{thisTime}</small>
            </div>
        </div>
        </div>
    );
};

export default Sender;