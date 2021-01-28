import {useState, useEffect} from 'react';
import BannerVideoAdmin from '../../../components/panel-admin/banner-video.admin/BannerVideoAdmin';
import IconsInfosAdmin from '../../../components/panel-admin/icons-info.admin/IconsInfoAdmin';
import ContactAndOpeningAdmin from '../../../components/panel-admin/access-openings.admin/ContactAndOpeningAdmin';
import AccessAdmin from '../../../components/panel-admin/access-openings.admin/AccessAdmin'
import ArticlesList from '../../../components/panel-admin/articles.admin/ArticlesList';
import Axios from 'axios'
import {BACK_URL} from '../../../http';
import _ from 'lodash';

const HomeAdminPage = (props) => {
    
    const [clubArticles, setClubArticles] = useState([])
    const [clubIsLoading, setClubIsLoading] = useState(true)
    const [sportArticles, setSportArticles] = useState([])
    const [sportIsLoading, setSportIsLoading] = useState(true)
    const [pressArticles, setPressArticles] = useState([])
    const [pressIsLoading, setPressIsLoading] = useState(true)

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/club`)
             .then(res => {
                setClubArticles(res.data.filter(data=> data.is_archived === 0));
                setClubIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [clubArticles])

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/sport`)
             .then(res => {
                setSportArticles(res.data.filter(data=> data.is_archived === 0));
                setSportIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [sportArticles])

    useEffect(() => {
        Axios.get(`${BACK_URL}/articles/press`)
             .then(res => {
                setPressArticles(res.data.filter(data=> data.is_archived === 0));
                setPressIsLoading(false);
                })
             .catch(err => console.log(err));
    }, [pressArticles])
    
    const components = [
        <ArticlesList 
            title="Vie du Club" 
            route="/articles/club"
            category="club"
            datas={_.orderBy(clubArticles, ['modified_at'], ['desc'])} 
            loading={clubIsLoading} 
            classCardBody="pt-0" 
            classBtnCreate="btn-sm" 
        />,
        <ArticlesList 
            title="Vie Sportive" 
            route="/articles/sport" 
            category="sport"
            datas={_.orderBy(sportArticles, ['modified_at'], ['desc'])} 
            loading={sportIsLoading} 
            classCardBody="pt-0" 
            classBtnCreate="btn-sm"  
        />,
        <ArticlesList 
            title="Presse" 
            route="/articles/press" 
            category="press"
            datas={_.orderBy(pressArticles, ['modified_at'], ['desc'])} 
            loading={pressIsLoading} 
            classCardBody="pt-0" 
            classBtnCreate="btn-sm" 
        />,
        <ContactAndOpeningAdmin />,
        <BannerVideoAdmin />,
        <IconsInfosAdmin />,
        <AccessAdmin />,
    ]
    
    return (
        <main className={"home-admin container-fluid px-0 px-sm-2" + props.className }>
            <h1 className="ml-4 mt-2 pl-sm-3">Général</h1>
            <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                {components.map((component, index) => 
                    <li className={"list-group-item m-1 w-100 home-admin" + index } key={index}>{component}</li>
                )}
            </ul>
        </main>
    )
}

export default HomeAdminPage;
