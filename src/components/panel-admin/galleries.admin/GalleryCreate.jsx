import React from 'react'
import ButtonBack from '../buttons/ButtonBack'
import ButtonSave from '../buttons/ButtonSave'
import GalleryForm from './GalleryForm';

const GalleryCreate = () => {


    return (
        <section>
            <h1 className="ml-4 mt-2 mb-4 pl-3">Nouvel Album</h1>
            <div className="card py-3 px-4">
                <div className="card-body">
                    <GalleryForm id={"CreateGallery"}/>
                </div>
                <div className="card-footer px-0 d-flex flex-row-reverse">
                    <ButtonSave form={"CreateGallery"} margin="ml-1"/>
                    <ButtonBack  margin="mr-1"/>
                </div>
            </div>
        </section>
    )
}

export default GalleryCreate
