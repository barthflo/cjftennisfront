import './AccessClub.css';
import SectionTitle from '../section-title/SectionTitle';

export default function AccessClub(){
    return(
        <section className="access-container">
            <SectionTitle title="Nous rejoindre" color="white" />
            <div className="access-content">
                <div className="access-info">
                    <div className="access-adress">
                        <p>Complexe Sportif de la Forêt</p>
                        <p>Rue de la Tuilerie 45770 SARAN</p>
                        <p>02 38 73 62 61</p>
                        <p>cjf.tennis@wanadoo.fr</p>
                    </div>
                    <div className="access-time">
                        <p>Du Lundi au Vendredi : de 9h00 à 22h00</p>
                        <p>Du Samedi au Dimanche : de 9h00 à 20h00</p>
                    </div>
                    <div className="access-travel">
                        <p>Accès bus et/ou voiture</p>
                    </div>
                </div>

                <div class="map-card">
                    <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=1.890555024147034%2C47.95770754779015%2C1.8976360559463503%2C47.96112384332174&amp;layer=mapnik&amp;marker=47.95941751995403%2C1.894095540046692"/>
                    <small>
                        <a href="https://www.openstreetmap.org/?mlat=47.95942&amp;mlon=1.89410#map=18/47.95942/1.89410" target="blank">
                            Afficher une carte plus grande
                        </a>
                    </small>
                </div>
            </div>
        </section>
    );
}