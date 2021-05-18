import React from 'react';
import './HomeCard.css'
import { HomeCardItem } from "./HomeCardItem";


const HomeCard = () => {
  return (
    <>
    <div className=" container-fluid services-all">
      <h1 className="services-title">Learn About CFD and Forex Trading</h1>
      <div className="row p-4 justify-content-center">
        {HomeCardItem.map((element) => {
          return (
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div className="card services-card h-100">
                <div class="single-services">
                  <div class="service-inner">
                    <a class="service-icon" href="#">
                      {element.icon}
                    </a>
                    <div class="service-content">
                      <h4><a href="#">{element.title}</a></h4>
                      <p align="justify">{element.content}</p>
                    </div>
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

export default HomeCard;