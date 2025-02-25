import React from "react";
import "../Style/Main.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import India from "../img/India.jpg";
import Arrow1 from "../img/arrow_doodle_1.svg";
import Arrow4 from "../img/arrow4.svg";
import arrow3 from "../img/arrow3.svg";
import logo from "../img/odoo_logo_white.png";
import bgDesignTool from "../img/bgDesignTool.png";
import youtubeIcon from "../img/SocialMedia/youtubeIcon.svg";
import Curly2 from "../img/{.png";
import Krish from "../img/Krish.png";
import happy_emoji from "../img/happy_emoji.png";
import bgYellow from "../img/bg_yellow_inMain1.svg";
import designToggle1 from "../img/designToggle1.png";
import designMain5 from "../img/designMain5.png";
import speed_1 from "../img/interface/speed_1.webp";
import speed_3 from "../img/interface/speed_3.webp";
import speed_4 from "../img/interface/speed_4.webp";
import set_up from "../img/interface/set_up.webp";
import laptopMockup from "../img/TechTools/laptopMockup.png";
import uniquevalue2024 from "../img/interface/unique-value-2024.svg";
import bgDesignToWhiteSection from "../img/bgDesignToWhiteSection.png";

//videos
import video1 from "../video/video_homepage.mp4";
import video2 from "../video/ctrl-k-630.gif";

//All Apps Img
import Accounting from "../img/Bundle/Accounting.svg";
import Knowledge from "../img/Bundle/Knowledge.svg";
import Sign from "../img/Bundle/Sign.svg";
import CRM from "../img/Bundle/CRM.svg";
import Studio from "../img/Bundle/Studio.svg";
import Subscriptions from "../img/Bundle/Subscriptions.svg";
import Rental from "../img/Bundle/Rental.svg";
import PointofSale from "../img/Bundle/Point of Sale.svg";
import Discuss from "../img/Bundle/Discuss.svg";
import Documents from "../img/Bundle/Documents.svg";
import Project from "../img/Bundle/Project.svg";
import Timesheets from "../img/Bundle/Timesheets.svg";
import FieldService from "../img/Bundle/Field Service.svg";
import Planning from "../img/Bundle/Planning.svg";
import Helpdesk from "../img/Bundle/Helpdesk.svg";
import Website from "../img/Bundle/Website.svg";
import SocialMarketing from "../img/Bundle/Social Marketing.svg";
import EmailMarketing from "../img/Bundle/Email Marketing.svg";
import Purchase from "../img/Bundle/Purchase.svg";
import Inventory from "../img/Bundle/Inventory.svg";
import Manufacturing from "../img/Bundle/Manufacturing.svg";
import Sales from "../img/Bundle/Sales.svg";
import HR from "../img/Bundle/HR.svg";
import Dashboard from "../img/Bundle/Dashboard.svg";

//TechTools
import shopfloor from "../img/TechTools/device_shopfloor.webp";
import device_expenses from "../img/TechTools/device_expenses.webp";
import device_pos from "../img/TechTools/device_pos.webp";
import device_iot from "../img/TechTools/device_iot.webp";
import device_frontdesk from "../img/TechTools/device_frontdesk.webp";
import device_inventory from "../img/TechTools/device_inventory.webp";
import device_kiosk from "../img/TechTools/device_kiosk.webp";

//fonts
import "../fonts/BrushSignature-Rp7EV.otf";
import "../fonts/Caveat-Bold/Caveat-Bold.ttf";
import "../fonts/space-crusaders-font/SpaceCrusaders-x3DP0.ttf";

export default function Main() {
  const Navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // if (window.scrollY > 2900) {
    //   document.getElementById("speed_4InMain").style.display = "block";
    // }
  }, []);

  function handleToggle() {
    setCount(count + 1);
    count % 2 == 0 ? toggleOn() : toggleOff();
    function toggleOn() {
      document.getElementById("forToggleFunction").style.marginLeft = "32px";
      document.getElementById("forToggleFunction").style.backgroundColor =
        "#ffffff";
      document.getElementById("onlyToggleInMain").style.backgroundColor =
        "#714b67";
      document.getElementById("forToggleFunction").style.transition = "0.4s";
      document.getElementById("onlyToggleInMain").style.transition = "0.3s";
      document.getElementById("curlyInMain1").style.display = "block";
      document.getElementById("animateDesignToggle1").style.width = "90px";
      document.getElementById("animateDesignToggle1").style.height = "90px";
      document.getElementById("animateDesignToggle1").style.marginLeft = "20px";
      document.getElementById("animateDesignToggle1").style.marginTop = "-5px";
      document.getElementById("animateDesignToggle1").style.transition = "0.1s";
    }
    function toggleOff() {
      document.getElementById("forToggleFunction").style.marginLeft = "2px";
      document.getElementById("forToggleFunction").style.backgroundColor =
        "#d2cad2";
      document.getElementById("onlyToggleInMain").style.backgroundColor =
        "#ffffff";
      document.getElementById("forToggleFunction").style.transition = "0.4s";
      document.getElementById("onlyToggleInMain").style.transition = "0.3s";
      document.getElementById("curlyInMain1").style.display = "none";
      document.getElementById("animateDesignToggle1").style.width = "80px";
      document.getElementById("animateDesignToggle1").style.height = "80px";
      document.getElementById("animateDesignToggle1").style.marginLeft = "30px";
      document.getElementById("animateDesignToggle1").style.marginTop = "0px";
      document.getElementById("animateDesignToggle1").style.transition = "0.1s";
    }
  }

  return (
    <>
      <div>
        <div id="HeadinginMain">
          <h1 className="line1InMain">All your business on</h1>
          <div id="styleInMain">
            <div className="Style1InMain"></div>
            <div className="Style2InMain"></div>
            <div className="Style3InMain"></div>
          </div>
          <h1 className="line2InMain">one platform.</h1>
          <h1 className="line3InMain">Simple, efficient, yet affordable!</h1>
          <div className="Style4InMain"></div>
          <div id="button">
            <button className="btn1inMain" onClick={() => Navigate("/error")}>
              Start now - It's free
            </button>

            <button className="btn2inMain" onClick={() => Navigate("/error")}>
              Meet an advisor
            </button>
          </div>
          <img id="Arrow1InMain" src={Arrow1} alt="Arrow" />
          <h1 className="line4InMain">
            499 Rs / month <br /> for ALL apps
          </h1>
        </div>
      </div>
      <div id="allFeaturesInMain">
        <div id="bgGrayInMain1">
          <div className="eventOdooInMain">
            <img className="IndiaFlag" src={India} alt="India" />
            <h1 className="eventcityInMain">
              Business Show: Ahmedabad (India)
            </h1>
            <h1 className="eventdateInMain">Feb 12, 2025</h1>
            <button className="btn3inMain">Register ⟶</button>
          </div>
          <div id="Arrow2InApps">
            <img id="Arrow2InAppsMain" src={Arrow1} alt="Arrow" />
            <h1></h1>
          </div>
          <div id="allAppInMain">
            <div id="appLine1">
              <div className="appInMain1">
                <img
                  className="appImgInMain1"
                  src={Accounting}
                  alt="Accounting"
                />
              </div>
              <div className="appInMain2">
                <img
                  className="appImgInMain1"
                  src={Knowledge}
                  alt="Knowledge"
                />
              </div>
              <div className="appInMain3">
                <img className="appImgInMain1" src={Sign} alt="Sign" />
              </div>
              <div className="appInMain4">
                <img className="appImgInMain1" src={CRM} alt="CRM" />
              </div>
              <div className="appInMain5">
                <img className="appImgInMain1" src={Studio} alt="Studio" />
              </div>
              <div className="appInMain6">
                <img
                  className="appImgInMain1"
                  src={Subscriptions}
                  alt="Subscriptions"
                />
              </div>
            </div>
            <div id="appNameLine1">
              <div className="appNameInMain1">
                {" "}
                <h1>Accounting</h1>{" "}
              </div>
              <div className="appNameInMain2">
                {" "}
                <h1>Knowledge</h1>{" "}
              </div>
              <div className="appNameInMain3">
                {" "}
                <h1>Sign</h1>{" "}
              </div>
              <div className="appNameInMain4">
                {" "}
                <h1>CRM</h1>{" "}
              </div>
              <div className="appNameInMain5">
                {" "}
                <h1>Studio</h1>{" "}
              </div>
              <div className="appNameInMain6">
                {" "}
                <h1>Subscriptions</h1>{" "}
              </div>
            </div>

            <div id="appLine2">
              <div className="appInMain7">
                <img className="appImgInMain1" src={Rental} alt="Rental" />
              </div>
              <div className="appInMain8">
                <img
                  className="appImgInMain1"
                  src={PointofSale}
                  alt="PointofSale"
                />
              </div>
              <div className="appInMain9">
                <img className="appImgInMain1" src={Discuss} alt="Discuss" />
              </div>
              <div className="appInMain10">
                <img
                  className="appImgInMain1"
                  src={Documents}
                  alt="Documents"
                />
              </div>
              <div className="appInMain11">
                <img className="appImgInMain1" src={Project} alt="Project" />
              </div>
              <div className="appInMain12">
                <img
                  className="appImgInMain1"
                  src={Timesheets}
                  alt="Timesheets"
                />
              </div>
            </div>
            <div id="appNameLine2">
              <div className="appNameInMain7">
                {" "}
                <h1>Rental</h1>{" "}
              </div>
              <div className="appNameInMain8">
                {" "}
                <h1>Point of Sale</h1>{" "}
              </div>
              <div className="appNameInMain9">
                {" "}
                <h1>Discuss</h1>{" "}
              </div>
              <div className="appNameInMain10">
                {" "}
                <h1>Documents</h1>{" "}
              </div>
              <div className="appNameInMain11">
                {" "}
                <h1>Project</h1>{" "}
              </div>
              <div className="appNameInMain12">
                {" "}
                <h1>Timesheets</h1>{" "}
              </div>
            </div>

            <div id="appLine3">
              <div className="appInMain13">
                <img
                  className="appImgInMain1"
                  src={FieldService}
                  alt="FieldService"
                />
              </div>
              <div className="appInMain14">
                <img className="appImgInMain1" src={Planning} alt="Planning" />
              </div>
              <div className="appInMain15">
                <img className="appImgInMain1" src={Helpdesk} alt="Helpdesk" />
              </div>
              <div className="appInMain16">
                <img className="appImgInMain1" src={Website} alt="Website" />
              </div>
              <div className="appInMain17">
                <img
                  className="appImgInMain1"
                  src={SocialMarketing}
                  alt="SocialMarketing"
                />
              </div>
              <div className="appInMain18">
                <img
                  className="appImgInMain1"
                  src={EmailMarketing}
                  alt="EmailMarketing"
                />
              </div>
            </div>
            <div id="appNameLine3">
              <div className="appNameInMain13">
                {" "}
                <h1>Field Service</h1>{" "}
              </div>
              <div className="appNameInMain14">
                {" "}
                <h1>Planning</h1>{" "}
              </div>
              <div className="appNameInMain15">
                {" "}
                <h1>Helpdesk</h1>{" "}
              </div>
              <div className="appNameInMain16">
                {" "}
                <h1>Website</h1>{" "}
              </div>
              <div className="appNameInMain17">
                {" "}
                <h1>Social Marketing</h1>{" "}
              </div>
              <div className="appNameInMain18">
                {" "}
                <h1>Email Marketing</h1>{" "}
              </div>
            </div>

            <div id="appLine4">
              <div className="appInMain19">
                <img className="appImgInMain1" src={Purchase} alt="Purchase" />
              </div>
              <div className="appInMain20">
                <img
                  className="appImgInMain1"
                  src={Inventory}
                  alt="Inventory"
                />
              </div>
              <div className="appInMain21">
                <img
                  className="appImgInMain1"
                  src={Manufacturing}
                  alt="Manufacturing"
                />
              </div>
              <div className="appInMain22">
                <img className="appImgInMain1" src={Sales} alt="Sales" />
              </div>
              <div className="appInMain23">
                <img className="appImgInMain1" src={HR} alt="HR" />
              </div>
              <div className="appInMain24">
                <img
                  className="appImgInMain1"
                  src={Dashboard}
                  alt="Dashboard"
                />
              </div>
            </div>
            <div id="appNameLine4">
              <div className="appNameInMain19">
                {" "}
                <h1>Purchase</h1>{" "}
              </div>
              <div className="appNameInMain20">
                {" "}
                <h1>Inventory</h1>{" "}
              </div>
              <div className="appNameInMain21">
                {" "}
                <h1>Manufacturing</h1>{" "}
              </div>
              <div className="appNameInMain22">
                {" "}
                <h1>Sales</h1>{" "}
              </div>
              <div className="appNameInMain23">
                {" "}
                <h1>HR</h1>{" "}
              </div>
              <div className="appNameInMain24">
                {" "}
                <h1>Dashboard</h1>{" "}
              </div>
            </div>
          </div>
          <div id="curlyInMain1">
            <img className="curly" src={Curly2} alt="curly" />
            <h1 className="nameinCurlyInMain">SAP</h1>
          </div>
        </div>
        <div div style={{ display: "flex" }}>
          <div id="toggleBodyInMain">
            <img
              className="designToggle1"
              id="animateDesignToggle1"
              src={designToggle1}
              alt="designToggle1"
            />
            <div id="onlyToggleInMain">
              <div className="borderToggle" onClick={handleToggle}>
                <div className="CircleToggle" id="forToggleFunction"></div>
              </div>
            </div>
            <button onClick={handleToggle} className="headingToggleInMain1">
              Imagine without odoo
            </button>
          </div>
          <div id="viewAllApps">
            <button>View all Apps</button>
            <img className="arrowForviewAllApps" src={arrow3} alt="arrow" />
          </div>
        </div>
        <div id="paragraphInMain1">
          <h1 className="line5InMain">
            Imagine a vast collection of business apps at your disposal.
          </h1>
          <h1 className="line6InMain">
            Got something to improve? There is an app for that. <br />
            No complexity, no cost, just a one-click install.
          </h1>
        </div>
        <div id="paragraphInMain2">
          <h1 className="line7InMain">
            Each app simplifies a process and empowers more people. <br />
            Imagine the impact when everyone gets the right tool for the job,
            with perfect <br />
            integration.
          </h1>
        </div>
        <div id="bgGrayInMain2">
          <div id="designForWhiteSectionInMain">
            <img
              className="reviewHappyEmoji_InWhiteSectionInMain"
              src={happy_emoji}
              alt="img"
            />
            <img src={bgYellow} alt="img" />
            <div className="reviewIn_designForWhiteSectionInMain">
              <h1 className="line1InReviewInWhiteSectionInMain">
                <i>If you simplify everything, you can do anything!</i>
              </h1>
              <h1 className="line2InReviewInWhiteSectionInMain">
                - Krish Khinchi
              </h1>
            </div>
            <img
              className="reviewProfile_InWhiteSectionInMain"
              src={Krish}
              alt="photo"
            />
          </div>
          <div id="WhiteSectionInMain">
            <div id="headingPartWhiteSectionInMain">
              <h1 className="headingInWhiteSectionInMain">
                Level up your quality of work
              </h1>
              <img
                className="design1InWhiteSectionInMain"
                src={bgDesignToWhiteSection}
              />
              <div className="design2InWhiteSectionInMain"></div>
            </div>
            <div className="laptopVideoInMain">
              <video className="videoInMain1" autoPlay muted loop width="705">
                <source src={video1} type="video/mp4" />
              </video>
              <div className="hideSpaceInLaptop">
                <img className="logoInhideSpace" src={logo} />
              </div>
              <img
                className="laptopMockupInWhiteSectionInMain"
                src={laptopMockup}
              />
            </div>
          </div>
          <div id="optimizedForProductivityInMain">
            <h1 className="mainTextInOptimizedForProductivityInMain">
              Optimized for productivity
            </h1>
            <div className="underlineInOptimizedForProductivityInMain"></div>
            <img
              className="mainDesignInOptimizedForProductivityInMain"
              src={designMain5}
            />
            <div id="imgsInOptimizedForProductivityInMain">
              <div className="speed_4InMain">
                <img className="imgOfspeed_4InMain" src={speed_4} />
              </div>
              <div className="speed_1InMain">
                <img className="imgOfspeed_1InMain" src={speed_1} />
              </div>
              <div className="speed_3InMain">
                <img className="imgOfspeed_3InMain" src={speed_3} />
              </div>
              <div className="video2InMain">
                <img className="gifOfvideo2InMain" src={video2} />
              </div>
              <h1 className="subTextInOptimizedForProductivityInMain">
                <b> Experience true speed, </b> reduced data entry, smart AI,
                and a fast UI. All operations <br /> are done in less than 90ms
                - faster than a blink.
              </h1>
              <img
                className="arrow4InOptimizedForProductivityInMain"
                src={Arrow4}
              />
              <div className="youtubeContainerInOptimizedForProductivity">
                <img
                  className="youtubeIconInOptimizedForProductivity"
                  src={youtubeIcon}
                />
                <a href="https://www.youtube.com/@Krish_Hackz">
                  <button className="btn1InyoutubeContainerInMain">
                    <b>Compare with SAP</b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="bgWhiteInMain3">
          <div className="subDiv1InWhiteSection">
            <img className="bgDesignToolInWhiteInMain3" src={bgDesignTool} />
            <h1 className="headingInSubDiv1InWhiteSection">
              All the tech in one platform
            </h1>
          </div>
          <div className="techSection1InbgWhiteInMain3">
            <div className="subDiv1InTechSection">
              <img className="shopfloor" src={shopfloor} />
            </div>
            <div className="subDiv2InTechSection">
              <img className="device_expenses" src={device_expenses} />
            </div>
            <div className="subDiv3InTechSection">
              <img className="device_pos" src={device_pos} />
            </div>
            <div className="subDiv4InTechSection">
              <img className="device_iot" src={device_iot} />
            </div>
          </div>
          <div className="techName1InTechSection">
            <div className="product1InTechSection">
              <h1 className="heading1InTechSection">Shop Floor</h1>
            </div>
            <div className="product2InTechSection">
              <h1 className="heading2InTechSection">Expenses</h1>
            </div>
            <div className="product3InTechSection">
              <h1 className="heading3InTechSection">Point of Sale</h1>
            </div>
            <div className="product4InTechSection">
              <h1 className="heading4InTechSection">IoT</h1>
            </div>
          </div>
          <div className="techSection2InbgWhiteInMain3">
            <div className="subDiv5InTechSection">
              <img className="device_frontdesk" src={device_frontdesk} />
            </div>
            <div className="subDiv6InTechSection">
              <img className="device_inventory" src={device_inventory} />
            </div>
            <div className="subDiv7InTechSection">
              <img className="device_kiosk" src={device_kiosk} />
            </div>
          </div>
          <div className="techName2InTechSection">
            <div className="product5InTechSection">
              <h1 className="heading5InTechSection">Frontdesk</h1>
            </div>
            <div className="product6InTechSection">
              <h1 className="heading6InTechSection">Inventory</h1>
            </div>
            <div className="product7InTechSection">
              <h1 className="heading7InTechSection">Kiosk</h1>
            </div>
          </div>
        </div>
        <div id="bgGrayInMain3">
          <div>
            <h1 className="mainHeading1InbgGrayInMain3">Enterprise software</h1>
            <h1 className="mainHeading2InbgGrayInMain3">done right</h1>
          </div>
          <div id="mainDivInbgGrayInMain3">
            <div id="submain1InbgGrayInMain3">
              <div className="supersub1InbgGrayInMain3">
                <h1 className="mainheadingInsupersub1">
                  <b>Open source</b>
                </h1>
                <h1 className="subheading1Insupersub1">
                  Behind the technology is a community of 100k+ <br />
                  developers collaborating worldwide. We're <br />
                  united by the spirit of open source, and a <br />
                  common vision: "to transform companies, <br />
                  empower employees".
                </h1>
                <h1 className="subheading2Insupersub1">
                  Odoo is available in two editions: <br />
                  <b>• Community</b>: Open Source, 100% free. <br />
                  <b>• Enterprise</b>: extra apps, infrastructure and <br />
                  professional services.
                </h1>
                <button className="btnInsupersub1">Compare Editions</button>
              </div>

              <div className="supersub2InbgGrayInMain3">
                <h1 className="mainheadingInsupersub2">
                  <b>Highly customizable</b>
                </h1>
                <h1 className="subheadingInsupersub2">
                  Use Odoo Studio to automate actions, design <br />
                  custom screens, custom reports, or web hooks.
                </h1>
                <div className="imgdivInsupersub2">
                  <img className="imgInsupersub2" src={set_up} />
                </div>
              </div>

              <div className="supersub3InbgGrayInMain3">
                <h1 className="mainheadingInsupersub3">
                  <b>40k+ community apps</b>
                </h1>
                <h1 className="subheadingInsupersub3">
                  Thanks to its open source development model, <br />
                  Odoo became the world's largest business apps <br />
                  store. Imagine getting an app for every business <br />
                  needs.
                </h1>
                <button className="btnInsupersub3">
                  Browse Community Apps
                </button>
              </div>

              <div className="supersub4InbgGrayInMain3">
                <h1 className="mainheadingInsupersub4">
                  <b>No corporate bullsh*t</b>
                </h1>
                <h1 className="subheading1Insupersub4">
                  "With most systems, you get 70% of what you <br />
                  hoped. With Odoo, you get more than what you <br />
                  expected. You, guys, will transform the market."
                </h1>
                <h1 className="subheading2Insupersub4">
                  <i>- Anonymous competitor</i>
                </h1>
              </div>
            </div>

            <div id="submain2InbgGrayInMain3">
              <div className="supersub5InbgGrayInMain3">
                <h1 className="mainheadingInsupersub5">
                  <b>No vendor lock-in</b>
                </h1>
                <h1 className="subheadingInsupersub5">
                  No proprietary data format, just <br />
                  PostgreSQL: you own your <br />
                  data. No software lock-in: you <br />
                  get the source code, GitHub <br />
                  access, and the flexibility to <br />
                  host on our infrastructure, or on <br />
                  premise.
                </h1>
                <a href="https://github.com/krishkhinchi/">
                  <button className="btnInsupersub5">
                    Follow us on Github
                  </button>
                </a>
              </div>

              <div className="supersub6InbgGrayInMain3">
                <h1 className="mainheadingInsupersub6">
                  <b>Fair pricing</b>
                </h1>
                <h1 className="subheadingInsupersub6">
                  No usage-based pricing, no <br />
                  feature upselling, no long term <br />
                  contracts, no hosting limits, no <br />
                  surprises... just a single price <br />
                  per user - all inclusive.
                </h1>
                <button className="btnInsupersub6">View Pricing</button>
              </div>

              <div className="supersub7InbgGrayInMain3">
                <h1 className="mainheadingInsupersub7">
                  <b>
                    A unique value <br /> proposition
                  </b>
                </h1>
                <img className="imgInsupersub7" src={uniquevalue2024} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
