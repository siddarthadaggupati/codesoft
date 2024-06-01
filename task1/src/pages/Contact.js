import React, { useEffect } from 'react';
function Contact() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id ='contact'>
        <div class="visme_d" data-title="Clean Contact Form" data-url="x4vvyymd-clean-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="72248">
        </div>
        </div>
        );
}

export default Contact;
