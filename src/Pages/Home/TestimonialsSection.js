import React from "react";
import './Home.css';
import testimonialProfile from '../../Assets/Images/testimonialProfile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import semicolon from '../../Assets/Images/“.svg';
import whiteSemiColon from '../../Assets/Images/“.png';

function TestimonialsSection(){
    return(<>
     <div classname="container-fluid testimonialSection">
        <div className="text-center mb-5 testimonialHeader">
            <h1>Trusted by Thousands <br/> of Happy Customer</h1>
            <p>These are the stories of our customers who have joined us with great <br/>
                 pleasure when using our crazy services.</p>
        </div>
    <div id="carouselExampleControl" class="carousel slide mb-5" data-intervall="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row testimonialRow">
            <div class="col-md-3 testimonialCol">

              <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="svgImg"  src={whiteSemiColon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">


            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
          
          </div>

        </div>
        <div class="carousel-item">
          <div class="row testimonialRow">
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>


            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={whiteSemiColon} /> 
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-3 testimonialCol">

            <div class="card p-3 testimonialCard">
                <div className="imgBox ">
                <img class="card-img-round mr-4 testimonialImg" src={testimonialProfile} alt="Card image cap"/>
                <div className="imgContentBox">
                <h5 className="">Girish pati Tripathi</h5>
                <p> Mayor, Ayodhya </p>
                </div>
                </div>
                <div class="card-body testimonialBody">
                  <p class="card-text testimonialText">Our web solutions are designed to help your business thrive in the digital landscape, providing user-friendly interfaces and seamless functionality.
                  
                  </p>
                  <div className="d-flex justify-content-end">
                 <img className="" src={semicolon} /> 
                  </div>
                </div>
              </div>

            </div>
        
          </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleControl" role="button" data-slide="prev">
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"> */}
        <FontAwesomeIcon className="leftArrow" style={{color : 'black' , height: '50px', marginRight: '3rem'}} icon={faChevronLeft} />
        {/* </span> */}
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControl" role="button" data-slide="next">
        {/* <span class="carousel-control-next-icon" aria-hidden="true"> */}
        <FontAwesomeIcon className="rightArrow" style={{color : 'black' , height: '50px' , marginLeft: '3rem'}} icon={faChevronRight} />
        {/* </span> */}
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
    </>)
}

export default React.memo(TestimonialsSection);