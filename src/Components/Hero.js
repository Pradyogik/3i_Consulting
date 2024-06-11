import React from "react";



function Hero(props){


    return(<>
    <div className="conatainer-fluid">
        <img style={{width: "100%" , height: '100%' , objectFit: 'cover'}} src={props.bannerImg}/>
    </div>
    </>)
}

export default React.memo(Hero)