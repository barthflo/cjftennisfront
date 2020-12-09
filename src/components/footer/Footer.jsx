import "./Footer.css";
import { SiFacebook } from 'react-icons/si';

export default function Footer() {
    return(
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-club">
                    <h4>CJF Tennis</h4>
                    <div className="footer-contact">
                        <p>Complexe Sportif de la Forêt</p>
                        <p className="adress">Rue de la Tuilerie 45770 SARAN</p>
                        <p>02 38 73 62 61</p>
                        <p>cjf.tennis@wanadoo.fr</p>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>En savoir plus</h4>
                    <div className="links">
                        <a href="https://comite.fft.fr/loiret/loiret_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1" target="blank">Comité du Loiret</a>
                        <a href="https://ligue.fft.fr/centre/" target="blank">Ligue Centre Val de Loire</a>
                        <a href="http://openparatennisduloiret.fr/" target="blank">Open Paratennis du Loiret</a>
                        <a href="https://tenup.fft.fr/user" target="blank">Tenup</a>
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