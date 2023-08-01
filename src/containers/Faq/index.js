import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Helmet } from "react-helmet";

const Faq = () => {
  useEffect(() => {
    document.title = "Tijoree | FAQ"
    // let descMeta=document.querySelector('meta[name="description"]')
    // descMeta.setAttribute("content", 'Experience the future of banking with Tijoree, the leading neobank offering digital banking services designed exclusively for SMEs and startups. Simplify your financial operations, streamline transactions, and unlock growth opportunities with our innovative solutions. Contact us today and embark on a seamless banking journey tailored to your business needs.');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title> About Us | Corporate Business Banking |Tijoree
        </title>
        <meta name="description" content="Discover Tijoree, your trusted partner for corporate business banking solutions. With a focus on delivering exceptional financial services, we empower businesses with cutting-edge digital banking tools and personalized support. Learn more about our comprehensive suite of services and how Tijoree can fuel your business growth. Contact us today and experience a new era of corporate banking excellence." /></Helmet>
      <div className="page-wrapper">
        <section id="inner-banner">
          <div className="container-md">
            <div className="banner-text">
              <h6>The FAQs</h6>
              <h1>Help Center</h1>
              <p>Everything you need to know about the product.</p>
            </div>
          </div>
        </section>
        <section id="faq-section">
          <div className="container-md">
            <div className="row justify-content-between">
              <div className="col-md-12 head mb-4 text-center">
                <h2>FAQs</h2>
                {/* <p>Everything you need to know about  the product and billing. Can’t find the answer you’re looking for? 
                   <a href="#"> Please chat to our friendly teams</a>.
                </p> */}
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Account Opening</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Features</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Charges</button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
                    <div className="accordion" id="accountOpening">
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title1">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapseOne" data-bs-parent="#accountOpening"
                          >
                            What is the account opening process?
                          </button>
                        </h4>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse"
                          aria-labelledby="title1"
                          data-bs-parent="#accountOpening"
                        >
                          <div className="accordion-body">
                            <p>
                              Account opening of current account will be as per the existing process. Existing Account Opening Form (AOF)
                              needs to be used for account opening. KYC & related documents as applicable basis entity type.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapseTwo" data-bs-parent="#accountOpening"
                          >
                            What is a One Person Company Account?
                          </button>
                        </h4>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="title2"
                          data-bs-parent="#accountOpening"
                        >
                          <div className="accordion-body">
                            <p>
                              The concept of OPC allows a single person to run a company limited by shares, and Sole proprietorship means an
                              entity where it is run and owned by one individual and where there is no distinction between the owner and the business
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title3">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapseThree" data-bs-parent="#accountOpening"
                          >
                            Is AADHAAR Mandatory for Authorized Signatories?
                          </button>
                        </h4>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="title3"
                          data-bs-parent="#accountOpening"
                        >
                          <div className="accordion-body">
                            <p>AADHAAR is Mandatory for all Authorized Signatories</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title4">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapseThree" data-bs-parent="#accountOpening"
                          >
                            I do not have a physical Pan Card, but I have a pan card number.?
                          </button>
                        </h4>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="title4"
                          data-bs-parent="#accountOpening"
                        >
                          <div className="accordion-body">
                            <p>
                              If a PAN card is not available, a printout of the PAN for the account holder may be taken
                              from <a href="http://incometaxindia.gov.in/" target="_blank">http://incometaxindia.gov.in/</a> -
                              the printout must be stamped “Downloaded/Verified at Branch” by Bank officials.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="accordion" id="features">
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title5">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="true"
                            aria-controls="collapseFive" data-bs-parent="#features"
                          >
                            Can we use net banking features from Tijoree Current Account?
                          </button>
                        </h4>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          aria-labelledby="title5"
                          data-bs-parent="#features"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you can use the **Coming Soon** net-banking feature through the Tijoree's Current Account Portal.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title6">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapseSix" data-bs-parent="#features"
                          >
                            What is the cooling period for making transactions after adding beneficiaries in the account?
                          </button>
                        </h4>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="title6"
                          data-bs-parent="#features"
                        >
                          <div className="accordion-body">
                            <p>
                              With Tijoree Current account, you can transfer the funds as soon as you add beneficiaries in your account,
                              i.e.Zero cooling period for transactions after adding beneficiaries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title7">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse7"
                            aria-expanded="false"
                            aria-controls="collapseSeven" data-bs-parent="#features"
                          >
                            Can we add multiple/bulk beneficiaries for transferring funds in Tijoree Current A/C dashboard?
                          </button>
                        </h4>
                        <div
                          id="collapse7"
                          className="accordion-collapse collapse"
                          aria-labelledby="title7"
                          data-bs-parent="#features"
                        >
                          <div className="accordion-body">
                            <p>Yes, Tijoree Current Account allows you to add multiple/bulk beneficiaries for transferring funds</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title8">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse8"
                            aria-expanded="false"
                            aria-controls="collapseEight" data-bs-parent="#features"
                          >
                            What is Payroll Module of Tijoree Current Account?
                          </button>
                        </h4>
                        <div
                          id="collapse8"
                          className="accordion-collapse collapse"
                          aria-labelledby="title8"
                          data-bs-parent="#features"
                        >
                          <div className="accordion-body">
                            <p>
                              With Tijoree’s Payroll module, you can make hassle-free salary disbursement and avail all the disbursement reports instantly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="accordion" id="charges">
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title9">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse9"
                            aria-expanded="true"
                            aria-controls="collapseNine" data-bs-parent="#charges"
                          >
                            Are there any charges for using Tijoree’s Current Account Dashboard?
                          </button>
                        </h4>
                        <div
                          id="collapse9"
                          className="accordion-collapse collapse"
                          aria-labelledby="title9"
                          data-bs-parent="#charges"
                        >
                          <div className="accordion-body">
                            <p>
                              The Tijoree’s Current Account Dashboard is a free-to-use application, regular charges can be applied on Current
                              Account as per banking partner regulations. Please refer to the banking SOC for detailed description
                              of charges.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title10">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse10"
                            aria-expanded="false"
                            aria-controls="collapseTen" data-bs-parent="#charges"
                          >
                            Are there any charges for NEFT/RTGS Payments?
                          </button>
                        </h4>
                        <div
                          id="collapse10"
                          className="accordion-collapse collapse"
                          aria-labelledby="title10"
                          data-bs-parent="#charges"
                        >
                          <div className="accordion-body">
                            <p>
                              NEFT / RTGS done through digital channels are not chargeable. NEFT / RTGS done through branches are also not
                              chargeable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title11">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse11"
                            aria-expanded="false"
                            aria-controls="collapseEleven" data-bs-parent="#charges"
                          >
                            How would the Cash Deposits free limits be calculated?
                          </button>
                        </h4>
                        <div
                          id="collapse11"
                          className="accordion-collapse collapse"
                          aria-labelledby="title11"
                          data-bs-parent="#charges"
                        >
                          <div className="accordion-body">
                            <p>Cash Deposit free limits per month will be calculated as cumulative value for deposits done across any
                              channel / mode, inclusive of any **Coming Soon** branch & Cash Deposit Machine (CDM)</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="title12">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse12"
                            aria-expanded="false"
                            aria-controls="collapseTwelve" data-bs-parent="#charges"
                          >
                            What are the non-maintenance charges for a current account?
                          </button>
                        </h4>
                        <div
                          id="collapse12"
                          className="accordion-collapse collapse"
                          aria-labelledby="title12"
                          data-bs-parent="#charges"
                        >
                          <div className="accordion-body">
                            <p>
                              Non-maintenance charges will be applicable if the AQB goes below Rs.25,000/- in any quarter for the product
                              variant.
                            </p>
                          </div>
                        </div>
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
    </React.Fragment>
  );
};

export default Faq;
