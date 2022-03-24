import React, { useState } from "react";
import Header from "./Header";
import About from "./images/About";
import Descprition from "./Descprition";
import Modal, { Box, Typography } from "@material-ui/core/Modal";
import "./Active.css";

const Active = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
    <div className='bgimg'>
      <Header />
      <Modal
        //  onClose={handleClose}
        open={open}
        style={{
          border: "2px solid #000",
          backgroundColor: "black",
          boxShadow: "2px solid black",
          height: 400,
          width: 500,
         
          margin: "auto",
          color: "white",
        }}
      >
        <div className="card">
        <div className="card-body">
          <div className="d-flex" style={{justifyContent:'space-between'}}>
            <div className="inputtxts ml-3 mt-4" style={{fontFamily:'Industry-Bold, serif'}}>Allocation</div>
            <button class="cry-modal-new__x" onClick={handleClose}>
              <img
                alt="logo"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjM2NCA3LjA1MDQ4TDE2Ljk0OTcgNS42MzYyN0wxMiAxMC41ODZMNy4wNTAyNSA1LjYzNjI3TDUuNjM2MDQgNy4wNTA0OEwxMC41ODU4IDEyLjAwMDJMNS42MzYwNCAxNi45NUw3LjA1MDI1IDE4LjM2NDJMMTIgMTMuNDE0NEwxNi45NDk3IDE4LjM2NDJMMTguMzY0IDE2Ljk1TDEzLjQxNDIgMTIuMDAwMkwxOC4zNjQgNy4wNTA0OFoiIGZpbGw9IiNGRjI4NEMiLz4KPC9zdmc+Cg=="
              />
            </button>
          </div>
          <div className="container">
          {/* <div className="modalalloc d-flex   mt-3" style={{justifyContent:'space-between'}}>
            <span className="ml-3 " style={{color:"gray",fontSize:"16px",fontWeight:'700'}}>Min/Max Allocation</span>
            <span className="  " style={{color:"#dd6f20",fontSize:"16px",fontWeight:'700'}}>300/10000 BUSD</span>
          </div> */}
          </div>
          <div className="container">
          <div className="modalall  mt-3" style={{justifyContent:'space-between'}}>
            <span className="ml-3 " style={{color:"gray",fontSize:"16px",fontWeight:'700',fontFamily:'Industry-Bold, serif'}}>Min/Max Allocation</span>
            <span className="" style={{color:"#dd6f20",fontSize:"16px",fontWeight:'700',fontFamily:'Industry-Bold, serif'}}>300/10000 BUSD</span>
          </div>
          </div>
          <div className="container">
          <div className="col-md-12 mt-3">
            <span className="alloctext" style={{color:"gray",fontSize:"16px",fontWeight:'700',fontFamily:'Industry-Bold, serif'}}>Your Allocation</span>
          </div>
          </div>
          <div className="container">
          <div className="modalall mt-2" style={{justifyContent:'space-between'}}>
            {/* <span className="ml-3 modeldesc">Min/Max Allocation</span> */}
            <span className="ml-3" style={{color:"gray",fontSize:"16px",fontWeight:'700',fontFamily:'Industry-Bold, serif'}}>0</span>
            <span className=" " style={{color:"#dd6f20",fontSize:"16px",fontWeight:'700',fontFamily:'Industry-Bold, serif'}}> BUSD</span>
          </div>
          </div>
          <div className="container">
          <div className="totalam mt-3">
            {/* <span className="ml-3 modeldesc">Min/Max Allocation</span> */}
            <span className="ml-3 modeldescs "style={{fontSize:"16px",fontWeight:'700', fontFamily:'Industry-Bold, serif'}}>Total Amount</span>
            <span className=" modeldescnumss " style={{color:"gray",fontSize:"16px",fontWeight:'700'}}>0 BUSD</span>
          </div>
          </div>
          <div className="d-flex justify-content-center">
          <button type="button" class="participatebtn mt-2 btn btn-warning">Participate</button>
          {/* <button className="participatebtn mt-2 d-flex justify-content-center" style={{fontSize:"16px",fontWeight:'700'}}>Participate</button> */}
          </div>
          </div>
        </div>
    
        
      </Modal>

      {/*---------------- Active content---------- */}

      <div className="container">
        <div className="buttontxt d-flex ml-5 mt-5">
          <button type="button" class="btn butttons text-white ">
            Active
          </button>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAD/xwD/xwD/xwD/zwD/yAD/xgD/xwAOl1etAAAAB3RSTlMAgN8gEM+gZtFyLwAAAHBJREFUCNddj7EJQCEMRCNmADsHsLCVTJDGDQRbV1BQ1//6gwhedTyS3AW2lIEjW49Tc5oD56wHNr+wQEeCMbeg/diWo0OmgmvSYYhJAxmwLWDurH0VO2BZGSiaycgaUEJY+o91vhFvsNS5JZ/q96EPRwgaUSdfEDoAAAAASUVORK5CYII="
            class="img-fluid ml-2 logoimgs"
            alt="Responsive image"
          ></img>
      
        </div>

        <div class="mt-2">
          <div class="d-flex detailsactive" style={{justifyContent:'space-between'}}>
        
          <div className="d-flex flex-column" >
         <div className="d-flex activelogo">
         <img className="mmlogo"
              src="https://samurai.cyberfi.tech/_nuxt/img/metamafia.72f2449.png"
              alt="..."
              class="rounded-circle rounded-circles"
            />
      
         <h1 className=' texth mt-4 ml-3'>META MAFIA NFT</h1>
         </div>

         <div className="d-flex flex-column">  
     <h5 className="hrading ">Short Description</h5>
         
            <span className="w-75 textdesc text-white">
              Lorem Ipsum is simply dummy printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. industry. Lorem Ipsum
              has been the industry's standard dummy text and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </span>
         </div>
        
         

          

  
          </div>
      
      
         
          
            <div className="d-flex flex-column mt-5">
            
            </div>
           
            

               <div className="activedetails" style={{justifyContent:'space-between'}}>
           <div className=" underline d-flex" style={{justifyContent:'space-between'}}>
            <span className=" " style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>Min/Max Allocation</span>
            <span className="" style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>300/10000 BUSD</span>
            </div>
            <div className="underline d-flex mt-3" style={{justifyContent:'space-between'}} >
            <span className=" " style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>Ends in</span>
            <span className="" style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>Jan 11,2022,4:30PM</span>
            </div>

            <div className="underline d-flex mt-3" style={{justifyContent:'space-between'}}>
            <span className=" " style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>Max Allocation</span>
            <span className="" style={{fontSize:'20px',fontWeight:'700',color:"#dd6f20",fontFamily:'Industry-Medium,serif'}}>Jan 11,2022,4:30PM</span>
            </div>
            <div className="underliness mt-3">
            <span className=" textin" style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif'}}>Access</span>
            <span className=" namedesc" style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif'}}>Jan 11,2022,4:30PM</span>
            </div>
            <div className="d-flex mt-1" style={{justifyContent:'space-between'}}>
              <span style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif',color:"#dd6f20"}}>
                Starts In
              </span>
              <span style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif',color:"#dd6f20"}}>
              Jan 11,2022,4:30PM
              </span>
            </div>
           <div className="progress" style={{height:'0.5rem'}}>
  <div className="progress-bar style={{backgroundColor:'green'}}" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
