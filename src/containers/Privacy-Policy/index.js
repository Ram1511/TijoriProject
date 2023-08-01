import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';
import termsConditionsPdf from '../../assets/img/privacy-policy.pdf';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title="Tijoree | Privacy Policy"
    // let descMeta=document.querySelector('meta[name="description"]')
    // descMeta.setAttribute("content", 'Experience the future of banking with Tijoree, the leading neobank offering digital banking services designed exclusively for SMEs and startups. Simplify your financial operations, streamline transactions, and unlock growth opportunities with our innovative solutions. Contact us today and embark on a seamless banking journey tailored to your business needs.');
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
          <div className="banner-text">
            <h6>Privacy Policy</h6>
            <h1>Privacy Policy</h1>
            {/* <p>Everything you need to know about the product.</p> */}
          </div>
        </div>
      </section>
      <section id="static-content">
                <div className="container-md">
                <embed src={termsConditionsPdf} toolbar="0" bg-color="white" type="application/pdf"
	width="100%"
	height="700px;overflow:auto;"
/>
                </div>
            </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
