import Footer from "../../Footer"
import Navbar from "../../Navbar"
import 'bootstrap/dist/js/bootstrap.bundle';
import './Services.css'
import HCourse from "./HCourse";
import { Link, useHistory } from "react-router-dom";

const AdLevel = () => {
  const hist=useHistory()
  return (
    <>
    <div className="adlevel">
      <div className="container-fluid p-md-5 p-sm-3">
    <h1 className="display-5 text-left">
      <span className="badge py-4 d-block badge-light text-left">Advance Level Course</span></h1>
    <div className="row beleveldrop" id="accordion">
        <div className="col">
    <div class="card">
    <div class="card-header bg-primary" id="section1">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <h5>INTRODUCTION ABOUT FOREX MARKET</h5>
         
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="section1" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>What is Forex?</li>
             <li>Who trade forex?</li>
             <li>Benefits of forex trading</li>
             <li>Trading sessions, best time and day for trading</li>
         </ol>
       </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-secondary" id="section2">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <h5>CURRENCY TRADING TERMINOLOGIES</h5>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="section2" data-parent="#accordion">
      <div class="card-body">
         <ol>
             <li>Recall previous day portions</li>
             <li>Types of chart</li>
             <li>Types of order</li>
             <li>PIP, Lot, Spread, Swap (Rollover), Commission</li>
             <li>Balance, Equity, Margin, Free Margin, Margin level</li>
             <li>Stop loss, Take profit, Trailing stop</li>
             <li>Time frames</li>
             <li>Create demo account</li>
         </ol>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-danger" id="section3">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>TECHNICAL ANALYSIS SECTION I</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="section3" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>How technical works in forex market</li>
             <li>What is mean by Support and Resistance?</li>
             <li>What is mean by Trend?</li>
             <li>Support become resistance and resistance become support</li>
             <li>How to find market trend (Up, Down, Side wave and range bound markets)?</li>
         </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-dark" id="section4">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <h5>TECHNICAL ANALYSIS SECTION II</h5>
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="section4" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>Major candlestick continuation and reversal patterns</li>
             <li>Continuation and reversal chart patterns</li>
             </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-info" id="section5">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h5>TECHNICAL ANALYSIS SECTION III</h5>
        </button>
      </h5>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="section5" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>Moving Averages (MA)</li>
             <li>Stochastic (STC)</li>
             <li>Relative Strength Index (RSI)</li>
             <li>Bollinger Bands (BB)</li>
             <li>Pivot Points</li>
             <li>Fibonacci Retracements</li>
             <li>Moving Average Convergence-Divergence (MACD)</li>
             <li>Commodity Channel Index (CCI)</li>
             <li>Momentum (MOM)</li>
             <li>Average Directional Index (ADX)</li>
             <li>Elliot wave</li>
         </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-warning" id="section6">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <h5>FUNDAMENTAL ANALYSIS</h5>
        </button>
      </h5>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="section6" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>Why we consider Fundamental news</li>
             <li>Over all country economical status</li>
             <li>How to trade during news time?</li>
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
             <li>Trading psychology</li>
         </ol>
     </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-secondary" id="section8">
      <h5 class="mb-0">
        <button class="btn btn-block text-light text-left collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        <h5>SELECTION OF BROKERS</h5>
        </button>
      </h5>
    </div>
    <div id="collapseEight" class="collapse" aria-labelledby="section8" data-parent="#accordion">
      <div class="card-body">
      <ol>
             <li>Recall previous day portions</li>
             <li>Consideration before selection of brokers</li>
             <li>Live account opening</li>
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
export default AdLevel;