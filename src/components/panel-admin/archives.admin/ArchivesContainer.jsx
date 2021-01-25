import React from 'react'
import './archives.admin.css'

const ArchivesContainer = ({title, children}) => {
    return (
        <div className="archives-container">
            <h2 className="pl-3">{title}</h2>
            {children}
        </div>
    )
}

export default ArchivesContainer
