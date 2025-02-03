import React from "react";
import "../Style/Footer.css";
import USA_logo from "../img/USA-flag.webp";
import logo from "../img/odoo_logo_white.png";

import instagram from "../img/SocialMedia/instagram.png";
import facebook from "../img/SocialMedia/facebook.webp";
import whatsapp from "../img/SocialMedia/whatsapp.webp";
import linkedin from "../img/SocialMedia/linkedin.jpg";
import youtube from "../img/SocialMedia/youtube.png";
import github from "../img/SocialMedia/github.png";
import call from "../img/SocialMedia/call.png";
import x from "../img/SocialMedia/x.png";

export default function Footer() {
  return (
    <>
      <div id="Footer">
        <div id="footerTop">
          <img className="odoologo3" src={logo} alt="logo" />
          <div id="footerMain">
            <div className="footerMain1">
              <h1 className="mainFooterHeading1">Community</h1>
              <h2 className="subFooterHeading1">
                Tutorials <br /> Documentation <br /> Forum{" "}
              </h2>

              <h1 className="mainFooterHeading2">Open Source</h1>
              <h2 className="subFooterHeading2">Download</h2>
              <h2 className="subFooterHeading3">
                Github <br /> Runbot <br /> Translations{" "}
              </h2>
            </div>
            <div className="footerMain2">
              <h1 className="mainFooterHeading3">Open Source</h1>
              <h2 className="subFooterHeading4">Odoo.sh Hosting</h2>
              <h2 className="subFooterHeading5">
                Support <br /> Upgrade <br /> Custom Developments <br />{" "}
                Education
              </h2>
              <h2 className="subFooterHeading6">Find an Accountant</h2>
              <h2 className="subFooterHeading7">
                Find a Partner <br /> Become a Partner
              </h2>
            </div>
            <div className="footerMain3">
              <h1 className="mainFooterHeading4">About us</h1>
              <h2 className="subFooterHeading8">
                Our company <br /> Brand Assets <br /> Contact us <br /> Jobs
              </h2>
              <h2 className="subFooterHeading9">
                Events <br /> Podcast <br /> Blog <br /> Customers
              </h2>
              <h2 className="subFooterHeading10">
                Legal • Privacy <br /> Security
              </h2>
            </div>
            <div className="footerMain4">
              <div className="subFooterComponent1">
                <img className="USA_Flag" src={USA_logo} alt="USA Flag" />
                <select name="language" className="languageFooter">
                  <option value="English">English</option>
                  <option value="हिंदी">हिंदी</option>
                  <option value="ગુજરાતી">ગુજરાતી</option>
                  <option value="Suomi">Suomi</option>
                  <option value="Français">Français</option>
                  <option value="Deutsch">Deutsch</option>
                  <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                  <option value="Italiano">Italiano</option>
                  <option value="日本語">日本語</option>
                  <option value="한국어 (KR)">한국어 (KR)</option>
                  <option value="Język polski">Język polski</option>
                  <option value="Português (BR)">Português (BR)</option>
                  <option value="română">română</option>
                  <option value="русский язык">русский язык</option>
                  <option value="Slovenský jazyk">Slovenský jazyk</option>
                  <option value="slovenščina">slovenščina</option>
                  <option value="Español (América Latina)">Español (América Latina)</option>
                  <option value="Español">Español</option>
                  <option value="ภาษาไทย">ภาษาไทย</option>
                </select>
              </div>
              <p className="footerLine">___________________________________________________</p>
              <h2 className="subFooterHeading11">
              Odoo is a suite of open source business apps that
              cover all your company needs: CRM, eCommerce, 
              accounting, inventory, point of sale, project
              management, etc.
              </h2>
              <h2 className="subFooterHeading12">
              Odoo's unique value proposition is to be at the
              same time very easy to use and fully integrated.
              </h2>
              <div id="SocialMediaFooter">
                <a href="https://www.facebook.com/groups/1198429161004367/">
                  <img className="facebook" src={facebook} alt="facebook" />
                </a>
                <a href="https://x.com/krish_hackz">
                  <img className="x" src={x} alt="x" />
                </a>
                <a href="https://www.linkedin.com/in/krishkhinchi/">
                  <img className="linkedin" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/krishkhinchi">
                  <img className="github" src={github} alt="github" />
                </a>
                <img className="instagram" src={instagram} alt="instagram" />
                <a href="https://www.youtube.com/@Krish_Hackz">
                  <img className="youtube" src={youtube} alt="youtube" />
                </a>
                <img className="call" src={call} alt="call" />
                <a href="https://whatsapp.com/channel/0029Va9BZmA77qVXExIAvX2v">
                  <img className="whatsapp" src={whatsapp} alt="whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="footerEnd">
          <h1>Website made With</h1>
          <h1 className="footerName1">Krish Hackz [ᴄᴏᴍᴍᴜɴɪᴛʏ]™</h1>
        </div>
      </div>
    </>
  );
}
