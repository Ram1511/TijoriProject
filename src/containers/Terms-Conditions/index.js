import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';
import termsConditionsPdf from '../../assets/img/terms-conditions.pdf';

const TermsConditions = () => {
    useEffect(() => {
        document.title="Tijoree | Terms & Conditions"
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
                        <h6>Terms and Conditions</h6>
                        <h1>Terms and Conditions</h1>
                        {/* <p>Everything you need to know about the product.</p> */}
                    </div>
                </div>
            </section>
            <section id="static-content">
                <div className="container-md">
                <embed src={termsConditionsPdf} toolbar="0" type="application/pdf"
	width="100%"
	height="700px;overflow:auto;"
/>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default TermsConditions;
