import React from "react";
import mlgcl from '../images/mlg-logo.png';
import fun from '../images/more-fun.png';
import piodox from '../images/piodoxweb.png';
import doh from '../images/doh-logo.png';
import leyte from '../images/leyte-logo.png';
import hilongos from '../images/hilongos-logo.png';
import '../App.css';
import '../css/FooterNew.css';

function Footer()
{
    return(
        <div className="container-fluid  mb-3 w-70 d-flex">

            <div className="row w-100 footer-main">
                
                
                <div className="col-lg-6 col-center first-layer">

                    <ul className="ul-tag ul-center">

                        <li>
                            <p className="hide-this" style={{fontSize:11}}>powered by</p>
                            <img style={{width:45, marginLeft:20}}src={mlgcl} />
                        </li>

                        <li>
                            <p className="hide-this" style={{fontSize:11}}>powered by</p>
                            <img style={{width:140, marginLeft:20}}src={fun} />
                        </li>

                    </ul>

                </div>


                <div className="col d-flex ms-5 second-layer">
                    <ul className="ul-tag ul-center">
                        <li>
                            <p style={{fontSize:11}}>powered by</p>
                            <img style={{width:160, position:"relative",left:"0px",paddingTop:0}}src={piodox}  className="piodos-logo-text"/>
                        </li>
                    </ul>

                    <ul className="ul-tag ul-center last-layer">
                        <li>
                            <p style={{fontSize:11}}>in partnership with</p>
                            <div className="d-flex">
                            <img style={{width:60}}src={hilongos} />
                            <img style={{width:60, marginLeft:30}}src={doh} />
                            <img style={{width:60, marginLeft:30}}src={leyte} />
                            </div>
                        </li>
                    
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Footer;