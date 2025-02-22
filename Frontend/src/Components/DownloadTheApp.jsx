import React from 'react'
import "../Style/DownloadTheApp.css"
import mockup from "../img/TechTools/iphoneMockup2.png"
import AppStore from"../img/AppStore.webp"
import PlayStore from "../img/PlayStore.webp"
import QR from "../img/QR1.png"

export default function DownloadTheApp() {
  return <>
    <div id="mainBodyInDownloadTheApp">
        <h1 className='headingInDownloadTheApp'> <b>Download the mobile app</b> </h1>
        <h3 className='subHeadingInDownloadTheApp'> Quickly grab and share scheduling links, manage changes <br />
        on the fly, and get real-time notifications. </h3>
        <div style={{display: 'flex'}}>
            <div id="section1InDownloadTheApp">
                <img src={AppStore} />
            </div>
            <div id="section2InDownloadTheApp">
                <img src={PlayStore} />
            </div>
        </div>
        <div id="QRsectionInDownloadTheApp">
            <img className='QRcodeInDownloadTheApp' src={QR} />
        </div>
        <img className='mockupInDownloadTheApp' src={mockup} />
    </div>
  </>
}