import Axios from 'axios';
import {BACK_URL} from '../http';

const upload = async (files) => {
    const formData = new FormData();
    formData.append('file', files);
    try {
        const res = await Axios.post(`${BACK_URL}/upload`, formData, {
            headers: {
            'Content-Type' : 'multipart/form-data'
            }
        });
        return res.data;
    }
    catch(err){
        console.log(err);
        if(err.response.status === 500){
            return {errorMessage : "Un problème est survenue avec le serveur. Veuilez réessayer plus tard"}
        }else{
            return {errorMessage : "Aucun fichier sélectionné"};
        }
    }
}

export default {upload}