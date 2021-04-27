import React from 'react';

const Sender = ({message}) => {
    return (
        <div className="mr-5 mt-3">
                        <h6 className="p-0 m-0 pr-1 text-right">{message.name}</h6>
            <div className="d-flex justify-content-end">
            <div className="bg-dark text-light w-50 p-2 rounded">
            <p className="p-0 m-0">{message.text}</p>
            <small className="p-0 m-0">@ {message.time}</small>
            </div>
        </div>
        </div>
    );
};

export default Sender;