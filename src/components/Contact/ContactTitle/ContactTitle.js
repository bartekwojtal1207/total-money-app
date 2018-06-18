import React, { Component } from 'react';

const ContactTitle = (props) => {
    return (
        <div>
            <h3 className="contact__title">{props.children}</h3>
            <span className="contact__subtitle">{props.subtitle}</span>
        </div>)
};

export default ContactTitle;