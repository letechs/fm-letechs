import { Link } from "react-router-dom";
import { HCourseItem } from "./HCourseItem";
import './Services.css';

const HCourse = () => {
  return (
    <>
      <div className=" HCource">
        <div className=" container-fluid row row-cols-md-3 row-cols-1 p-5 justify-content-around">
          {HCourseItem.map((element) => {
            return (
              <div className="col mb-5">
                <div className="card h-100">
                  <div class="card-body">
                    <h1 class="card-title text-center"><span className="badge badge-dark w-100">{element.title}</span></h1>
                    <div className="row mt-5">
                      <h5 className="col-6">Course Duration</h5>
                      <p className="col-1">:</p>
                      <h5 className="col-5">{element.duration}</h5>
                    </div>
                    <div className="row mb-3">
                      <h5 className="col-6">Fees</h5>
                      <p className="col-1">:</p>
                      <h5 className="col-5">{element.fees}</h5>
                    </div>
                    <p className="card-text justify-content-center">{element.content}</p>
                    </div>
                    <div className="card-footer border-0">
                  <div className="row border-0 bg-dark justify-content-around">
                    <Link to={element.link} class="btn btn-outline-light  w-100 col-4">Details</Link>
                    <Link to="/Contact" className="btn btn-light  w-100 col-4">Register</Link>
                  </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default HCourse;