import {words} from "../constants/index.js";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Elijiendo entre
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />

                                                <span>
                                                    {word.text}
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>¿Cuáles son mejores?</h1>
                            <h1>Lo averiguaremos...</h1>
                        </div>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Yo, Adrián González, un pequeño desarrollador que vive en Guatemala les mostrará sus conocimientos adquiridos durante el curso... (Con un poco de ayuda Chat de por medio jeje)
                    </p>
                </header>
                {/*RIGHT: 3D MODEL */}
            </div>
            </section>
    )
}

export default Hero