import React from "react";
// import clientBg from '../../Assets/Images/client-bgImg.png';
import CImg1 from '../../Assets/Images/client1.png';
import CImg2 from '../../Assets/Images/client2.png';
import CImg3 from '../../Assets/Images/client3.png';
import CImg4 from '../../Assets/Images/client4.png';
import CImg5 from '../../Assets/Images/client5.png';
import CImg6 from '../../Assets/Images/client6.png';
import CImg7 from '../../Assets/Images/client7.png';
import CImg8 from '../../Assets/Images/client8.png';
import CImg9 from '../../Assets/Images/nagar_nigam.jpg';
import CImg10 from '../../Assets/Images/sunflag.png';
import CImg11 from '../../Assets/Images/skvt.png';
import CImg12 from '../../Assets/Images/aws.png';
import { Link } from "react-router-dom";








function ClientImages(){

        {/* <img src={clientBg}/> */}
    return(<>
    <div className="container-fluid my-5 px-5 clientImagesContainer">
        <div className=" container clientImagesMidContainer">
      <div className="row clientImagesRow">
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight">  <img src={CImg1}/>  </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight"> <img src={CImg2}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight"> <img src={CImg3}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 "> <img src={CImg4}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight borderTop"> <img src={CImg5}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderTop borderRight"> <img src={CImg6}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight borderTop"> <img src={CImg7}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderTop"> <img src={CImg8}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight borderTop"> <img src={CImg9}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight borderTop"> <img src={CImg10}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderRight borderTop"> <img src={CImg11}/> </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 borderTop"> <img src={CImg12}/> </div>

      </div>
        </div>
    </div>
    </>)
}

export default React.memo(ClientImages);