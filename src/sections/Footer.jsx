import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container flex flex-col gap-5">
                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="flex items-center">
                        <a href="/"> Visita mis redes sociales: </a>
                    </div>
                    <div className="socials">
                        {socialImgs.map((img) => (
                            <a className="icon" target="_blank" href={img.url} key={img.url} >
                                <img src ={img.imgPath} alt="social icon" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="text-center">
                        © {new Date().getFullYear()} Adrián | STW. Derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
