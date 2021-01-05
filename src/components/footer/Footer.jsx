import "./Footer.css";
import { SiFacebook } from 'react-icons/si';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACK_URL } from '../../http';

export default function Footer() {
    const [contact, setContact] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchContact = () => {
            axios
            .get(`${BACK_URL}/contact`)
            .then(res => {
                setContact(res.data[0]);
            })
        };
        fetchContact();
    }, [])

    useEffect(() => {
        const fetchLink = () => {
            axios
            .get(`${BACK_URL}/external_links`)
            .then(res => {
                setLinks(res.data);
            })
        };
        fetchLink();
    }, [])

    return(
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-club">
                    <h4>CJF Tennis</h4>
                    <div className="footer-contact">
                        <p>{contact.address_1}</p>
                        <p className="adress">{contact.address_2} {contact.post_code} {contact.city}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>En savoir plus</h4>
                    <div className="links">
                        {links.map((link) => (
                            <a href={link.link_url} target="blank" key={link.name}>{link.name}</a>
                        ))}
                    </div>
                </div>
                <div className="footer-social-media">
                    <a href="https://fr-fr.facebook.com/pages/category/Tennis-Court/CJF-Tennis-1662005067415369/" target="blank"><SiFacebook className="logo-fb"/></a>
                </div>
            </div>
            <div className="footer-credits">
                <p>© 2020 CJF Tennis.</p><p>Made with ♥ by Wild Code School Orléans</p>
            </div>
        </footer>
    );
}