</div>
 <div className="underline mt-2">
              <span style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif',color:"#dd6f20"}}>
                1 GOLD =0.02BUSD
              </span>
             
            </div>
            <div className="mt-2">
              <span style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif',color:"#dd6f20"}}>Your allowed allocation</span>
            </div>
          
           
            </div>
            </div>
       
        </div>

        {/*--------------Links and buttons contents  */}

        <div className="headtext d-flex flex-column ">
          <span className="text-warning linkactive d-flex" style={{justifyContent:'space-between'}}>
          <div style={{fontSize:'20px',fontWeight:'700',fontFamily:'Industry-Medium,serif',color:"#dd6f20"}}>
          Links
          </div>
          <div className="activegroupbuttons">
         <div className="gruobuttons mt-2">
              <button
                type="button"
                onClick={handleOpen}
                class="btn btn-warning bscccon btn-lg  mt-2> "
              >
                Connect
              </button>
              <button
                type="button"
                class="btn btn-outline-warning bscccons btn-lg mx-2 mt-1 "
              >
                View Bscscan
              </button>
            </div>
        </div>
          </span>
        
          <div class="d-flex flex-column">
          <div className="d-flex  socialmdialink">
            <img style={{padding:'6px'}}
              src="https://samurai.cyberfi.tech/_nuxt/img/website.edbded8.svg"
              alt="..."
              class="rounded-circle border border-warning"
            />
            <img style={{padding:'6px'}}
              src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
              alt="..."
              class="rounded-circle border border-warning ml-3"
            />
            <img style={{padding:'6px'}}
              src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
              alt="..."
              class="rounded-circle border border-warning ml-3"
            />
          </div>
          </div>
         
        </div>
       
          

        
        {/*--------------Links and buttons contents  */}
        {/* ------------About---------- */}

        <About />
        <Descprition />
        {/* -----------close About------------ */}
      </div>
      {/* -------------Close Active cintent------------ */}
      </div>
    </>
  );
};

export default Active;
