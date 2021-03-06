import React, {useState, useEffect, Fragment} from 'react';
import {BACK_URL} from '../../../http';
import Axios from 'axios';
import GalleryItem from '../../../components/panel-admin/galleries.admin/GalleryItem';
import RotateLoader from 'react-spinners/RotateLoader';
import ButtonCreate from '../../../components/panel-admin/buttons/ButtonCreate';
import _ from 'lodash';

const GalleryList = () => {

    const [datas, setDatas] = useState([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [selectCategory, setSelectCategory] = useState('all')
    const categories = [
        ["all", "Toutes"],
        ["animations", "Animations"],
        ["school", "Ecole de Tennis"],
        ["team_young", "Equipes Jeunes"],
        ["team_adult", "Equipes Adultes"],
        ["paratennis", "Paratennis"],
        ["history", "Histoire du Club"]
    ]

    useEffect(() => {
        Axios.get(`${BACK_URL}/club/galleries`)
             .then(res => {
                setDatas(res.data.filter(data => data.is_archived === 0)
                                 .filter(data => (selectCategory === "all") ? data : data.category === selectCategory)
                    );
                setIsLoading(false);
             })
             .catch(err => {
                 setIsLoading(false);
                 setErrors(err);
             })
    }, [datas, selectCategory]);
    
    return (
        <Fragment>
            <h1 className="ml-4 mt-2 pl-sm-3">Vos Galeries d'Images</h1>
            {errors && <h2 className="text-center">Une erreur est survenue avec le serveur. Veuillez nous excuser pour la gêne occasionnée.</h2>}
            {isLoading ? 
            <section className="loader-container d-flex justify-content-center align-items-center" style={{minHeight:"100px"}}>
                <RotateLoader size={10} color={"#345C3E"} /> 
            </section>
            :
            <Fragment>
                <section className="mx-4 mb-4 pl-sm-3">
                    <form className="form-group mb-1">
                        <label className="d-none">Sélectionner une catégorie :</label>
                        <select className="form-control" defaultValue={selectCategory} onChange={(e) => setSelectCategory(e.target.value)}>
                            {categories.map((category, index) =>
                                <option value={category[0]} key={index}>{category[1]}</option>
                            )}
                        </select>
                    </form>
                    {datas.length === 0 ? null : 
                    <p className="font-italic pl-2 mb-1">{datas.length} {datas.length === 1 ? "gallerie" : "galleries"} en ligne</p>
                    }
                </section>
                {datas.length === 0 
                ?
                <section className="card py-3 px-4">
                    <div className="card-header d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-center">Vous n'avez pas encore de galeries...</h2>
                        <p className="font-italic mb-0 text-center">Créez une galerie maintenant!</p>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <ButtonCreate url={`/admin/galleries/create`} title="Nouvelle Galerie"/>
                    </div>
                </section>
                :
                <section>
                    <div className="list-group m-1 p-3 bg-light d-flex flex-column justify-content-center align-items-center">
                        <p className="font-italic mb-2 mb-sm-1 text-center">Ajoutez une nouvelle galerie!</p>
                        <ButtonCreate url={`/admin/galleries/create`} title="Nouvelle Galerie" class="btn-sm"/>
                    </div>
                    <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                        {datas.length!== 0 && 
                            _.orderBy(datas, ['modified_at'], ['desc'])
                                 .map((data, index) => 
                            <li className={"list-group-item m-1 w-100 gallery-admin" + index } key={index}><GalleryItem datas={data}/></li>
                        )}
                    </ul>
                </section>
                }
            </Fragment>
            }
        </Fragment>
    )
}

export default GalleryList
