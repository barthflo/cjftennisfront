import React from 'react'
import ButtonBack from '../buttons/ButtonBack'
import ButtonSave from '../buttons/ButtonSave'
import GalleryCreateForm from './GalleryCreateForm';


const GalleryCreate = () => {

    return (
        <section>
            <h1 className="ml-4 mt-2 mb-4 pl-sm-3">Nouvelle Gallerie</h1>
            <div className="card py-3 px-sm-4">
                <div className="card-body">
                    <GalleryCreateForm formId={"CreateGallery"}/>
                    
                </div>
                <div className="card-footer px-sm-0 d-flex flex-column flex-sm-row-reverse">
                    <ButtonSave form={"CreateGallery"} class=" mb-1 mb-sm-0 ml-sm-1 justify-content-center"/>
                    <ButtonBack  class="mr-sm-1 justify-content-center"/>
                </div>
            </div>
        </section>
    )
}

export default GalleryCreate
