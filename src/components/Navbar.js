import React from 'react'
import PropTypes from 'prop-types'
import '../style.css'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
  <title>Employaar</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="vendors/owl-carousel/css/owl.carousel.min.css" />
  <link
    rel="stylesheet"
    href="vendors/owl-carousel/css/owl.theme.default.css"
  />
  <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="vendors/aos/css/aos.css" />
  <link rel="stylesheet" href="css/style.min.css" />
  <header id="header-section">
    <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
      <div className="container">
        <div className="navbar-brand-wrapper d-flex w-100">
          <img src="" width="100rem" alt="" />
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse navbar-menu-wrapper"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
            <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
              <div className="navbar-collapse-logo">
                <img src="../images/icon.jpg" width="100rem" alt="" />
              </div>
              <button
                className="navbar-toggler close-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="mdi mdi-close navbar-toggler-icon pl-5" />
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#header-section">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features-section">
                Surveys
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#digital-marketing-section">
                Feedback
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedback-section">
                Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedback-section">
                Progress
              </a>
            </li>
            <li className="nav-item btn-contact-us pl-4 pl-lg-0">
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div className="banner">
    <div className="container">
      <h1 className="font-weight-semibold">
        Employee Feedback &amp;
        <br />
        Engagement Platform
      </h1>
      <h6 className="font-weight-normal text-muted pb-3">
        Facilitates continuous employee feedback, employee engagement levels,
        <br />
        and provides actionable insights to improve workplace productivity.
      </h6>
      <div>
        <button className="btn btn-opacity-light mr-1">Get started</button>
        <button className="btn btn-opacity-success ml-1">Learn more</button>
      </div>
      <img src="../images/Group171.svg" alt="" className="img-fluid" />
    </div>
  </div>
  <div className="content-wrapper">
    <div className="container">
      <section className="features-overview" id="features-section">
        <div className="content-header">
          <h2>How does it works</h2>
          <h6 className="section-subtitle text-muted">
            offering a user-friendly interface for employees to share feedback.
            <br /> and for management to analyze and act upon it
          </h6>
        </div>
        <div className="d-md-flex justify-content-between">
          <div className="grid-margin d-flex justify-content-start">
            <div className="features-width">
              <img src="../images/Group12.svg" alt="" className="img-icons" />
              <h5 className="py-3">
                {" "}
                Creation &amp; distribution
                <br />
                surveys
              </h5>
              <p className="text-muted">
                including satisfaction surveys, pulse surveys, and feedback
                forms, allowing employees to express their opinions on various
                aspects of the workplace.
              </p>
              {/* <a href="#"><p class="readmore-link">Readmore</p></a>   */}
            </div>
          </div>
          <div className="grid-margin d-flex justify-content-center">
            <div className="features-width">
              <img src="../images/Group7.svg" alt="" className="img-icons" />
              <h5 className="py-3">
                option for employees submit
                <br />
                feedback
              </h5>
              <p className="text-muted">
                anonymously to encourage honest and candid responses track
                employee engagement over time, using key performance indicators
              </p>
              {/* <a href="#"><p class="readmore-link">Readmore</p></a> */}
            </div>
          </div>
          <div className="grid-margin d-flex justify-content-end">
            <div className="features-width">
              <img src="../images/Group5.svg" alt="" className="img-icons" />
              <h5 className="py-3">
                360-degree
                <br />
                feedback processes
              </h5>
              <p className="text-muted">
                allowing employees to receive feedback from peers, managers, and
                subordinates to promote holistic self-improvement
              </p>
              {/* <a href="#"><p class="readmore-link">Readmore</p></a> */}
            </div>
          </div>
        </div>
      </section>
      <section
        className="digital-marketing-service"
        id="digital-marketing-section"
      >
        <div className="row align-items-center">
          <div
            className="col-12 col-lg-7 grid-margin grid-margin-lg-0"
            data-aos="fade-right"
          >
            <h3 className="m-0">
              We Offer a Full Range
              <br />
              of Feedback and Engagement Services!
            </h3>
            <div className="col-lg-7 col-xl-6 p-0">
              <p className="py-4 m-0 text-muted">
                comprehensive platform that facilitates continuous employee
                feedback, gauges employee engagement levels, and provides
                actionable insights to improve workplace satisfaction and
                productivity..
              </p>
              {/* <p class="font-weight-medium text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer</p> */}
            </div>
          </div>
          <div
            className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
            data-aos="fade-left"
          >
            <img src="../images/Group1.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row align-items-center">
          <div
            className="col-12 col-lg-7 text-center flex-item grid-margin"
            data-aos="fade-right"
          >
            <img src="../images/Group2.png" alt="" className="img-fluid" />
          </div>
          <div
            className="col-12 col-lg-5 flex-item grid-margin"
            data-aos="fade-left"
          >
            <h3 className="m-0">
              Leading Feedback Agency
              <br />
              Actionable steps to enhance the work environment..
            </h3>
            <div className="col-lg-9 col-xl-8 p-0">
              <p className="py-4 m-0 text-muted">
                Improving the work environment is essential for fostering
                employee well-being, productivity, and overall organizational
                success. Here are actionable steps you can take to enhance the
                work environment:
              </p>
              {/* <p class="pb-2 font-weight-medium text-muted">Its smart features make it a powerful stand-alone website building tool.</p> */}
            </div>
            <button className="btn btn-info">Readmore</button>
          </div>
        </div>
      </section>
      <section className="case-studies" id="case-studies-section">
        <div className="row grid-margin">
          <div className="col-12 text-center pb-5">
            <h2>Our case studies</h2>
            <h6 className="section-subtitle text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum.
            </h6>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0"
            data-aos="zoom-in"
          >
            <div className="card color-cards">
              <div className="card-body p-0">
                <div className="bg-primary text-center card-contents">
                  <div className="card-image">
                    <img
                      src="../images/Group95.svg"
                      className="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div className="card-desc-box d-flex align-items-center justify-content-around">
                    <div>
                      <h6 className="text-white pb-2 px-3">
                        Know more about surveys
                      </h6>
                      <button className="btn btn-white">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="card-details text-center pt-4">
                  <h6 className="m-0 pb-1">Pulse surveys</h6>
                  <p>Feedback forms</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="card color-cards">
              <div className="card-body p-0">
                <div className="bg-warning text-center card-contents">
                  <div className="card-image">
                    <img
                      src="../images/Group108.svg"
                      className="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div className="card-desc-box d-flex align-items-center justify-content-around">
                    <div>
                      <h6 className="text-white pb-2 px-3">
                        Know more about responses
                      </h6>
                      <button className="btn btn-white">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="card-details text-center pt-4">
                  <h6 className="m-0 pb-1">Encourage honesty</h6>
                  <p>Candid responses</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="card color-cards">
              <div className="card-body p-0">
                <div className="bg-violet text-center card-contents">
                  <div className="card-image">
                    <img
                      src="../images/Group126.svg"
                      className="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div className="card-desc-box d-flex align-items-center justify-content-around">
                    <div>
                      <h6 className="text-white pb-2 px-3">
                        Know more about engagement
                      </h6>
                      <button className="btn btn-white">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="card-details text-center pt-4">
                  <h6 className="m-0 pb-1">Track employee</h6>
                  <p>Engagement</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 stretch-card"
            data-aos="zoom-in"
            data-aos-delay={600}
          >
            <div className="card color-cards">
              <div className="card-body p-0">
                <div className="bg-success text-center card-contents">
                  <div className="card-image">
                    <img
                      src="../images/Group115.svg"
                      className="case-studies-card-img"
                      alt=""
                    />
                  </div>
                  <div className="card-desc-box d-flex align-items-center justify-content-around">
                    <div>
                      <h6 className="text-white pb-2 px-3">
                        Know more about contributions
                      </h6>
                      <button className="btn btn-white">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="card-details text-center pt-4">
                  <h6 className="m-0 pb-1">Rewarding employees</h6>
                  <p>On their contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-feedback" id="feedback-section">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <h2>What our customers have to say</h2>
            {/* <h6 class="section-subtitle text-muted m-0">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6> */}
          </div>
          <div className="owl-carousel owl-theme grid-margin">
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="images/face2.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Tony Martinez</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Recuriting Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="images/face3.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Sophia Armstrong</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face20.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Cody Lambert</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Employer
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face15.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Cody Lambert</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face16.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Cody Lambert</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face1.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Tony Martinez</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face2.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Tony Martinez</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face3.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Sophia Armstrong</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
            <div className="card customer-cards">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../images/face20.jpg"
                    width={89}
                    height={89}
                    alt=""
                    className="img-customer"
                  />
                  <p className="m-0 py-3 text-muted">
                    Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce
                    egeabus consectetuer turpis, suspendisse.
                  </p>
                  <div className="content-divider m-auto" />
                  <h6 className="card-title pt-3">Cody Lambert</h6>
                  <h6 className="customer-designation text-muted m-0">
                    Marketing Manager
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us" id="contact-section">
        <div className="contact-us-bgimage grid-margin">
          <div className="pb-4">
            <h4 className="px-3 px-md-0 m-0" data-aos="fade-down">
              Do you have any suggestions?
            </h4>
            <h4 className="pt-1" data-aos="fade-down">
              Share Now
            </h4>
          </div>
          <div data-aos="fade-up">
            <button className="btn btn-rounded btn-outline-danger">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="contact-details" id="contact-details-section">
        <div className="row text-center text-md-left">
          <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <img src="../images/icon.jpg" width="100rem" alt="" className="pb-2" />
            <div className="pt-2">
              <p className="text-muted m-0">mikayla_beer@feil.name</p>
              <p className="text-muted m-0">906-179-8309</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Get in Touch</h5>
            <p className="text-muted">
              Don’t miss any updates of our new templates and extensions.!
            </p>
            <form>
              <input
                type="text"
                className="form-control"
                id="Email"
                placeholder="Email id"
              />
            </form>
            <div className="pt-3">
              <button className="btn btn-dark">Subscribe</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Our Guidelines</h5>
            <a href="#">
              <p className="m-0 pb-2">Terms</p>
            </a>
            <a href="#">
              <p className="m-0 pt-1 pb-2">Privacy policy</p>
            </a>
            <a href="#">
              <p className="m-0 pt-1 pb-2">Cookie Policy</p>
            </a>
            <a href="#">
              <p className="m-0 pt-1">Discover</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Our address</h5>
            <p className="text-muted">
              Bandra West <br />
              Linking Road{" "}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#">
                <span className="mdi mdi-facebook" />
              </a>
              <a href="#">
                <span className="mdi mdi-twitter" />
              </a>
              <a href="#">
                <span className="mdi mdi-instagram" />
              </a>
              <a href="#">
                <span className="mdi mdi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-top">
        <p className="text-center text-muted pt-4">
          Copyright © 2023 <br />
          Created by : Team First Try.
        </p>
      </footer>
      {/* Modal for Contact - us Button */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email-1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    className="form-control"
                    id="Message"
                    placeholder="Enter your Message"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };