import React from 'react'; 

interface SetBackgroundProps {
    imgUrl : string; 
}

function SetBackground({imgUrl}: SetBackgroundProps) {
    return (

        <div style={{backgroundImage: `url(${imgUrl})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    
        }}></div>
    ); 
}

export default SetBackground