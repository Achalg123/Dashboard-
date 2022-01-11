import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'


export default function Dashboard() {
    return (
         <>  
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Clones</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Developer</a></li>
            <li><a className="dropdown-item" href="/">Front-end developer</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Backend developer</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Links</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Type anything you want" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <div className="container-fluid my-3">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner.jpg"/>
          </div>
          
        </div>
      </div>
    </div>

    <div className="container my-5">
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">INTERPERABILITY <span className="text-muted"></span></h2>
          <p className="lead">Interoperability allows the user to migrate their documents on a new platform thus not only depriving EHR platforms to become monopolistic but also privileging the user to migrate to a better platform whenever they deem fit. Interoperability can be ensured by simply adhering to EHR guidelines propounded by Ministry of Health which involves storing the files in a particular order, format and style thus synchronising the operations of all EHR companies in the fray. 
            We ensure it by strictly adhering to EHR standards and are also trying to leverage the blocking technology to fulfil it making it a non zero sum game for both the consumers & providers.</p>
        </div>
       
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">EHR MANAGEMENT SYSTEM<span className="text-muted"></span></h2>
          <p className="lead">An EHR is a real time software which updates and secures the patient based information at that instant. While the main purpose of EHRs center around containing the medical and treatment files of the patients but now most of them go beyond this scope and offer more healthcare services while adhering to the EHR standards. An EHR management system is a vital part of the healthcare sector as it embody the diagnosis, medications, history, reports and all the medical files & documents. Bedsides that, it allows the doctor to have a better look and make better decisions regarding the patient's care.
            Medical practice management improves the productivity and efficiency of the staff and the administrator otherwise which is very tedious and time consuming. EHR practices are therefore helpful in bridging the gap between the patient and the doctor. Thus, it improves the healthcare catering and overall quality of the system.</p>
        </div>
        
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 ">
          <h2 className="featurette-heading">PATIENT'S ENGAGEMENT<span className="text-muted"></span></h2>
          <p className="lead">Our traditional healthcare system doesn't provides enough engagement between the patient and his doctor. A good communication is the key for the better treatment and overall well being. Get rid of that old-age way of that patient engagement and embrace the new system  with the changing technology. We provide you the best ways so that you don't have to think twice about getting your doctor's opinion. With our automated messaging system and chatting options, your doctor is just a text away. The notifications and smart scheduling system will get you through the procedure with ease. Jeevitiv provides you all these facilities for the utmost patient satisfaction.</p>
        </div>
        
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">ONLINE CONSULTATION OR BOOK YOUR APPOINTMENT <span className="text-muted"></span></h2>
          <p className="lead">Want to stay at your home and get yourself digitally diagnosed? Online consultation is the way. Get yourself checked as soon as possible using our software. It's safe and secure and you wouldn't have to worry about your data. At times, when we can't go out (for example during corona), online consultation can be really helpful. 
            You can also book your appointment for the next day (or any other day) using our software. Without the unnecessary process, we'll get you done through it and you can schedule your meet up in no time.</p>
        </div>
        
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">ELECTRONIC PRESCRIBING<span className="text-muted"></span></h2>
          <p className="lead">E-prescribing is the computer based automatic generation and transmission of a medical prescription without the need of the traditional paper-pen or faxed prescription. E prescription is the best way to get your medication as it improves the accuracy and safety of the patient in the process. Handwritten notes are prone to mistakes and errors and it can cost you in the long term. But with electronic prescription, you can stay at your home and your medication will be delivered to you. Our e prescribing software is certified and keeps you up to date with all the changing medicines and the protocols.</p>
        </div>
        
      </div>
    
    </div>
    </>
    )
}


//Navbar.prototype = {title:PropTypes.string.isRequired};




