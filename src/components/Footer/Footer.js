import React from "react";
import "./footer.css";
import { Link } from "govuk-react";
function Footer() {
  return (
    <div className="">
      <footer className="footer">
        <div className="footerWrap">
          <div className="container">
            <div className="w-4/5 m-0 mx-auto footerPrimaryRow footerPrimary">
              <div className="headerSupporting">
                <nav>
                  <ul className="primaryFooterNav">
                    <li className="primaryFooterNavItem">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="primaryFooterNavItem">
                      <Link href="/">Sitemap</Link>
                    </li>
                    <li className="primaryFooterNavItem">
                      <Link href="/">Contact us</Link>
                    </li>
                    <li className="primaryFooterNavItem">
                      <Link href="/">Work with us</Link>
                    </li>
                    <li className="primaryFooterNavItem">
                      <Link href="/">
                        Our resposnse to corona virus (COVID-19)
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footerLogo">
                <a href="/">NWPS</a>
              </div>
            </div>
          </div>
          <div className="footerSecondary"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
