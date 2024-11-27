import React, { useEffect, useState } from 'react'
import { useAuth } from '../../features/Auth/AuthProvider'

function getInitials(name) {
    const nameArray = name.split(' '); // Split the name by space
    const firstName = nameArray[0];
    const lastName = nameArray[1];

    // Get the first letter of the first and last name
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    return initials;
}


export default function NavbarComponent() {

    const { state } = useAuth();
    const [initials, SetInitials] = useState('')
    useEffect(() => {
        const initials = getInitials(state.user.displayName);
        SetInitials(initials);

    }, [state])
    return (
        <div className='side-nav-bar'>
            <div className='profile'>
                {initials}
            </div>
            <div className='menu'>
                <div>
                    <a href='#/'>
                        <img src={import.meta.env.BASE_URL + "images/home-icon.svg"} alt="" width="auto" />
                    </a>
                </div>
                <div>
                    <a href='#/engagement'>
                        <img src={import.meta.env.BASE_URL + "images/dash-icon.svg"} alt="" width="auto" />
                    </a>
                </div>
                <div>
                    <a>
                        <img src={import.meta.env.BASE_URL + "images/insights-dash-icon.svg"} alt="" width="auto" />
                    </a>
                </div>
            </div>
        </div>
    )
}
