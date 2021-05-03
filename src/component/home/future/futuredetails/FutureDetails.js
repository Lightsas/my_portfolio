import React from 'react';
import './FutureDetails.css'

const FutureDetails = ({future}) => {
    console.log(future)
    return (
        <div className="col-md-4">
            <div className="future">
                <img className="futureImg" src={future.img} alt={future}></img>
                <h5 className="mt-3">{future.title}</h5>
            </div>            
        </div>
    );
};

export default FutureDetails;