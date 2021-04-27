import React from 'react';


const Receiver = ({message}) => {
    
    return (
        <div className="ml-5 mt-3 ">
            <h6 className="p-0 m-0 pl-1">{message.name}</h6>
            <div className="bg-light w-50 p-2 rounded">
            <p className="p-0 m-0">{message.text}</p>
            <small className="p-0 m-0">@{message.time}</small>
            </div>
        </div>
    );
};

export default Receiver;