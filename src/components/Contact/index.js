import React from 'react';
import {
    ContactContainer,
    ContactWrapper
} from './ContactElements';

const Contact = () => {
  return <>
    <ContactContainer>
        <ContactWrapper>
        <div className="card">
            <div className="card-header">
            Let's Chat
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">LinkedIn</li>
            <li className="list-group-item">StackOverflow</li>
            <li className="list-group-item">GitHub</li>
            <li className="list-group-item">Phone</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">Resume</li>
            </ul>
        </div>
        </ContactWrapper>
    </ContactContainer>
  </>;
};

export default Contact;