import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import "@fortawesome/fontawesome-free/css/all.min.css";

import emailjs from 'emailjs-com';

import '../styles/Contact.css';

const EmailForm: React.FC = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        linkedin_profile: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAIL_JS_USER_NAME,
            import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
            formData,
            import.meta.env.VITE_EMAIL_JS_PASSWORD
        ).then(() => {
            alert('Email sent successfully!');
        }, () => {
            alert('Failed to send email. Please try again.');
        });

        setFormData({
            user_name: '',
            user_email: '',
            linkedin_profile: '',
            message: ''
        });
    };

    return (
        <div style={{ padding: '120px' }}>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: 'black' }}>Lets connect !</h1>
                <div>
                    <label>Your good name, please ?</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Its good if you share your email here -</label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Lets connect on linkedin, your linkedin handle ?</label>
                    <input
                        type="url"
                        name="linkedin_profile"
                        value={formData.linkedin_profile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Do you want to leave some message to me ?</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Email</button>
            </form>
            <br />
            <div style={{ textAlign: 'center' }}>Meanwhile, lets stay in touch here -
                <br />
                <u><a style={{ color: 'blue'}}>smsstemburu@gmail.com</a></u>
                <br />
                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/sai-monica-s-73a70b134/'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
            </div>
        </div>
    );
};

export default EmailForm;
