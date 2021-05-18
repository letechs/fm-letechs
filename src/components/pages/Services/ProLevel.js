import Footer from "../../Footer"
import Navbar from "../../Navbar"
import 'bootstrap/dist/js/bootstrap.bundle';
import './Services.css'
import HCourse from "./HCourse";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ProLevel = () => {
    const hist=useHistory()
  return (
    <>
    <div className="prolevel">
      <div className="container-fluid p-md-5 p-sm-3 p-3">
    <h1 className="display-5 text-left">
      <span className="badge py-4 d-block badge-light text-left">Professional Level Course</span></h1>
    <div className="row beleveldrop" id="accordion">
        <div className="col">
    <div class="card">
    <div class="card-header bg-primary" id="section1">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <h5>INTRODUCTION</h5>
         
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="section1" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Market Introduction</li>
             <li>Chart setup</li>
             </ol>
       </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-secondary" id="section2">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <h5>TECHNICAL ANALYSIS - I</h5>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="section2" data-parent="#accordion">
      <div class="card-body">
         <ol>
             <li>Support and Resistance</li>
             <li>How to find Support and Resistance</li>
             <li>Determine different kind of Support and Resistance</li>
             <li>Trend Analysis</li>
             <li>Analysis different kindof technical analysis</li>
           </ol>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-danger" id="section3">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>TECHNICAL ANALYSIS SECTION - II</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="section3" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Range trade analysis</li>
             <li>Swing trade analysis</li>
             <li>Trend breakout analysis</li>
             <li>Price action analysis</li>
             <li>Proper entry point and exit point analysis</li>
             <li>Take profit and Stop loss calculation based on technical analysis</li>
         </ol>
     </div>
    </div>
  </div>
   <div class="card">
    <div class="card-header bg-warning" id="section6">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <h5>FUNDAMENTAL ANALYSIS ( NEWS ANALYSIS)</h5>
        </button>
      </h5>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="section6" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Why we consider news when trading?</li>
             <li>Discuss about major country economy,GDP, Employment, Inflation, interest rate, trade balance etc</li>
             <li>News trade ( Risky with high profit )</li>
         </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-success" id="section7">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        <h5>RISK MANAGEMENT</h5>
        </button>
      </h5>
    </div>
    <div id="collapseSeven" class="collapse" aria-labelledby="section7" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>Types of trading styles</li>
             <li>Risk management</li>
             <li>Lot management</li>
         </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-secondary" id="section8">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        <h5>TRADE PSYCHOLOGY</h5>
        </button>
      </h5>
    </div>
    <div id="collapseEight" class="collapse" aria-labelledby="section8" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Why we learn trade psychology?</li>
             <li>How it will affect when trading?</li>
             <li>How to control our ecotions?</li>
         </ol>
     </div>
    </div>
  </div>
</div>

</div>
<div className="row justify-content-center mt-5">
<Link to="#" className="col-md-2 col-sm-4 col-5 mx-3 btn btn-outline-primary " onClick={()=>hist.goBack()}>Go back</Link>
<Link to="/contact" className="col-md-2 col-sm-4 col-5 mx-3 btn btn-primary">Register</Link>
</div>
</div>
    </div>
     <Footer/>
    </>
  )
}
export default ProLevel;