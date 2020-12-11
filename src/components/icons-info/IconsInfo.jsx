import './IconsInfo.css';
import { AiOutlineClockCircle } from 'react-icons/ai';
 
export default function IconsInfo() {
    return(
        <section className="icons-info-container">
            <div className="icons-info-content">
                <div className="icon-info">
                    <AiOutlineClockCircle className="icon" />
                    <p className="info">Depuis 1963</p>
                </div>
                <div className="icon-info">
                    <AiOutlineClockCircle className="icon" />
                    <p className="info">+ de 350 licenciés</p>
                </div>
                <div className="icon-info">
                    <AiOutlineClockCircle className="icon" />
                    <p className="info">Des cours accessibles à tous</p>
                </div>
            </div>
        </section>
    );
}