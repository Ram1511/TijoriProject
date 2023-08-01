import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


// Images imported from assets
import TijoreeFooterLogo from '../assets/img/logo-footer.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container-md">
        <div className="row">
          <div className="col-md-4 footer-logo">
            <Link to={'/'}>
              <img src={TijoreeFooterLogo} alt="Tijoree" />
            </Link>
            <p>
              Tijoree is a new age banking solution for operating a business successfully
            </p>
            {/* <h4 className="address-title">Locate Us</h4>
            <div className="address">
              Tijoree Invest Private Limited, <br></br>
              701B, Centre Point, Andheri-Kurla Road, <br></br>
              JB Nagar, Andheri (E), Mumbai, <br></br>
              Mumbai City, Maharashtra, <br></br>
              India, 400059
            </div> */}

          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to={'/about'}>About Us</Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/tijoree-money/" target="_blank">Careers</a>
              </li>
              <li>
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/terms-conditions'}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to={'/form'}>Help Center</Link>
              </li>
              <li>
                <Link to={'/products/current-account'}>Account Information</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Help Center</h4>
            <ul>
              <li>
                <Link to={'/faq'}>FAQs</Link>
              </li>
              <li>
                <Link to={'/form'}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social">
              <ul>
                <li className="twitter">
                  <a href="https://twitter.com/tijoreemoney?s=21&t=VptfLfGqMLEGgAb0E-u9zw" target="_blank">
                    <svg
                      width="36"
                      height="30"
                      viewBox="0 0 36 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.3252 29.6251C24.9068 29.6251 32.3374 18.3702 32.3374 8.61291C32.3374 8.29651 32.3304 7.97307 32.3163 7.65666C33.7618 6.61131 35.0092 5.3165 36 3.83307C34.6538 4.43202 33.2245 4.82319 31.7609 4.99323C33.3019 4.06948 34.4558 2.61833 35.0086 0.908772C33.5588 1.76796 31.9734 2.37404 30.3202 2.70104C29.2063 1.51746 27.7335 0.733797 26.1295 0.471199C24.5256 0.208601 22.8798 0.481698 21.4466 1.24827C20.0134 2.01484 18.8727 3.23218 18.2008 4.71209C17.5288 6.192 17.3631 7.85204 17.7293 9.43557C14.7937 9.28826 11.9219 8.52568 9.29997 7.19727C6.67804 5.86886 4.36454 4.00428 2.50945 1.7244C1.5666 3.34999 1.27808 5.27359 1.70255 7.10426C2.12701 8.93493 3.23259 10.5353 4.79461 11.5801C3.62194 11.5429 2.47496 11.2271 1.44844 10.659V10.7504C1.44739 12.4563 2.03715 14.11 3.11746 15.4303C4.19778 16.7506 5.70199 17.656 7.37437 17.9926C6.28808 18.2898 5.14797 18.3331 4.04227 18.1192C4.51418 19.5863 5.43236 20.8695 6.66866 21.7896C7.90495 22.7098 9.39768 23.221 10.9385 23.252C8.32264 25.3068 5.09126 26.4213 1.76484 26.416C1.17493 26.4151 0.585599 26.379 0 26.3078C3.37928 28.4757 7.3103 29.6272 11.3252 29.6251Z" />
                    </svg>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/company/tijoree-money/" target="_blank">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M33.3352 0H2.65781C1.18828 0 0 1.16016 0 2.59453V33.3984C0 34.8328 1.18828 36 2.65781 36H33.3352C34.8047 36 36 34.8328 36 33.4055V2.59453C36 1.16016 34.8047 0 33.3352 0ZM10.6805 30.6773H5.33672V13.493H10.6805V30.6773ZM8.00859 11.1516C6.29297 11.1516 4.90781 9.76641 4.90781 8.05781C4.90781 6.34922 6.29297 4.96406 8.00859 4.96406C9.71719 4.96406 11.1023 6.34922 11.1023 8.05781C11.1023 9.75937 9.71719 11.1516 8.00859 11.1516ZM30.6773 30.6773H25.3406V22.3242C25.3406 20.3344 25.3055 17.768 22.5633 17.768C19.7859 17.768 19.3641 19.9406 19.3641 22.1836V30.6773H14.0344V13.493H19.1531V15.8414H19.2234C19.9336 14.4914 21.6773 13.0641 24.2719 13.0641C29.6789 13.0641 30.6773 16.6219 30.6773 21.2484V30.6773Z" />
                    </svg>
                  </a>
                </li>
                <li className="youtube">
                  <a href="https://www.youtube.com/@tijoreemoney3903" target="_blank">
                    <svg
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M35.6414 5.8002C35.6414 5.8002 35.2898 3.31816 34.207 2.22832C32.8359 0.793945 31.3031 0.786914 30.6 0.702539C25.5656 0.336914 18.007 0.336914 18.007 0.336914H17.993C17.993 0.336914 10.4344 0.336914 5.4 0.702539C4.69688 0.786914 3.16406 0.793945 1.79297 2.22832C0.710156 3.31816 0.365625 5.8002 0.365625 5.8002C0.365625 5.8002 0 8.71816 0 11.6291V14.3572C0 17.2682 0.358594 20.1861 0.358594 20.1861C0.358594 20.1861 0.710156 22.6682 1.78594 23.758C3.15703 25.1924 4.95703 25.1432 5.75859 25.2979C8.64141 25.5721 18 25.6564 18 25.6564C18 25.6564 25.5656 25.6424 30.6 25.2838C31.3031 25.1994 32.8359 25.1924 34.207 23.758C35.2898 22.6682 35.6414 20.1861 35.6414 20.1861C35.6414 20.1861 36 17.2752 36 14.3572V11.6291C36 8.71816 35.6414 5.8002 35.6414 5.8002ZM14.2805 17.6689V7.55098L24.0047 12.6275L14.2805 17.6689Z" />
                    </svg>
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/tijoree.money/?igshid=YWJhMjlhZTc%3D" target="_blank">
                    <svg className="default-logo" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.4211 12.4575C31.406 11.3214 31.1933 10.1967 30.7926 9.1335C30.4451 8.23672 29.9144 7.42229 29.2343 6.74224C28.5543 6.06219 27.7399 5.53147 26.8431 5.184C25.7936 4.79003 24.6849 4.57701 23.5641 4.554C22.1211 4.4895 21.6636 4.4715 18.0006 4.4715C14.3376 4.4715 13.8681 4.4715 12.4356 4.554C11.3153 4.57718 10.2071 4.7902 9.15809 5.184C8.26118 5.53123 7.44663 6.06186 6.76654 6.74195C6.08646 7.42203 5.55583 8.23658 5.20859 9.1335C4.81384 10.1822 4.60128 11.2907 4.58009 12.411C4.51559 13.8555 4.49609 14.313 4.49609 17.976C4.49609 21.639 4.49609 22.107 4.58009 23.541C4.60259 24.663 4.81409 25.77 5.20859 26.8215C5.55641 27.7181 6.08744 28.5324 6.76775 29.2122C7.44806 29.892 8.26269 30.4224 9.15959 30.7695C10.2057 31.1793 11.3142 31.4076 12.4371 31.4445C13.8816 31.509 14.3391 31.5285 18.0021 31.5285C21.6651 31.5285 22.1346 31.5285 23.5671 31.4445C24.6878 31.4224 25.7966 31.2099 26.8461 30.816C27.7426 30.4681 28.5569 29.9373 29.2369 29.2573C29.9169 28.5773 30.4477 27.763 30.7956 26.8665C31.1901 25.8165 31.4016 24.7095 31.4241 23.586C31.4886 22.143 31.5081 21.6855 31.5081 18.021C31.5051 14.358 31.5051 13.893 31.4211 12.4575ZM17.9916 24.903C14.1606 24.903 11.0571 21.7995 11.0571 17.9685C11.0571 14.1375 14.1606 11.034 17.9916 11.034C19.8307 11.034 21.5946 11.7646 22.895 13.0651C24.1955 14.3655 24.9261 16.1294 24.9261 17.9685C24.9261 19.8076 24.1955 21.5715 22.895 22.8719C21.5946 24.1724 19.8307 24.903 17.9916 24.903ZM25.2021 12.3945C24.9897 12.3947 24.7793 12.353 24.5831 12.2718C24.3868 12.1906 24.2085 12.0715 24.0583 11.9213C23.9081 11.7711 23.789 11.5928 23.7078 11.3965C23.6266 11.2003 23.5849 10.9899 23.5851 10.7775C23.5851 10.5652 23.6269 10.3551 23.7081 10.159C23.7893 9.96289 23.9084 9.78472 24.0585 9.63464C24.2086 9.48455 24.3867 9.3655 24.5828 9.28428C24.7789 9.20305 24.9891 9.16125 25.2013 9.16125C25.4136 9.16125 25.6238 9.20305 25.8199 9.28428C26.0159 9.3655 26.1941 9.48455 26.3442 9.63464C26.4943 9.78472 26.6133 9.96289 26.6946 10.159C26.7758 10.3551 26.8176 10.5652 26.8176 10.7775C26.8176 11.6715 26.0946 12.3945 25.2021 12.3945Z" />
                      <path d="M17.9928 22.473C20.4805 22.473 22.4973 20.4563 22.4973 17.9685C22.4973 15.4807 20.4805 13.464 17.9928 13.464C15.505 13.464 13.4883 15.4807 13.4883 17.9685C13.4883 20.4563 15.505 22.473 17.9928 22.473Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="extra-footer-para">
              The Business Current Accounts other similar banking services/financial services offered on the Tijoree platform are provided by RBI-licensed banks and financial institutions. All funds in the Tijoree powered Business Current Account are insured as per limits prescribed under the RBI’s deposit insurance scheme. The banking services/financial services offered on the Tijoree platform are powered by our partner banks/financial institutions and follows all security standards and legal requirements prescribed by the partner bank/financial institution, in accordance with extant RBI regulations.
            </div>
            <div className="copyright">
              &copy; Tijoree Invest Private Limited Copyrights 2023 All Rights Reserved
            </div>
            <div className="address-footer">
              Tijoree Invest Private Limited
              Times Square Building,
              Andheri E, Mumbai – 400059
              {/* Tijoree Invest Private Limited,
              701B, Centre Point, Andheri-Kurla Road,
              JB Nagar, Andheri (E), Mumbai,
              Mumbai City, Maharashtra,
              India, 400059 */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
