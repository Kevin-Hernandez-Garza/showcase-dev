import React from 'react';
import {
    ContactContainer,
    ContactWrapper
} from './ContactElements';
import { FaLinkedin, FaStackOverflow, FaGithub, FaFilePdf, FaPhone } from 'react-icons/fa';
import { IoMdMailUnread } from 'react-icons/io'; 

const Contact = () => {
  return <>
    <ContactContainer>
        <ContactWrapper>
        <div className="card">
            <div className="card-header">
            Let's Chat
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href='https://www.linkedin.com/in/kevin-hernandez-garza/' target='_blank' rel='noreferrer'>< FaLinkedin /></a></li>
            <li className="list-group-item"><a href='https://stackoverflow.com/users/15588244/kevin-hernandez' target='_blank' rel='noreferrer'>< FaStackOverflow /></a></li>
            <li className="list-group-item"><a href='https://github.com/Kevin-Hernandez-Garza' target='_blank' rel='noreferrer'>< FaGithub /></a></li>
            <li className="list-group-item"><a href="tel:+5129214359">< FaPhone /></a></li>
            <li className="list-group-item"><a href='mailto:kev.hernandezgarza@gmail.com' target='_blank' rel='noreferrer'>< IoMdMailUnread /></a></li>
            <li className="list-group-item"><a href='https://docs.google.com/document/d/1MwDGSSuVS63MV-Dx-smcoRNjM5kvXt2k5-k2cQy3KZ8/edit?usp=sharing' target='_blank' rel='noreferrer'>< FaFilePdf /></a></li>
            </ul>
        </div>
        </ContactWrapper>
    </ContactContainer>
  </>;
};

export default Contact;