import React from 'react';
const dateFormat = require("dateformat");
const Receiver = () => {
    const now = new Date();
    const thisTime = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
    return (
        <div className="ml-5 mt-3 ">
            <h6 className="p-0 m-0 pl-1">Mr Xenon</h6>
            <div className="bg-light w-50 p-2 rounded">
            <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur.</p>
            <small className="p-0 m-0">@{thisTime}</small>
            </div>
        </div>
    );
};

export default Receiver;