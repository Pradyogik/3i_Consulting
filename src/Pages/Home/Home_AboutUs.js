import React from "react";
import squareImg from '../../Assets/Images/3002.png';
import liImg from '../../Assets/Images/Rectangle 8.png';
import liCheckImg from '../../Assets/Images/fi_check-circle.png';
import yearsImg from '../../Assets/Images/Group 11652.png';
import { NavLink } from "react-router-dom";
import aboutImg832 from '../../Assets/Images/Rectangle 832.png';
import aboutImg833 from '../../Assets/Images/Rectangle 833.png';
import aboutImg834 from '../../Assets/Images/Rectangle 834.png';
import aboutImg69 from '../../Assets/Images/Frame 69.png';
import aboutImage from '../../Assets/Images/aboutImage.png';
import './Home.css';

function Home_AboutUs() {
  return (
    <div className="Home_AboutUsContainer">
      <div className="Home_AboutUsImageContainer">
        <div className="imageWrapper">
          <img src={aboutImage} alt="AboutImg" className="img1"/>
        </div>
      </div>

      <div className="Home_AboutUsContentContainer">
        <div className="d-flex about-us-header">
        <img style={{width : '10px' , height: '10px' , marginRight : '5px', marginTop : '15px'}} src={liImg}/>
          <li>About Us</li>
        </div>
        <div className="about-us-text">
          <div className = "HeadingText">
             <h1>
             <span style={{color : '#0D98D9'}}>Digital Transformation</span> with Innovation and Expertise!
             </h1>
          </div>
          <p>Providing innovative, comprehensive digital solutions to drive your organization's transformation. Ensuring success through expertise and cutting-edge technology.</p>
        </div>
        <div className="about-us-services">
          <div className="d-flex align-items-center liDiv1">
            <img className="mr-tick" src={liCheckImg} alt="Check icon"/>
            <li>Comprehensive tech services, from app and website development to admin dashboards, tailored to your needs.</li>
          </div>
          <div className="d-flex align-items-center liDiv2">
            <img className="mr-tick" src={liCheckImg} alt="Check icon"/>
            <li>We Provide strategic consulting to streamline operations.</li>
          </div>
          <div className="d-flex align-items-center liDiv3">
            <img className="mr-tick" src={liCheckImg} alt="Check icon"/>
            <li>Offering secure server deployment and management.</li>
          </div>
          <div className="d-flex align-items-center liDiv4">
            <img className="mr-tick" src={liCheckImg} alt="Check icon"/>
            <li>Specializing in SAP, ERP and AWS solutions, optimizing your enterprise resource planning and cloud infrastructure.</li>
          </div>
          <div className="d-flex align-items-start justify-content-center mt-1 liDiv">
            <img className="mr-tick" src={liCheckImg} alt="Check icon"/>
            <li>Focusing on client success through personalized service, expert support, and innovative solutions.</li>
            <div>
              <img className="years-img" src={yearsImg} alt="Years of experience"/>
            </div>
          </div>
          {/* <div className="d-flex ml-5 align-items-end justify-content-start liDiv"> */}
            <li className='learnmorec'>
              <NavLink to={'/'}>Learn More&gt;</NavLink>
            </li>
          {/* </div> */}
        </div>
      </div>

    </div>
  );
}

export default React.memo(Home_AboutUs);














// import React from "react";
// import squareImg from '../../Assets/Images/3002.png';
// import liImg from '../../Assets/Images/Rectangle 8.png'
// import liCheckImg from '../../Assets/Images/fi_check-circle.png'
// import yearsImg from '../../Assets/Images/Group 11652.png';
// import { NavLink } from "react-router-dom";
// import homeabtImg from '../../Assets/Images/home-about-us-img.png'
// import './Home.css';




// function Home_AboutUs(){



//     return(<>
//     <div className=" Home_AboutUsContainer p-0 my-5 container-fluid">
//         <div className="squareImgDiv ml-auto">
//             <img style={{width: '100%' , height: '100%' , objectFit: 'cover'}} src={squareImg} />
//         </div>
//         <div className="Home_AboutUsSection px-3  container-fluid">

//         <div className="Home_AboutUsImgContainer">
       
//                     <img src={homeabtImg} />
//         </div>


//         <div className="Home_AboutUsContentContainer">
//             <div className="d-flex squareBox">
//             <img style={{width : '10px' , height: '10px' , marginRight : '5px', marginTop : '8px'}} src={liImg}/>
//             <li>About Us</li>
//             </div>
//             <div>
//                 <h1> <span style={{color : '#0D98D9'}}>Digital Transformation</span> with Innovation and Expertise!</h1>
//                 <p>Providing innovative, comprehensive digital solutions to drive your organization's transformation. Ensuring success through expertise and cutting-edge technology.</p>
//             </div>
//               <div>
//               <div className="d-flex align-items-center liDiv ">
//                <img className="mr-3" src={liCheckImg}/>
//                <li> 
//                 Comprehensive tech services, from app and website development to admin dashboards,  tailored to your needs.</li>
//                </div>
//                <div className="d-flex align-items-center liDiv ">
//                <img className="mr-3" src={liCheckImg}/>
//                <li> 
//                We Provide strategic consulting to streamline operations.</li>
//                </div>
//                <div className="d-flex align-items-center liDiv ">
//                <img className="mr-3" src={liCheckImg}/>
//                <li> 
//                Offering secure server deployment and management.</li>
//                </div>
//                <div className="d-flex align-items-center liDiv">
//                <img className="mr-3" src={liCheckImg}/>
//                <li> 
//                Specializing in SAP, ERP  and AWS solutions, optimizing your enterprise resource planning and cloud infrastructure..</li>
//                </div>
//                <div className="d-flex align-items-start justify-content-center mt-1 liDiv">
//                <img className="mr-3"  src={liCheckImg}/>
//                <li> 
//                Focusing on client success through personalized service, expert support, and innovative solutions.</li>
//                <div> <img width={'100px'} height={'100px'} src={yearsImg}/> </div>
//                </div>
//                <div className="d-flex ml-5 align-items-end justify-content-start liDiv">
//                <li className='mr-5' > <NavLink style={{}}  to={'/'}>Learn More&gt;</NavLink> </li>
//                </div>
//               </div>
//         </div>

//         </div>
//     </div>


//     </>)
// }

// export default React.memo(Home_AboutUs);