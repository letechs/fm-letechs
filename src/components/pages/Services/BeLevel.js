import Footer from "../../Footer"
import './Services.css'
import { Link, useHistory } from "react-router-dom";

const BeLevel = () => {
  const hist=useHistory()
  return (
    <>
    <div className="belevel">
      <div className="container-fluid p-md-5 p-sm-3">
    <h1 className="display-5 text-left"><span className="badge py-4 d-block badge-light text-left">Beginners Level Course</span></h1>
    <div className="row beleveldrop" id="accordion">
        <div className="col">
    <div class="card">
    <div class="card-header bg-primary" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <h4>Section - I</h4>
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <h4>What is Forex Trading?</h4>
      <ol>
        <li>
          What is Forex?
        </li>
        <li>
          Who Trade Forex?
        </li>
        <li>
          What is trade?
        </li>
        <li>
          Major currency pairs?
        </li>
      </ol>
       </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-info" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <h4>Section - II</h4>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        <h4>Why Trade Forex?</h4>
      <ol>
        <li>
          Stock and Forex Market Trading Volume?
        </li>
        <li>
          Futures of Forex Market?
        </li>
        <li>
          World stock market trading sessions?
        </li>
        <li>
          Difference between Forex and Stock Market?
        </li>
      </ol>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-danger" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h4>Section - III</h4>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      <h4>Money Management ( Risk Management )</h4>
      <ol>
        <li>
          How much lot can take for my Equity?
        </li>
        <li>
          How much risk can take per trade?
        </li>
        <li>
          How much risk can take per day?
        </li>
        <li>
          How much risk can i take from my capitl?
        </li>
        <li>
          How much profit i can expect from my capitl?
        </li>
      </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-dark" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h4>Section - III</h4>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      <h4>Psychology ( Emotion Conteol )</h4>
      <ol>
        <li>
        Overcoming Greed?
        </li>
        <li>
        Understanding Fear?
        </li>
        <li>
          Hope?
        </li>
        <li>
          Regreat?
        </li>
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
export default BeLevel;