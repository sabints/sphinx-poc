import React, { useState } from 'react'

export default function NavbarComponent() {
    const pageName = window.location.href //.split('/').pop();
    return (
        <div className='side-nav-bar'>
            <div className='profile'>
                MC
            </div> 
            <div className='menu'>
                <div>
                    <a href='#/'><i className='bi bi-house'></i></a>
                </div>
                <div>
                    <a href='#/engagement'><i className='bi bi-grid-fill'></i></a>
                </div>
                <div>
                    <a><i className='bi bi-file-text-fill'></i></a>
                </div>
            </div>
        </div>
    )
}
