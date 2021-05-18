import React from 'react';
import '../../App.css';
import Footer from '../Footer';


export default function Contact() {
  return (
      <>
      <div className='contact'>
      <div className="container"> 
      <div className="row">
        <div className="col-md-6 col-sm-12">
        </div>
        <div className="col-md-6 col-sm-12">
   
        <form className="contact-form pt-5 px-5">
        <div className="form-row">
          <div className="form-group col-6">
            <label for="fname">First Name</label>
              <input type="text" className="form-control"/>            
          </div>
          <div className="form-group col-6">
            <label for="lname">Last Name</label>
              <input type="text" className="form-control"/>            
          </div>
        </div>
        <div className="form-group ">
            <label for="email">Email Id</label>
              <input type="email" className="form-control"/>            
          </div>
          <div className="form-group">
            <label for="mobile">Mobile</label>
              <input type="text" className="form-control"/>            
          </div>
          <div className="form-group">
            <label for="subject">Subject</label>
              <input type="text" className="form-control"/>            
          </div>
          <div className="form-group">
            <label for="comment">comment</label>
              <textarea type="text" className="form-control"/>            
          </div>
         <button type="submit" className="btn btn-outline-primary btn-block"><h5>Submit</h5></button>      
      </form>
        </div>
        </div>
      </div>
      </div>
      
  <Footer/>
 
  </>
  );
}
