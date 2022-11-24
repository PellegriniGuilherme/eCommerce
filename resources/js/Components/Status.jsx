import React from 'react'

function Status({ status }) {

    if(status){
        return(
            <div className="text-green-600 font-bold text-lg w-full my-2 text-center">
                {status}
            </div>
        );
    }else{
        return null;
    }
}

export default Status
