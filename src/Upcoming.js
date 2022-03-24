import React from "react";
import Header from "./Header";
import About from "./images/About";
import Descprition from "./Descprition";

const Upcoming = () => {
  return (
    <>
      <div className="bgimg">
        <Header />

        <div className="container">
          <div className="buttontxt d-flex ml-5 mt-5">
            <button
              type="button"
              class="btn btn-warning activebtn mt-2"
              style={{ height: "30" }}
            >
              Upcoming
            </button>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAD/xwD/xwD/xwD/zwD/yAD/xgD/xwAOl1etAAAAB3RSTlMAgN8gEM+gZtFyLwAAAHBJREFUCNddj7EJQCEMRCNmADsHsLCVTJDGDQRbV1BQ1//6gwhedTyS3AW2lIEjW49Tc5oD56wHNr+wQEeCMbeg/diWo0OmgmvSYYhJAxmwLWDurH0VO2BZGSiaycgaUEJY+o91vhFvsNS5JZ/q96EPRwgaUSdfEDoAAAAASUVORK5CYII="
              class="img-fluid ml-2 logoimgs"
              alt="Responsive image"
            ></img>
          </div>

          <div class="mt-2">
            <div
              class="d-flex detailsactive"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex flex-column">
                <div className="d-flex activelogo">
                  <img
                    className="mmlogo"
                    src="https://samurai.cyberfi.tech/_nuxt/img/metamafia.72f2449.png"
                    alt="..."
                    class="rounded-circle rounded-circles"
                  />

                  <h1 className=" texth mt-4 ml-3">META MAFIA NFT</h1>
                </div>

                <div className="d-flex flex-column">
                  <h5 className="hrading ">Short Description</h5>

                  <span className="w-75 textdesc text-white">
                    Lorem Ipsum is simply dummy printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum. industry.
                    Lorem Ipsum has been the industry's standard dummy text and
                    more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </span>
                </div>
              </div>

              <div className="d-flex flex-column mt-5"></div>

              <div
                className="activedetails"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className=" underline d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span
                    className=" "
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Min/Max Allocation
                  </span>
                  <span
                    className=""
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    300/10000 BUSD
                  </span>
                </div>
                <div
                  className="underline d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <span
                    className=" "
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Ends in
                  </span>
                  <span
                    className=""
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Jan 11,2022,4:30PM
                  </span>
                </div>

                <div
                  className="underline d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <span
                    className=" "
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Max Allocation
                  </span>
                  <span
                    className=""
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#dd6f20",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Jan 11,2022,4:30PM
                  </span>
                </div>
                <div className="underliness mt-3">
                  <span
                    className=" textin"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Access
                  </span>
                  <span
                    className=" namedesc"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                    }}
                  >
                    Jan 11,2022,4:30PM
                  </span>
                </div>
                <div
                  className="d-flex mt-1"
                  style={{ justifyContent: "space-between" }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                      color: "#dd6f20",
                    }}
                  >
                    Starts In
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                      color: "#dd6f20",
                    }}
                  >
                    Jan 11,2022,4:30PM
                  </span>
                </div>
                <div className="progress" style={{ height: "0.5rem" }}>
                  <div
                    className="progress-bar style={{backgroundColor:'green'}}"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="underline mt-2">
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                      color: "#dd6f20",
                    }}
                  >
                    1 GOLD =0.02BUSD
                  </span>
                </div>
                <div className="mt-2">
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily: "Industry-Medium,serif",
                      color: "#dd6f20",
                    }}
                  >
                    Your allowed allocation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*--------------Links and buttons contents  */}

          <div className="headtext d-flex flex-column ">
            <span
              className="text-warning linkactive d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  fontFamily: "Industry-Medium,serif",
                  color: "#dd6f20",
                }}
              >
                Links
                <div class="d-flex flex-column">
              <div className="d-flex  socialmdialink">
                <img
                  style={{ padding: "6px" }}
                  src="https://samurai.cyberfi.tech/_nuxt/img/website.edbded8.svg"
                  alt="..."
                  class="rounded-circle border border-warning"
                />
                <img
                  style={{ padding: "6px" }}
                  src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
                  alt="..."
                  class="rounded-circle border border-warning ml-3"
                />
                <img
                  style={{ padding: "6px" }}
                  src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
                  alt="..."
                  class="rounded-circle border border-warning ml-3"
                />
              </div>
            </div>
              </div>
       
              <div className="activegroupbuttons">
                <div className="gruobuttons mt-2">
                  <button
                    type="button"
                    class="btn btn-warning bscccon btn-lg  "
                  >
                    Connect
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-warning bscccons btn-lg mx-2"
                  >
                    View Bscscan
                  </button>
                </div>
              </div>
            </span>


          </div>
          {/*--------------Links and buttons contents  */}
          <About />
          <Descprition />
        </div>
      </div>
    </>
  );
};

export default Upcoming;
