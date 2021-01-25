import React from 'react'
import {DOMAIN_URL} from '../../../http'
import ButtonBack from '../buttons/ButtonBack'

const Error = ({status}) => {

    const switchStatus = () => {
        switch (status) {
            case 405 : 
                return { message : "Vous n'êtes pas autorisé à voir cette page", status : "Erreur 405" }
            case 500 :
                return {message : "Une erreur est survenue avec le serveur.", status : "Erreur 500" }
            case 404 :
                return { message : "La page demandée est introuvable.", status: "Erreur 404"}
            case 400 :
                return {message : "Erreur dans la requête", status: "Erreur 400"}
            default :
                return {message : "Erreur", status: "Erreur"}
        }
    }

    return (
        <section className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100%"}}>
            {switchStatus && 
             <div className="card align-items-center justify-content-stretch p-5 h-100 ">
                <div className="card-header d-flex flex-column align-items-center h-50">
                    <figure style={{width:"100px", height:"100px"}}>
                        <img src={`${DOMAIN_URL}/upload/logo_cjf_tennis.jpg`} alt="logocjf" className="w-100 h-100" />
                    </figure>
                    <h1>{switchStatus().status}</h1>
                </div>
                <div className="card-body d-flex flex-column align-items-center border-bottom">
                    <h2 className="text-center">{switchStatus().message}</h2>
                    <ButtonBack class="justify-content-center mt-3" />
                </div>
             </div>
            }
        </section>
    )
}

export default Error
