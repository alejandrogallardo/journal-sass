import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NoteAppBar />

            <div className="notes__content">
                
                <input 
                    type="text"
                    placeholder="Some aweson title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>
                
                <div className="notes__image">
                    <img 
                        src="http://images.fanpop.com/images/image_uploads/Hubble-Wallpaper-space-647495_1600_1200.jpg"
                        alt="Imagen Genial"
                    />
                </div>
            </div>

        </div>
    )
}
