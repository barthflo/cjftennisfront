import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../../http';
import UpdateCard from '../../../components/panel-admin/update-card.admin/UpdateCard';

const UpdatePage = (props) => {
    // const { id } = useParams();
    // const [data, setData] = useState([]);
    // const [ isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = () => {
    //         Axios.get(`${BACK_URL}/home/intro/${id}`)
    //              .then(res => {
    //                  if(data.length === 0){
    //                     setData(res.data);
    //                     setIsLoading(false);
    //                  }
    //              });
    //     }
    //     fetchData();
    // }, [data]);
    // console.log(data);
    return (
        <main className={"update-admin" + (props.close ? " closed" : " opened")}>
            {/* {isLoading ? "Chargement en cours..."
            : */}
            <UpdateCard url={DOMAIN_URL} className={props.close ? " closed" : " opened"}/>
            {/* } */}
        </main>
    )
}

export default UpdatePage
