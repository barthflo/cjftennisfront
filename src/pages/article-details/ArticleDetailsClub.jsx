import './ArticleDetailsClub.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BACK_URL, DOMAIN_URL } from '../../http';
import { useEffect, useState } from 'react';
import BannerPhoto from "../../components/banner-photo/BannerPhoto";
import SectionTitle from "../../components/section-title/SectionTitle";

export default function ArticleDetailsClub(){
    const params = useParams();
    const [articleClubDetails, setArticleClubDetails] = useState([]);

    useEffect(() => {
        axios
        .get(`${BACK_URL}/articles/club/${params.id}`)
        .then(res => setArticleClubDetails(res.data))
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div>
            <BannerPhoto image="https://www.bellevigny.fr/wp-content/uploads/2016/06/presse.jpg" title="Article du club" subtitle="CJF Tennis"/>
            <section className="article-club-details">
                <SectionTitle title={articleClubDetails.title} color="white" />
                <div className="article-club-info">
                    <img src={articleClubDetails.image_url} alt={articleClubDetails.title} className="article-club-image" />
                    <p className="article-club-desc">{articleClubDetails.body}</p>
                </div>
                {/* <p>{articleClubDetails.contenu_article}</p> */}
                <p className="article-club-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nulla aspernatur rerum sequi facere minima eligendi natus maiores fugiat commodi praesentium accusamus, ullam reiciendis, ab repudiandae, dicta animi dolor modi.
                    Eveniet tempore quaerat dicta itaque distinctio, ad a architecto aperiam velit numquam molestias provident. Officia aut ad deleniti quod veritatis beatae, illo recusandae dolor, tempore corporis harum ipsam itaque! Adipisci!
                    Cumque placeat excepturi repudiandae odit nobis maxime molestiae veritatis dignissimos voluptatibus ab reiciendis id odio sint ipsa esse eaque, provident laborum vitae assumenda illo veniam dolor libero laboriosam facere. Aut.
                    Atque provident dicta facere temporibus tempora voluptatibus, ab incidunt omnis minima nihil iusto qui itaque neque explicabo nobis voluptate fuga. Nisi quidem non eum corrupti neque velit veniam voluptates illo.
                    Autem voluptates unde quod commodi, deserunt architecto iste, laudantium maiores numquam nisi id omnis quo, eveniet praesentium fuga laboriosam impedit aliquid cum expedita libero nemo necessitatibus mollitia dolorem. Laborum, impedit!
                    Dolores officia impedit cum quidem iure maiores eaque optio quo sed saepe unde eos incidunt repudiandae ipsum nisi tenetur dignissimos, perferendis velit deserunt rerum ratione? Consequuntur deserunt provident aliquid eius.
                    Et numquam sed veniam. Harum dolores eum sit id distinctio optio incidunt magni ut modi? Ipsum debitis iure nesciunt deserunt nam ratione, nobis iste inventore? Consequuntur similique omnis dicta velit!
                    Dolore possimus, libero quam rerum recusandae, accusamus accusantium id rem, at sapiente molestias distinctio repellat ratione alias! Minus aliquid repudiandae officiis provident vel, nesciunt impedit cupiditate odio fuga expedita atque.
                    Laborum, officia. Neque modi architecto quis adipisci suscipit animi ad at quisquam laudantium repellat nihil eos praesentium, voluptates, fugiat dolorem rem ullam ipsum aliquam non delectus! Fugiat voluptatem quas omnis.
                    Distinctio dolorum voluptatibus nulla fugit cumque odio quas ad quibusdam blanditiis excepturi dolore at maiores perferendis eaque, veritatis fugiat quasi. Sapiente quasi iusto totam, nesciunt molestiae tempora quidem doloribus quis?
                    Animi consequuntur atque reiciendis quod ex eveniet id recusandae doloremque asperiores assumenda labore quae expedita accusamus consectetur corrupti nulla itaque, modi incidunt officia minima sint harum ut obcaecati. Officia, quibusdam?
                    Ea aliquid ut error unde sed beatae omnis accusamus ex quia cum magni assumenda sapiente similique tempore ratione doloremque ullam, dolore quam, alias ducimus enim optio dicta quo doloribus? Cupiditate.
                </p>
            </section>
        </div>
    );
}