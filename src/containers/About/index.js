import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
// Images imported from assets
import comingSoon from '../../assets/img/coming-soon.svg';
// import yesBank from '../../assets/img/yes-bank.svg';
import founder1 from '../../assets/img/mokssh-surve.jpg';
import founder2 from '../../assets/img/harsh-meswani.jpg';
import founder3 from '../../assets/img/raghav-chaturvedi.jpg';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Corporate Business Banking |Tijoree"
    let descMeta = document.querySelector('meta[name="description"]')
    descMeta.setAttribute("content", 'Discover Tijoree, your trusted partner for corporate business banking solutions. With a focus on delivering exceptional financial services, we empower businesses with cutting-edge digital banking tools and personalized support. Learn more about our comprehensive suite of services and how Tijoree can fuel your business growth. Contact us today and experience a new era of corporate banking excellence.');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    AOS.init({
      easing: 'ease-out-back',
      once: true,
      // mirror: true,
      disable: 'mobile',
    });
  },
    []);

  return (

    <React.Fragment>
      <Helmet>
        <title> About Us | Corporate Business Banking |Tijoree
        </title>
        <meta name="description" content="Discover Tijoree, your trusted partner for corporate business banking solutions. With a focus on delivering exceptional financial services, we empower businesses with cutting-edge digital banking tools and personalized support. Learn more about our comprehensive suite of services and how Tijoree can fuel your business growth. Contact us today and experience a new era of corporate banking excellence." /></Helmet>
      <div className="page-wrapper">
        <section id="about-banner">
          <div className="container-md">
            <div className="banner-text">
              <h3>About Tijoree</h3>
              <p>Tijoree Invest Pvt Ltd. is a Neobanking organization that offers business a wide range of banking solutions.
                Tijoree has been designed to assist business owners in maintaining their operations seamlessly by providing
                them access to a unique banking current account - this comes with features such as payroll automation,
                invoice tracking, and most importantly rewards/cashbacks on account transactions/balance.</p>
            </div>
          </div>
        </section>
        <section id="partners" className="prevent-select">
          <div className="container-md">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2><span className="purple d-block">Our</span> Strategic Partners</h2>
                <p><strong>**Coming Soon** </strong>join forces as strategic partners with Tijoree to drive the digital banking revolution</p>
              </div>
              <div className="col-md-6 text-center">
                {/* <div className="all-animation">
              <div className="img-container" data-aos="fade-down-right" data-aos-offset="350" data-aos-duration="300"></div>
              <span className="visa" data-aos="fade-left" data-aos-offset="370"  data-aos-duration="1200"><img src={visa} alt="Visa" /></span>
                <span className="yes-bank" data-aos="fade-right"  data-aos-duration="1300"><img src={comingSoon} alt="Coming Soon" /></span>
              </div> */}
                <img data-aos="fade-down-right" data-aos-offset="350" src={comingSoon} alt="Coming Soon" />
              </div>
            </div>

            <div className="solutions">
              <h3>We Provide <span className="purple">Powerful Solutions</span></h3>
              <p>We provide you with tools necessary to operate business-banking needs effectively.</p>
              <div className="row three-points">
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">1</div>
                    <div className="info"><div>Add Bulk</div> Beneficiaries</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">2</div>
                    <div className="info"><div>Simplified</div> Payments</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="solution-item d-flex align-items-center">
                    <div className="count">3</div>
                    <div className="info">Dashboard & Account Information At Glance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="our-goal">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2>Our <span className="purple">Goal</span></h2>
            </div>
            <div className="col-md-8">
              <p>To satisfy the needs of the business as we offer a powerful solution that can simplify payments and make them 
                rewarding. We are a platform that provides you with all the resources required to operate a business successfully.</p>
            </div>
          </div>
        </div>
      </section> */}

        <section id="founders">
          <div className="container-md">
            <h3>Founders of <span className="purple">Tijoree</span></h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="list">
                  <div className="profile-pic">
                    <img src={founder1} alt="founder 1" />
                  </div>
                  <h5>Mokssh Surve</h5>
                  <div className="designation">Co-Founder & CEO</div>
                  <div className="exp small-icon">Accenture ML Engineer, Mumbai</div>
                  <div className="hobbies small-icon">Motor Racing, Bollywood Music</div>
                  <div className="qualification small-icon">UC Berkeley Chem Eng and Applied Statistics</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="list">
                  <div className="profile-pic">
                    <img src={founder2} alt="founder 2" />
                  </div>
                  <h5>Harsh Meswani</h5>
                  <div className="designation">Co-Founder & CSO</div>
                  <div className="exp small-icon">McKinsey Business Analyst, Mumbai</div>
                  <div className="hobbies small-icon">Tennis, Singing, Skiing</div>
                  <div className="qualification small-icon">University of Pennsylvania (M&T Program) Mech Eng & Finance</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="list">
                  <div className="profile-pic">
                    <img src={founder3} alt="founder 3" />
                  </div>
                  <h5>Raghav Chaturvedi</h5>
                  <div className="designation">Co-Founder & CFO</div>
                  <div className="exp small-icon">Alliance Bernstein Analyst, Mumbai</div>
                  <div className="hobbies small-icon">Cricket, Chelsea, AR Rahman</div>
                  <div className="qualification small-icon">University of Pennsylvania Chem Eng and Finance</div>
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

export default About;
