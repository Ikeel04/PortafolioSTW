import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const lab1Ref = useRef(null);
    const lab2Ref = useRef(null);
    const lab3Ref = useRef(null);

    useGSAP(() => {
        const labs = [lab1Ref.current, lab2Ref.current, lab3Ref.current];

        labs.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity:0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={lab1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Lab1STW.png" alt="Lab1" />
                        </div>
                        <div className="text-content">
                            <h2>Lab 1: Internet antes de la web.
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Tuve una breve experiencia sobre cómo funcionaba el internet
                                antes de la popularización de la web. Se utilizó como herramienta telehack.com
                                mediante comandos para ir explorando el sitio.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={lab2Ref}>
                            <div className="image-wrapper bg-[#bd00ff]">
                                <img src="/images/Lab2STW.png" alt="Lab2" />
                            </div>
                            <h2>Lab 2: Administración de servidores remotos</h2>
                            <p className="text-white-50 md:text-xl">
                                Me pude conectar a servidores remotos via SSH,
                                esto me ayudó a familiarizarme con la administración
                                de servidores Linux. Se colocaron ciertos comandos para realizar
                                solicitudes al servidor, luego se copiaba el output.
                            </p>
                        </div>

                        <div className="project" ref={lab3Ref}>
                            <div className="image-wrapper bg-[#00b8ff]">
                                <img src="/images/Lab3STW.png" alt="Lab3" />
                            </div>
                            <h2>Lab 3: HTML only</h2>
                            <p className="text-white-50 md:text-xl">
                                Esto fue el inicio de lo relacionado con páginas web, puro HTML.
                                Creé una página web simple, ya tenía experiencia con html por lo que no se me complicó tanto.
                                Pienso que fue más difícil inventarme la historia jaja.
                                Me volví a familiarizar con el concepto de web semántica, lo que fue muy útil para fututos trabajos.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
