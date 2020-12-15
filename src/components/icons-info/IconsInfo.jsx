import './IconsInfo.css';
import { AiOutlineIdcard } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { CgTennis } from 'react-icons/cg';
 
export default function IconsInfo() {
    return(
        <section className="icons-info-container">
            <div className="icons-info-content">
                <div className="icon-info">
                    <FiClock className="icon" />
                    <p className="info">Depuis 1963</p>
                </div>
                <div className="icon-info">
                    <AiOutlineIdcard className="icon" />
                    <p className="info">+ de 350 licenciés</p>
                </div>
                <div className="icon-info">
                    <CgTennis className="icon" />
                    <p className="info">Des cours accessibles à tous</p>
                </div>
            </div>
        </section>
    );
}