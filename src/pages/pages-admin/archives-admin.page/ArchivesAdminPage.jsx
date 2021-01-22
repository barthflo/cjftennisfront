import {useState, useEffect, Fragment} from 'react';
import Axios from 'axios'
import {BACK_URL} from '../../../http';
import ArchivesContainer from '../../../components/panel-admin/archives.admin/ArchivesContainer'
import ArticlesList from '../../../components/panel-admin/articles.admin/ArticlesList'
import _ from 'lodash'

const ArchivesAdminPage = (props) => {
    const [clubArticles, setClubArticles] = useState([])
    const [clubIsLoading, setClubIsLoading] = useState(true)
    const [sportArticles, setSportArticles] = useState([])
    const [sportIsLoading, setSportIsLoading] = useState(true)
    const [pressArticles, setPressArticles] = useState([])
    const [pressIsLoading, setPressIsLoading] = useState(true)
    const [galleries, setGalleries] = useState([])
    const [galleriesLoading, setGalleriesLoading] = useState(true);

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/club`)
             .then(res => {
                setClubArticles(res.data.filter(data=> data.is_archived === 1)
                                        .filter(data=>data.modified_at))
                setClubIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [clubArticles])

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/sport`)
             .then(res => {
                setSportArticles(res.data.filter(data=> data.is_archived === 1)
                                        .filter(data=>data.modified_at))
                setSportIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [sportArticles])

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/press`)
             .then(res => {
                setPressArticles(res.data.filter(data=> data.is_archived === 1)
                                        .filter(data=>data.modified_at))
                setPressIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [pressArticles])

    useEffect(() => {
        Axios.get(`${BACK_URL}/club/galleries`)
             .then(res => {
                setGalleries(res.data.filter(data=> data.is_archived === 1)
                                        .filter(data=>data.modified_at))
                setGalleriesLoading(false);
                })
             .catch(err => console.log(err));
    }, [galleries])

    const components=[
        <ArchivesContainer title="Articles" children={
            <Fragment>
                <ArticlesList route="/articles/club/" redirect="/admin/articles/edit/" title="Club" datas={_.orderBy(clubArticles, ['modified_at'], ['desc'])} loading={clubIsLoading} classCardHeader="py-0"/>
                <ArticlesList route="/articles/sport/" redirect="/admin/articles/edit/" title="Sport" datas={_.orderBy(sportArticles, ['modified_at'], ['desc'])} loading={sportIsLoading} classCardHeader="py-0"/>
                <ArticlesList route="/articles/press/" redirect="/admin/articles/edit/" title="Presse" datas={_.orderBy(pressArticles, ['modified_at'], ['desc'])} loading={pressIsLoading} classCardHeader="py-0"/>
            </Fragment>} 
        />,
        <ArchivesContainer title= "Galeries" children={
            <ArticlesList route="/club/galleries/" redirect="/admin/galleries/edit/" datas={_.orderBy(galleries, ['modified_at'], ['desc'])} loading={galleriesLoading} classCardHeader="py-0" />
        } />

    ]

    return (
        <main className={"archives-admin container-fluid px-0 px-sm-2" + props.className }>
            <h1 className="ml-4 mt-2 pl-sm-3">Archives</h1>
            <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                {components.map((component, index) => 
                    <li className={"list-group-item m-1 w-100 archives-admin" + index } key={index}>{component}</li>
                )}
            </ul>
        </main>
    )
}

export default ArchivesAdminPage
