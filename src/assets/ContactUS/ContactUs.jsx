import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(refForm);

        const serviceId = "service_vvekqyu";
        const templateId = "template_8zxccrf";
        const apiKey = "6yDPy5LQwJnGxWGss";
        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error));
    }

    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className='header-contact'></div>
            <h2>Contacto</h2>
            <p>Por favor, completa este formulario</p>
            <button className='btn-send' type="submit">Enviar</button>
            <fieldset className='field-name'>
                <label className='symbol-required name' htmlFor="username">Nombre:</label>
                <input name='username' type="text" placeholder='Ej: Alejo Osorio' required />
            </fieldset>
        </form>
    )
}
