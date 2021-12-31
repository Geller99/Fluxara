import React from 'react';
import '../index.css';
import settingsIcon from '../helpers/icons/settings.png';


function Settings() {
    
    return (
        <div className="tab settings">
            <a href='/' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <img src={settingsIcon} alt='' className="settingsIcon" />
            </a>
        </div>
    )
}

export default Settings
