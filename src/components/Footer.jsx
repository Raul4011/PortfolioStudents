import React from "react"
import { AiFillFacebook } from "react-icons/ai";


function Footer(params) {


    return (
        <div>
            <a href="https://www.facebook.com/" target="_blank">

                <AiFillFacebook style={{ width: "120px", height: "120px" }} />
            </a>
            <iframe 
           className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113937.47438598228!2d-65.32496366155692!3d-26.822578537746686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cfaf9fc495d%3A0x1e3f13fce08fd305!2sTessi%20Rotiseria!5e0!3m2!1ses!2sar!4v1683052581065!5m2!1ses!2sar" ></iframe>
        </div>

    )
}

export default Footer;
