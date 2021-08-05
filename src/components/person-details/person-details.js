import React from 'react';

import './person-details.css';

const PersonDetails = () => {
  return (
    <div className="person-details">
      <div className="card border-primary mb-3">
        <div className="card-body">
          <div className="wrapper-person-details">
            <div className="person-detail-img">
              <img src="https://media.istockphoto.com/photos/sunrise-picture-id506472311?k=6&m=506472311&s=612x612&w=0&h=UQ1-M3G2K125Y9UWX5EGv63bgzdHb4HPRLfn8Z6rd3Y=" />
            </div>
            <div className="random-planet-text">
              <h3>Planet name</h3>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  population
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  population
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  population
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
