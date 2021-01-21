import './InfrastructuresList.css';
import axios from 'axios';
import { BACK_URL } from '../../http';
import { useEffect, useState } from 'react';
import SectionTitle from '../../components/section-title/SectionTitle';
import InfrastructureCard from './InfrastructureCard';

export default function InfrastructuresList() {
    const [infrastructures, setInfrastructures] = useState([]);
    const [isLoadingInf, setLoadingInf] = useState(false);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/club/infrastructures`)
        .then(res => setInfrastructures(res.data));
        setLoadingInf(true);
    }, []);

    return isLoadingInf ?(
        <section className="infrastructure-list">
            <SectionTitle title="Nos infrastructures" color="white" />
            <div className="infrastructure-cards">
                {infrastructures.map((infrastructure, index) => (
                    <InfrastructureCard infrastructure={infrastructure} key={infrastructure.title} />
                ))}
            </div>
        </section>
    ) : null;
}