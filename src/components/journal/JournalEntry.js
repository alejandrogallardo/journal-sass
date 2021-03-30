import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA13316_ip.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">
                    jkajsdlfkjalks kfaj sdfjakjsdlfkj a sf jaklsdjflkjasldkf ajsdkfjalksjd fa jdfkjaskldfj;lkaj
                </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
