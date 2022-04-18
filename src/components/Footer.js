import React from "react";
import mlgcl from '../images/mlg-logo.png';
import fun from '../images/more-fun.png';
import piodox from '../images/piodoxweb.png';
import doh from '../images/doh-logo.png';
import leyte from '../images/leyte-logo.png';
import hilongos from '../images/hilongos-logo.png';
import '../App.css';

function Footer()
{
    return(
        <div className="container-fluid mt-5 mb-3">
            <div className="row  footer-main">
                <div className="col col-center">
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


                <div className="col footer-right col-center bottom-col">
                    <ul className="ul-tag ul-center">
                        <li>
                            <p style={{fontSize:11}}>powered by</p>
                            <img style={{width:160, position:"relative",left:"0px",paddingTop:0}}src={piodox} />
                        </li>
                    </ul>

                    <ul className="ul-tag ul-center">
                        <li>
                            <p style={{fontSize:11}}>in partnership with</p>
                            <div className="">
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