import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Marquee from "react-fast-marquee";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../../common/Footer';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images imported from assets
import Desk2Png from '../../assets/img/desk2.svg';
import jioSaavan from '../../assets/img/Jio-savaan.png';
import bookMyShow from '../../assets/img/Bookmyshow.png';
import relianceDigital from '../../assets/img/reliance-digital.png';
import IncProductivityPng from '../../assets/img/increase-productivity.svg';
import WePay from '../../assets/img/we-pay.svg';
import PayrollFinancePng from '../../assets/img/payroll-financing.svg';
import VideoPng from '../../assets/img/video.png';
import callIcon from '../../assets/img/call-icon.svg';
import dots from '../../assets/img/dots.svg';
import callGrey from '../../assets/img/call-grey.svg';
import laptopFrame from '../../assets/img/laptop-content-frame.svg';
import circleGraph from '../../assets/img/circle-graph.svg';
import productivityChart from '../../assets/img/productivity-chart.svg';
import verticalGraph from '../../assets/img/vertical-graph.svg';
import MoneyBag from '../../assets/img/3D-money-bag.svg';
import invoices from '../../assets/img/invoices.svg';
import DashboardGrowth from '../../assets/img/Dashboard-Growth.svg';
import VideoGif from '../../assets/img/frame-video.mp4';
import { Helmet } from "react-helmet";

