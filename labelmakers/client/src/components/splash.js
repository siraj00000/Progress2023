import React, { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Splash = () => {
    // const [isLoading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000); // 3000 = 3sec
    // }, [token]);
    return (
        <div className='direction splash-styling1'>
            <ScaleLoader color={"#583e81"} loading={true} />
        </div>
    );
};

export default Splash;