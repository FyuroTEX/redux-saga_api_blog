import React from 'react';

export const Alert = ({ alertMsg }) => {
    return (
        <div className="alert alert-warning" role="alert">
            {alertMsg}
        </div>
    );
};