const Landing = () => {
  document.title="Tijoree | Neobank Offering Digital Banking Services"
    let descMeta=document.querySelector('meta[name="description"]')
    descMeta.setAttribute("content", 'Experience the future of banking with Tijoree, the leading neobank offering digital banking services designed exclusively for SMEs and startups. Simplify your financial operations, streamline transactions, and unlock growth opportunities with our innovative solutions. Contact us today and embark on a seamless banking journey tailored to your business needs.');
  const owlRef = useRef(null);
  const owlResponsiveOption = {
    0: {
      items: 1,
    },
    676: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1600: {
      items: 4,
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // $('.preloader, .page-wrapper').removeClass('loaded');
    // $('.preloader').removeClass('loaded-done');
    // var loadedDone = sessionStorage.getItem("splashLoaded");
    // console.log('loadedDone loadedDone',loadedDone);
    // if(loadedDone && loadedDone === 'completed'){
    //     $('.preloader, .page-wrapper').addClass('loaded');
    //     $('.preloader').addClass('loaded-done');
    //     AOS.init({
    //       easing: 'ease-out-back',
    //       duration: 900,
    //       once: true,
    //       // mirror: true,
    //       disable: 'mobile',
    //     });
    // }
    // else{
    //   if ($('.page-wrapper').hasClass('homePage')) {
    //     document.body.style.setProperty('overflow-y', 'hidden');
    //     console.log('has class');
    //     setTimeout(function () {
    //       $('.preloader, .page-wrapper').addClass('loaded');
    //       $('.loader').delay(500).fadeOut(500);
    //       sessionStorage.setItem("splashLoaded", "completed");
    //       console.log(sessionStorage.getItem("splashLoaded"));
    //       document.body.style.setProperty('overflow-y', 'auto');
    //     }, 3500);
    //     setTimeout(function () {
    //       $('.preloader').addClass('loaded-done');
    //       AOS.init({
    //         easing: 'ease-out-back',
    //         duration: 900,
    //         once: true,
    //         // mirror: true,
    //         disable: 'mobile',
    //       });
    //     }, 4000);
    //   } else {
    //     setTimeout(function() {
    //     console.log('not has class');
    //     $('.preloader, .page-wrapper').addClass('loaded');
    //     $('.preloader').addClass('loaded-done');
    //     AOS.init({
    //       easing: 'ease-out-back',
    //       duration: 900,
    //       disable: 'mobile',
    //     });
    //     },400);
    //   }
    // }
    AOS.init({
      easing: 'ease-out-back',
      duration: 900,
      disable: 'mobile',
    });
    
  }, []);

  const handleCarouselchanged = (e) => {
    // console.log('eeeeeeee',e);
    if (!e.namespace) {
      return;
    }
    const carousel = e.relatedTarget;
    $('#owl-slider-counter .current').text(
      carousel.relative(carousel.current() + 1)
    );

    $('#owl-slider-counter .total').text('/' + carousel.items().length);
  };

  const handleClickScroll = () => {
    const element = document.getElementById('frameVideo');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOwlNav = (type) => {
    if (type === 'NEXT') {
      owlRef.current.next(500);
    } else if (type === 'PREV') {
      owlRef.current.prev(500);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title> Tijoree | Neobank offering digital banking services 
        </title>
        <meta name="description" content=" Experience the future of banking with Tijoree, the leading neobank offering digital banking services designed exclusively for SMEs and startups. Simplify your financial operations, streamline transactions, and unlock growth opportunities with our innovative solutions. Contact us today and embark on a seamless banking journey tailored to your business needs." /></Helmet>
    <div className="page-wrapper">
      {/* <div className="preloader">
        <div className="loader">
          <div className="loader-content">
            <img src={loaderLogo} alt="Tijoree" />
            <div class="wave-center">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        </div>
      </div> */}

      <section id="top-banner" className="prevent-select">
        <div className="gradient-top" data-aos="slide-right" data-aos-duration="1000"></div>
        <div className="gradient-bottom" data-aos="slide-left" data-aos-duration="1000"></div>
        <div className="gradient-bottom-right" data-aos="slide-down" data-aos-duration="1000"></div>
        <div className="gradient-center"></div>
        <div className="container-md">
          <div className="banner-content">
            <h2 data-aos="fade-right">
            Make your own business hassle-free with us: a corporate Neobank portal
            </h2>
            <div className="banner-bullets" data-aos="fade-right">
              <ul className="d-flex align-items-center justify-content-center">
                <li>Corporate Current A/C</li>
                <li>Beautifully Designed</li>
                <li>Fully Responsive</li>
              </ul>
            </div>
            {/* <div className="request-demo">
              <Link
                to= {'/form'}
                className="btn-rounded white">
                Get started
              </Link>
            </div> */}
            <div className="watch-video">
              <Link onClick={handleClickScroll} className="video-play">
                Watch Video
              </Link>
            </div>
          </div>
        </div>
        <div
          className="content-img text-center"
          data-aos="fade-up"
          data-aos-offset="-400"
        >
          <div className="container-md">
            <Link to="#">
              <img src={Desk2Png} alt="Tijoree" />
            </Link>
          </div>
        </div>
        <div className="marque-list">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <ul>
              <li>Banking for corporates made simpler</li>
              <li>Seamless transaction processing</li>
              <li>Convenient user experience</li>
              <li>All-new web experience</li>
            </ul>
          </Marquee>
        </div>
      </section>


      <section id="increase-productivity" className="prevent-select text-center">
      <h2>About Us</h2>
        <div className="container-md">
           <p className="mb-4">Tijoree Invest Pvt Ltd. is a Neobanking organization that offers business a wide range of banking solutions. Tijoree has been designed to assist business owners in maintaining their operations seamlessly by providing them access to a unique banking current account - this comes with features such as payroll automation, invoice tracking, and most importantly rewards/cashbacks on account transactions/balance.</p>
           <Link to= {'/about'} className="btn-rounded purple">
                     Read More
                  </Link>
        </div>
      </section>

      <section id="payroll-system" className="prevent-select">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content-box">
                <img
                  className="we-pay" 
                  src={WePay}
                  alt="We pay"
                />
                <h2>
                  <span className="purple">Earn Cashback & Rewards</span> on Current A/C
                </h2>
                <p>
                   A Business Bank Account that earns Rewards
                </p>
                <div className="actions">
                  {/* <Link to= {'/form'} className="btn-rounded purple">
                     Download now
                  </Link> */}
                  <Link to= {'/products/current-account'} className="btn-rounded purple">
                     Know More
                  </Link>
                  {/* <Link to={'/products/current-account'} className="know-more">
                    Know More
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 img-container">
              <img
                className="we-pay"
                data-aos="zoom-out-down"
                src={PayrollFinancePng}
                alt="Payroll Financing"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="payroll-automation" className="prevent-select">
        <div className="container-md">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="content-frame">
                <img className="frame-img" src={laptopFrame} alt="laptopFrame" />
                <div className="inner-content">
                <video width="100%" autoPlay muted loop>
                <source src={VideoGif} type="video/mp4"/>
              </video>
                {/* <OwlCarousel
              className="owl-theme"
              items={1} autoplayHoverPause={true}
              margin={0} autoplaySpeed={1700}
              dots={true}
              autoplay={true} loop={true}
            >
                  <div className="content content-1 active">
                    <img src={invoices} alt="Invoices" />
                    <h3>Invoice Processing & Payroll Module</h3>
                    <p>
                    “With Tijoree's brand-new Current Account application, processing invoices and disbursing salaries is now simpler
                     & convenient.”
                    </p>
                  </div>
                  <div className="content content-2">
                    <img src={MoneyBag} alt="Hasle-free Fund Transfer" />
                    <h3>Seamless Fund Transfer</h3>
                    <p>
                    "By adding many beneficiaries at once, paying bills, and transferring money with your new Tijoree Current Account,
                     you may save time and experience hassle-free banking."
                    </p>
                  </div>
                  <div className="content content-3">
                    <img src={DashboardGrowth} alt="Dynamic Dashboard" />
                    <h3>Dynamic Dashboard</h3>
                    <p>
                    "Beautifully designed dashboard statistics and the current account interface give you an advantage with real-time
                     transactions so you can make smart business decisions."
                    </p>
                  </div>
                  </OwlCarousel> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manage-corporate" className="prevent-select">
        <div className="container-md">
          <div className="row">
            <div className="col-md-6">
              <h3>
              Manage all your <span className="purple">Corporate Needs</span> more efficiently</h3>
            </div>
            <div className="col-md-6">
              <p>A cutting-edge tool for streamlining your business banking activities that includes an attractive dashboard and quick
                 access to your account information</p>
            </div>
          </div>
        </div>
      </section>

      <section id="customers-list" className="prevent-select" data-aos="flip-down">
        <div className="container-md">
          <div className="title">
            {/* <strong>1000+</strong>  */}
            Trusted Customers
          </div>
          <h3>
             Join our <span className="purple">fast-growing</span> list of customers
          </h3>
          <div className="row align-items-center">
          <div className="col-md-4 col-sm-4 col-xs-4">
                <img src={jioSaavan} alt="Jio Saavan" />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
                <img src={bookMyShow} alt="bookMyShow" />
            </div>
            {/* <div className="col-md-3 col-sm-3 col-xs-2 hm-logo">
                <img src={hAndM} alt="H&M" />
            </div> */}
            <div className="reliance-logo col-md-4 col-sm-4 col-xs-4">
                <img src={relianceDigital} alt="Relance Digital" />
            </div>
          </div>
          
        </div>
      </section>

      <section id="video-box">
        <div className="container-md">
          <div className="video">
          <div className="video-frame">
               <img className="frame" src={VideoPng} alt="video" />
              <div className="video-gif">
              <div id="frameVideo"></div>
              <iframe height="100%" width="100%" src="https://www.youtube.com/embed/NjlWVSbdyKg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              {/* <img src={VideoGif} alt="video"/> */}
              </div>
          </div>
          </div>
        </div>
      </section>

      <section id="testemonials" className="prevent-select">
        <div className="slider-top-info">
          <div className="container-md">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="top-head">
                  <h3>What our clients say about us</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-nav">
                  <button
                    className="prev"
                    type="button"
                    onClick={() => handleOwlNav('PREV')}
                  ></button>
                  {/* <div id="owl-slider-counter">
                    <span className="current"></span>
                    <span className="total"></span>
                  </div> */}
                  <button
                    className="next"
                    type="button"
                    onClick={() => handleOwlNav('NEXT')}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-main">
          <div className="container-fluid">
            <OwlCarousel
              className="owl-theme"
              items={3}
              margin={25}
              dots={false}
              onChanged={(e) => handleCarouselchanged(e)}
              ref={owlRef}
              responsiveClass={true}
              responsive={owlResponsiveOption}
            >
              <div className="slide first">
                <div className="slide-info">
                  <div className="title">
                    “It is one stop solution for all payments, account & expense management. I really loved it and it has helped 
                    me to make my business transactions a lot easier."
                  </div>
                  <div className="ratings">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="clientName">
                  <div className="info">
                    {/* <div className="client-pic">
                      <img src={daveBlake} alt="Dave Blake" />
                    </div> */}
                    <div className="name">
                      <h4>Google User</h4>
                      {/* <p>Client Product Description</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide-info">
                  <div className="title">
                  “Glad to have come across this App. For business operations like mine, Tijoree makes managing finances & transactions
                   extremely simple. The easy-to-use application has managing the collections & payouts."
                  </div>
                  <div className="ratings">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="clientName">
                  <div className="info">
                    {/* <div className="client-pic">
                      <img src={daveBlake} alt="Dave Blake" />
                    </div> */}
                    <div className="name">
                      <h4>Anonymous User</h4>
                      {/* <p>Client Product Description</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide-info">
                  <div className="title">
                  "The application was suggested by one of my friends. It is very easy to make & collect payments through this
                   application. The invoice management feature is a time-saver. ”
                  </div>
                  <div className="ratings">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="clientName">
                  <div className="info">
                    {/* <div className="client-pic">
                      <img src={daveBlake} alt="Dave Blake" />
                    </div> */}
                    <div className="name">
                      <h4>Anonymous User</h4>
                      {/* <p>Client Product Description</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide-info">
                  <div className="title">
                    “Invoicing, payouts, collections, banking transaction all the features are top notch. Just found the
                     automated platforms we were looking for."
                  </div>
                  <div className="ratings">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="clientName">
                  <div className="info">
                    {/* <div className="client-pic">
                      <img src={daveBlake} alt="Dave Blake" />
                    </div> */}
                    <div className="name">
                      <h4>Anonymous User</h4>
                      {/* <p>Client Product Description</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      {/* <section id="lets-chat" className="prevent-select">
        <div className="container-md">
          <div className="heading text-center">
            <span className="circle circle-75">
              <img src={dots} alt="dots" data-aos="fade-down" />
              <span className="circle circle-19">
                <img src={dots} alt="dots" data-aos="fade-right" />
              </span>
            </span>
            <span className="circle circle-39" data-aos="fade-left">
              <img src={dots} alt="dots" />
            </span>
            <h2 className="black">Let’s</h2>
            <h2 className="chatNow">Chat Now</h2>
          </div>
          <div className="chatnow-container">
            <Link to= {'/form'} className="btn-rounded purple">
              <span className="">
                <img src={callIcon} alt="call" data-aos="fade-right" />
              </span>
              Contact Us</Link>
          </div>
        </div>
      </section> */}

      <Footer />
      <div className="dropdown call-action">
      <Link className="call-button" data-bs-toggle="dropdown" aria-expanded="false" >
        <img src={callGrey} alt="call" />
      </Link>
      <ul className="dropdown-menu">
        <li><a href="tel:+91 91520-20329">Call</a></li>
        <li className="disabled"><a disabled>Live Chat</a></li>
      </ul>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Landing;
