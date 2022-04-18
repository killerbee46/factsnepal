import React, { Component, ReactDOM } from "react";
import NavBarLink from "./NavBarLink";
import { Link, withRouter } from "react-router-dom";

// const navbar = {
//   padding: "0.7894736842rem",
//   background: "#f5efef"
// };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.childDiv = React.createRef();
    this.state = {};
  }
  componentDidMount = () => this.handleScroll();

  componentDidUpdate = () => this.handleScroll();

  handleScroll = () => {
    console.log(this._div.current);

    const { index, selected } = this.props;
    if (index === selected) {
      setTimeout(() => {
        this._div.scrollIntoView({ behavior: "instant" });
      }, 500);
    }
  };
  render() {
    const headerBg = location && location.pathname && location.pathname.includes('/facts/') || location.pathname.includes('/publicpoll/') ? true : false;
    const { siteapi } = this.props;
    const menu = [
      { title: "Home", path: "/" },
      {
        title:
          <div className="service-menu">
            Services
            <div class="card card-body submenu" style={{ background: 'transparent', border: 'none', height: '100px', padding: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <a href="/researchdata">Research & Data Analysis</a>
                <a href="/strategycontent">Strategy & Content Development </a>
                <a href="/infographics">Infographics Designs</a>
              </div>
            </div>
          </div>
        // <div><p>
        //   <a data-toggle="collapse" href="#subService" aria-expanded="false" aria-controls="subService">
        //     Services &nabla;
        //   </a>
        // </p>
        // <div class="collapse" id="subService">
        //   <div class="card card-body" style={{background:'transparent',border:'none',height:'100px',padding:'12px'}}>
        //     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
        //       <a href="/researchdata">Research & Data Analysis</a>
        //       <a href="/strategycontent">Strategy & Content Development </a>
        //       <a href="/infographics">Infographics Designs</a>
        //     </div>
        //   </div>
        // </div></div>
        , path: '#'
      },
      { title: "Projects", path: "/projects" },
      { title: "Infographics", path: "/allfacts" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ]
    return (
      <React.Fragment>
        {/* {console.log(this.state.btnclick)} */}

        <header
          className={`site-header pdb-80 ${headerBg ? "no-bg" : ""} ${this.props.bgGrey ? "bg-grey" : ""
            }`}
        >
          <div ref={(ref) => (this._div = ref)} className="wrap">
            <div className="container">
              <div className="header-top">
                <div className="logo">
                  <Link
                    className="poll-link"
                    to={{
                      pathname: `/`,
                    }}
                  >
                    {siteapi && (
                      <img

                        // height= "49px"
                        // src={`${process.env.API_URL}${siteapi.logo}`}
                        src="../../../img/FACTS logo.png"
                        alt="Facts Nepal"
                        className="logo-icon"
                      />
                    )}
                  </Link>
                </div>

                <NavBarLink />
                {/* <div className="toggle-button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div> */}

                <div className="toggle-button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="collapse navbar-collapse container" id="navbarNav">
                  <ul class="navbar-nav">
                    {menu?.map((data) => {
                      return <li class="nav-item">
                        <a class="nav-link" href={data?.path}>{data?.title}</a>
                      </li>
                    })}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* <button className=" btn btn-success  btn-lg heroleft__btn ploll-btn" >
      {" "}
      <span className="fom"> Public Poll</span>
      <i className="la la-bar-chart-o" />
    </button>
    <div id="overlay">
      <div id="text">Overlay Text</div>
    </div>
    <header className="flex" style={navbar}>
      <figure>
        <img src="img/factslogo.png" alt="Facts Nepal" />
      </figure>
      <NavBarLink />
    </header> */}
      </React.Fragment>
    );
  }
}

export default withRouter(NavBar);
