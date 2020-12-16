import './AccessClub.css';
import SectionTitle from '../section-title/SectionTitle';

export default function AccessClub(){
    return(
        <section className="access-container">
            <SectionTitle title="Nous rejoindre" color="white" />
            <div className="access-content">
                <div className="access-info">
                    <div className="access-adress">
                        <div className="address">
                            <p><span className="bold-text">Complexe Sportif de la Forêt</span></p>
                            <p><span className="bold-text">Rue de la Tuilerie 45770 SARAN</span></p>
                        </div>
                        <p>02 38 73 62 61</p>
                        <p>cjf.tennis@wanadoo.fr</p>
                    </div>
                    <div className="access-time">
                        <p>Du Lundi au Vendredi : de 9h00 à 22h00</p>
                        <p>Du Samedi au Dimanche : de 9h00 à 20h00</p>
                    </div>
                    <div className="access-travel">
                        <div className="bus">
                            <p><span className="bold-text">Bus 6 : arrêt Debacq (Saran)</span></p> 
                            <p>14 minutes à partir de l'arrêt Mairie de Fleury, direction Les Montaubans</p>
                        </div>
                        <div className="bus">
                            <p><span className="bold-text">Bus 18 : arrêt Debacq (Saran)</span></p>
                            <p>25 minutes à partir de l'arrêt Gare d'Orléans C, direction Cap Saran</p>
                        </div>
                    </div>
                </div>

                <div className="map-card">
                    <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=1.890555024147034%2C47.95770754779015%2C1.8976360559463503%2C47.96112384332174&amp;layer=mapnik&amp;marker=47.95941751995403%2C1.894095540046692"/>
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