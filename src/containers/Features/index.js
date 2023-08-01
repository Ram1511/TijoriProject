import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

// Images imported from assets
import money from '../../assets/img/money.svg';
import piggy from '../../assets/img/piggy.svg';

const Features = () => {
  useEffect(() => {
    document.title="Tijoree | Neobank Offering Digital Banking Services"
    let descMeta=document.querySelector('meta[name="description"]')
    descMeta.setAttribute("content", 'Experience the future of banking with Tijoree, the leading neobank offering digital banking services designed exclusively for SMEs and startups. Simplify your financial operations, streamline transactions, and unlock growth opportunities with our innovative solutions. Contact us today and embark on a seamless banking journey tailored to your business needs.');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section id="inner-banner">
        <div className="container-md">
          <div className="banner-text features">
            <h6><Link to={'/'}>Home</Link> &gt; Features</h6>
            <h1>Business Banking</h1>
            <p>Empower your business with all the right tools to accept online payments</p>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container-md">
            <h3>Features <span className="purple">Comparison</span></h3>
            <div className="features-list">
               <div className="row">
                  <div className="col-md-6">
                     <div className="list active">
                        <div className="top-icon d-flex align-items-center justify-content-center"><img src={money} alt="tijoree" /></div>
                        <div className="title">
                            <h4>Tijoree</h4>
                            <h5>Current Account</h5>
                        </div>
                        <ul>
                            <li>Cashback & Rewards on your current A/C</li>
                            <li>Dynamic Dashboard</li>
                            <li>Lower Account Balance availability</li>
                            <li>Rewards on transactions</li>
                            <li>Overdraft facility</li>
                            <li>Branch Support</li>
                            {/* <li>Customer Service Team 24*7</li> */}
                            <li>Zero cooling period after adding beneficiaries</li>
                            <li>Addition of multiple beneficiaries for payments</li>
                            <li>Cheque/Card/DD/PO facilities</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="list">
                        <div className="top-icon  d-flex align-items-center justify-content-center"><img src={piggy} alt="tijoree" /></div>
                        <div className="title">
                            <h4>Standard</h4>
                            <h5>Current Account</h5>
                        </div>
                        <ul>
                            <li className="disabled">Cashback & Rewards on your current A/C</li>
                            <li className="disabled">Dynamic Dashboard</li>
                            <li>Lower Account Balance availability</li>
                            <li className="disabled">Rewards on transactions</li>
                            <li>Overdraft facility</li>
                            <li>Branch Support</li>
                            {/* <li className="disabled">Customer Service Team 24*7</li> */}
                            <li className="disabled">Zero cooling period after adding beneficiaries</li>
                            <li className="disabled">Addition of multiple beneficiaries for payments</li>
                            <li>Cheque/Card/DD/PO facilities</li>
                            
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
