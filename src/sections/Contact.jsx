import React, { useState, useRef } from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactModels/ContactExperience.jsx";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ success: false, message: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ success: false, message: '' });

        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setLoading(false);
            setStatus({ 
                success: true, 
                message: '¡Mensaje enviado con éxito! Te responderé pronto.' 
            });
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            setLoading(false);
            setStatus({ 
                success: false, 
                message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.' 
            });
            console.error('EmailJS error:', error);
        });
    };

    return (
        <div id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Mantengámonos en contacto"
                    sub="📬 Vamos a conectarnos y colaborar"
                />

                <div className="mt-10">
                    <p className="text-center max-w-2xl mx-auto mb-8">
                        Siempre estoy abierto a nuevas oportunidades, colaboraciones, y proyectos interesantes.
                        ¡No dudes en contactarme si tienes alguna pregunta o si solo quieres saludar!
                    </p>

                    <div className="grid-12-cols">
                        {/* Contact Form - Left Side (7 columns) */}
                        <div className="xl:col-span-5 col-span-12">
                            <div className="card-border p-6 w-full">
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            placeholder="Tu nombre"
                                            className="mt-1"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            placeholder="Tu dirección de email"
                                            className="mt-1"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message">Comentario</label>
                                        <textarea 
                                            id="message" 
                                            name="message"
                                            rows="5" 
                                            placeholder="Tu mensaje"
                                            className="mt-1"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {status.message && (
                                        <div className={`mb-4 p-3 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {status.message}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="cta-wrapper w-full"
                                        disabled={loading}
                                    >
                                        <div className="cta-button group">
                                            <div className="bg-circle"></div>
                                            <p className="text">{loading ? 'Enviando...' : 'Enviar Comentario'}</p>
                                            <div className="arrow-wrapper">
                                                <img src="/images/arrow-down.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </button>
                                </form>

                                <div className="mt-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold">Email:</span>
                                        <a href="mailto:adrianricardo.gm@gmail.com" className="text-blue-500 hover:underline">
                                            adrianricardo.gm@gmail.com
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold">GitHub:</span>
                                        <a href="https://github.com/Ikeel04" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            github.com/Ikeel04
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3D Experience - Right Side (5 columns) */}
                        <div className="xl:col-span-7 col-span-12 xl:mt-0 mt-10">
                            <div className="card-border w-full h-full min-h-[500px] bg-[#f5e1c9]
                            hover:cursor-grab rounded-3xl overflow-hidden">
                                <ContactExperience />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
