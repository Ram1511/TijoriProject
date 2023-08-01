import { Link } from 'react-router-dom';
// Images imported from assets
import call from '../../assets/img/call.svg';
import smsTracking from '../../assets/img/sms-tracking.svg';
import location from '../../assets/img/location.svg';
import maskGroup from '../../assets/img/Mask group.svg';
import close from '../../assets/img/close-circle.svg';
import React, { useEffect, useState } from 'react';
import Footer from '../../common/Footer';
import axios from 'axios';
import { Helmet } from "react-helmet";

const initialState = {
  fullName: '',
  mail: '',
  phoneNumber: '',
  company: '',
  message: '',
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [formSubmit, setFormSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleOnChange = (e) => {
    let values = {
      [e.target.name]:
        e.target.name === 'mail'
          ? e.target.value.toLowerCase()
          : e.target.name === 'phoneNumber'
            ? e.target.value.replace(/[^0-9]+/g, '')
            : e.target.value,
    };
    setFormValues({ ...formValues, ...values });
  };

  const checkValidation = (data) => {
    let err = {};
    for (const key in data) {
      if (data[key].length === 0) {
        err = { ...err, [key]: `${key} is a required field` };
      } else if (
        key === 'mail' &&
        !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
          data['mail']
        )
      ) {
        err = {
          ...err,
          mail: `Please enter a valid mail address`,
        };
      } else if (key === 'phoneNumber' && !/^[6-9]\d{9}$/.test(data['phoneNumber'])) {
        err = {
          ...err,
          phoneNumber: `Please enter a valid phone no.`,
        };
      }
    }
    setError(err);
  };

  useEffect(() => {
    document.title = "Contact Us | Neo Banking Services For SMEs and Startup"
    let descMeta = document.querySelector('meta[name="description"]')
    descMeta.setAttribute("content", 'Discover cutting-edge Neo Banking services tailored for SMEs and startups. Contact us today for innovative financial solutions and seamless customer support. Start maximizing your business potential with our advanced digital banking platform.');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    console.log('first scroll');
  }, [])

  useEffect(() => {
    checkValidation(formValues);
  }, [formSubmit, formValues]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
    if (Object.keys(error).length) return;
    requestDemo(formValues);
  };

  const requestDemo = (values) => {
    setLoading(true);
    const data = JSON.stringify(values);

    const config = {
      method: 'post',
      url: 'https://api.tijoree.money:8443/current-account/demo',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        document.querySelector('.rightContainer').classList.add('success');
        document.querySelector('.rightContainer').classList.remove('error');
        // setTimeout(function () {
        //   handleModalClose();
        // }, 3500);

      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        document.querySelector('.rightContainer').classList.add('error');
        document.querySelector('.rightContainer').classList.remove('success');
        // setTimeout(function () {
        //   handleModalClose();
        // }, 3500);
      });
  }

  const handleModalClose = () => {
    setFormSubmit(false);
    setFormValues(initialState);
    document.querySelector('.rightContainer').classList.remove('error');
    document.querySelector('.rightContainer').classList.remove('success');
    // document.getElementById('closeButton').click();
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>  Contact Us | Neo Banking Services For SMEs and Startup
        </title>
        <meta name="description" content="Discover cutting-edge Neo Banking services tailored for SMEs and startups. Contact us today for innovative financial solutions and seamless customer support. Start maximizing your business potential with our advanced digital banking platform." /></Helmet>
      <>
        <div className="page-wrapper">
          <section id="contact-form">
            <div className="container-md">
              <div className="modal-content demoModalContainer">
                <div className="row">
                  <div className="col-md-5">
                    <div className="leftContainer">
                      <h4>Contact Information</h4>
                      <p>
                        Fill up the form and our Team will get back to you within 24
                        Hours.
                      </p>
                      <ul>
                        <li>
                          <a href="tel:+91 91520-20329">
                            <img src={call} alt="Phone" /> +91 91520-20329
                          </a>
                        </li>
                        <li>
                          <a href="mailto:hello@tijoree.money">
                            <img src={smsTracking} alt="mail" /> hello@tijoree.money
                          </a>
                        </li>
                        {/* <li>
                        <img src={location} alt="location" /> 102 Street Ruby tower,
                        Mumbai
                      </li> */}
                      </ul>
                      <img src={maskGroup} alt="mask" className="maskImg" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="rightContainer">
                      <div className="success-msg">
                        <h3>Thank you !</h3>
                        <p>We will get back in touch with you soon</p>
                      </div>
                      <div className="error-msg">
                        <h3>Something Wrong !</h3>
                        <p>Sorry, Please try again after sometime.</p>
                      </div>
                      <div className="form-container">
                        <h4>Fill the form below</h4>
                        <div className="row">
                          <div className="col-md-6">
                            <span className="inputLabel">Full Name*</span>
                            <input
                              name="fullName"
                              type="text"
                              className="inputField"
                              value={formValues.fullName}
                              onChange={(e) => handleOnChange(e)}
                            />
                            {formSubmit &&
                              error.hasOwnProperty('fullName') &&
                              error.fullName && (
                                <div className="invalid-feedback">
                                  {error.fullName}
                                </div>
                              )}
                          </div>
                          {/* <div className="col-md-6">
                        <span className="inputLabel">Last Name*</span>
                        <input
                          name="lastName"
                          type="text"
                          className="inputField"
                          value={formValues.lastName}
                          onChange={(e) => handleOnChange(e)}
                        />
                        {formSubmit &&
                          error.hasOwnProperty('lastName') &&
                          error.lastName && (
                            <div className="invalid-feedback">{error.lastName}</div>
                          )}
                      </div> */}
                          <div className="col-md-6">
                            <span className="inputLabel">Email address*</span>
                            <input
                              name="mail"
                              type="text"
                              className="inputField"
                              value={formValues.mail}
                              onChange={(e) => handleOnChange(e)}
                            />
                            {formSubmit &&
                              error.hasOwnProperty('mail') &&
                              error.mail && (
                                <div className="invalid-feedback">{error.mail}</div>
                              )}
                          </div>
                          <div className="col-md-6">
                            <span className="inputLabel">Phone Number*</span>
                            <input
                              name="phoneNumber"
                              type="text"
                              className="inputField"
                              value={formValues.phoneNumber}
                              onChange={(e) => handleOnChange(e)}
                            />
                            {formSubmit &&
                              error.hasOwnProperty('phoneNumber') &&
                              error.phoneNumber && (
                                <div className="invalid-feedback">{error.phoneNumber}</div>
                              )}
                          </div>
                          <div className="col-md-6">
                            <span className="inputLabel">Company*</span>
                            <input
                              name="company"
                              type="text"
                              className="inputField"
                              value={formValues.company}
                              onChange={(e) => handleOnChange(e)}
                            />
                            {formSubmit &&
                              error.hasOwnProperty('company') &&
                              error.company && (
                                <div className="invalid-feedback">
                                  {error.company}
                                </div>
                              )}
                          </div>
                          <div className="col-lg-12">
                            <span className="inputLabel">Message*</span>
                            <textarea
                              name="message"
                              className="inputField textareaField"
                              placeholder="Type your message"
                              value={formValues.message}
                              onChange={(e) => handleOnChange(e)}
                            ></textarea>
                            {formSubmit &&
                              error.hasOwnProperty('message') &&
                              error.message && (
                                <div className="invalid-feedback">{error.message}</div>
                              )}
                          </div>
                        </div>
                        <div className="text-end submit-btn">
                          <Link
                            to={'#'}
                            className="btn-rounded purple"
                            onClick={(e) => handleFormSubmit(e)}
                          >
                            {/* Request for Demo */}
                            {loading ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span>Loading...</span></>) : 'Request for Demo'}

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    </React.Fragment>
  );
};

export default ContactForm;
