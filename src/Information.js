import React from "react";
import Logo from "./images/logo.png";

const Information = () => {
  return (
    <>
      <div className="headingtext col-lg-6 col-md-6 col-xs-12 d-flex">
        <img src={Logo} alt="..." class="rounded-circle roundlogo mt-2"></img>
        <h3 className="text-white ml-3 mt-2">PROJECT DETAILS</h3>
      </div>

      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div className="card  m-3 mb-5" style={{ width: "21rem",height:"17rem" }}>
            <span className="titlehead">USER INFORMATION</span>
            <div className="card-body">
              <div class="form-group ">
                <div class="underlines">
                  <label for="name" class="control-labels">
                    Tier
                  </label>
                   
                </div>

                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                    Is Wishlisted
                  </label>
                   <label for="name" class="descs ">
                    Not Connected
                  </label> 
                </div>

                <div class="underlines mt-3">
                  <label for="name" class="control-labels ">
                     Allocation left
                  </label>
                   <label for="name" class="descs ">
                    Not Connected
                  </label> 
                </div>
                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                    FCFS allocation left
                  </label>
                   <label for="name" class="descs  ">
                    Not Connected
                  </label> 
                </div>
                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                    PURCHASED
                  </label>
                   <label for="name" class="descs ">
                    Not Connected
                  </label> 
                </div>
              </div>

            
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="card m-3  mb-5" style={{ width: "21rem" }}>
            <span className="titlehead">TOKEN INFORMATION</span>
            <div className="card-body">
              <div class="form-group ">
                <div class="underlines">
                  <label for="name" class="control-labels">
                    Tocken Ticker
                  </label>
                  <label for="name" class="descs ml-5 ">
                GLINT
                  </label>
                   
                </div>

                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                    Tocken Chain
                  </label>
                  
                </div>

                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                    Tocken Price
                  </label>
                   <label for="name" class="descs ml-5 ">
                    1 BUSD=50GLINT
                  </label> 
                </div>
                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                   Vesting
                  </label>
         
                </div>
                <div class="underlines mt-3">
                  <label for="name" class="control-labels">
                   Total Supply
                  </label>
                   
         
                 
                </div>

                
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
