import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../../common/Footer';
import overviewAccount from '../../../assets/img/current-account_v2.svg';
import circleChartSmall from '../../../assets/img/circle-chart-small.svg';
import productChart from '../../../assets/img/product-chart.png';
import fundTransfer from '../../../assets/img/fund-transfer.svg';
import payrollModule from '../../../assets/img/payroll-module.svg';
import VideoPng from '../../../assets/img/video.png';
import { Helmet } from "react-helmet";

const CurrentAccount = () => {
  useEffect(() => {
    document.title = "Open Current Account Online for Business | Tijoree"
    let descMeta = document.querySelector('meta[name="description"]')
    descMeta.setAttribute("content", 'Open a business current account online with Tijoree, the leading neobank for businesses. Enjoy the convenience of hassle-free account opening, seamless digital transactions, and tailored banking solutions. Empower your business with our innovative tools and exceptional customer service. Start your banking journey with Tijoree today and experience the future of business banking.');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    AOS.init({
      easing: 'ease-out-back',
      duration: 700,
      once: true,
      // mirror: true,
      disable: 'mobile',
    });
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title> Open Current Account Online for Business | Tijoree
        </title>
        <meta name="description" content=" Open a business current account online with Tijoree, the leading neobank for businesses. Enjoy the convenience of hassle-free account opening, seamless digital transactions, and tailored banking solutions. Empower your business with our innovative tools and exceptional customer service. Start your banking journey with Tijoree today and experience the future of business banking." /></Helmet>
      <div className="page-wrapper">
        <section id="inner-banner">
          <div className="container-md">
            <div className="banner-text product">
              <h6><Link to={'/'}>Home</Link>  Products  Current A/C</h6>
              <h1>Current Account</h1>
              <p>Tijoree Current Account Products</p>
            </div>
          </div>
        </section>

        <section id="product-section">
          <div className="container-md">
            <div className="row align-items-center">
              <div className="col-md-6 content">
                <h2><span className="purple">Ideal Current Account </span> for all your business needs</h2>
                <p>Your Tijoree Current A/C, co-branded with **Coming Soon** and offered by Tijoree, is a first-of-its-kind banking product that rewards you with cashback & reward points on your transactions. To guarantee that all funds are secure, the Current A/C will be maintained with an RBI-licensed bank that offers ISO and NPCI-approved security measures.</p>
                <div className="action">
                  <Link to={'/form'} className="btn-rounded purple">Apply Now</Link>
                </div>
              </div>
              <div className="col-md-6 content">

                <div className="product-images-container">
                  <div className="video-frame" data-aos="fade-right">
                    <img className="frame" src={VideoPng} alt="video" />
                    <div className="video-gif">
                      <img className="main" src={overviewAccount} alt="Current Account" />
                    </div>
                  </div>
                  <span data-aos="fade-up" data-aos-offset="-400" className="circleGraph">
                    <img src={circleChartSmall} alt="" />
                  </span>
                  <span data-aos="fade-down" data-aos-offset="-400" className="productivityChart">
                    <img src={productChart} alt="Increase Productivity" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inner-content-box">
          <div className="container-md">
            <h2>With <span className="purple">Tijoree’s Current Account,</span> your business gets</h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div data-aos="fade-left" className="video-frame">
                  <img className="frame" src={VideoPng} alt="video" />
                  <div className="video-gif">
                    <img src={fundTransfer} alt="Fund Transfer" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Access to a Dynamic Dashboard</li>
                  <li>Cashbacks & Rewards on your Current A/C Transactions</li>
                  <li>A User Interface designed exclusively for your business’ needs, simplified analytical reports, bulk payouts, scheduled payments and more</li>
                  <li>A Dedicated Relationship Manager for all your needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="product-benefits">
          <div className="container-md">
            <div className="top-head text-center">
              <h3>Benefits of <span className="purple">Tijoree</span></h3>
              {/* <p>Everything you need to know about  the benefits of Tijoreee Current Account is mentioned over here.</p> */}
            </div>
            <div className="benefits-list">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="list">
                    <div className="item benefit-1">
                      Fund transfers made easy with Bulk Uploads of transactions and beneficiaries
                    </div>
                    <div className="item benefit-2">
                      Real-time transaction tracking and overviews with analytical reports
                    </div>
                    <div className="item benefit-3">
                      Instant Salary Disbursals using our Payroll Module
                    </div>
                    <div className="item benefit-4">
                      Secure Activity Logs for user-specific activities so no action goes unnoticed
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div data-aos="fade-right" className="video-frame">
                    <img className="frame" src={VideoPng} alt="video" />
                    <div className="video-gif">
                      <img src={payrollModule} alt="Payroll Module" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="upcoming-features">
          <div className="container-md">
            <div className="solutions">
              <h3>Upcoming <span className="purple">Features</span></h3>
              <div className="row three-points">
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">1</div>
                    <div className="info"> <div>Automated TDS</div> & GST Filings</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">2</div>
                    <div className="info"><div>AI-Driven </div> Invoicing Solutions.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">3</div>
                    <div className="info">Tally & Accounting Software Integrations</div>
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

export default CurrentAccount;
