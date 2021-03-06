import React, { Component } from "react";

class MobileAppDownloads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section
        className={`tech-section pdt-130 pdb-130 ${
          this.props.techBg ? "tech-bg" : ""
        }`}
      >
        
        <div className="container">
          <div className="tech-section-wrap">
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-12">
                <div className="tech-section-left">
                  <img className="bg-case orange" src="./img/IMAGE-shape2.svg" />
                  <img className="bg-case pink" src="./img/IMAGE-shape4.svg" />
                  <img className="bg-case sm-pink" src="./img/IMAGE-shape1.svg" />
                  <img className="bg-case sm-orange" src="./img/IMAGE-shape3.svg" />
                  <div className="img-center">
                    <img src="./img/smartphones.png" alt="smartphones" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="tech-section-right">
                  <div className="tech-section-right-content">
                    <h3 className="headline2">
                      All the power of accurate and contextual data at your
                      fingertips.
                    </h3>
                    <div className="btn-wrap">
                      <span className="caption">
                        Available for your smartphone
                      </span>
                      <div className="btn-content">
                        {/* <a>
                          <img src="./img/app-store (1).svg" alt="app-store" />
                        </a> */}
                        <a href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank">
                          <img
                            src="./img/google-play-badge (1).svg"
                            alt="google-play"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="btn-wrap btn-wrap-viber">
                      <span className="caption">
                        Join Our <a href="https://invite.viber.com/?g2=AQBfeSzB7FMvFEvvkzDEn2CATbHmZBirKrHFsWPRgxS2I%2Bzi7ZcZI%2BrlsFfnw8t0&fbclid=IwAR0Mmk7lCMSoBzC68FAbXAaCAO_zEORE2Dv0vabXcVYL-ojXxKp24QEu4m8&lang=en"><img style={{"height":"33px"}} src="./img/viber-logo.png" alt="viber" /></a> Group To Get Daily Updates.
                      </span>
                      <div className="btn-content">
                        <a href="https://invite.viber.com/?g2=AQBfeSzB7FMvFEvvkzDEn2CATbHmZBirKrHFsWPRgxS2I%2Bzi7ZcZI%2BrlsFfnw8t0&fbclid=IwAR0Mmk7lCMSoBzC68FAbXAaCAO_zEORE2Dv0vabXcVYL-ojXxKp24QEu4m8&lang=en">
                          <img src="./img/viber-group-qr.png" alt="viber" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileAppDownloads;
