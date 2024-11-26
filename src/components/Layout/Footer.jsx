import React from 'react'

function Footer() {
  return (
    <footer className='footer section_'>
        <div className='container'>
            <ul className='foot_list'>
                <li><a href='#'>Legal</a></li>
                <li><a href='#'>Privacy</a></li>
                <li><a href='#'>Accessibility</a></li>
            </ul>
            <p>
            &#169; 2024 KPMG LLP a UK limited liability partnership and a member firm of the KPMG global organisation of independent member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved. <br />
            For more detail about the structure of the KPMG global organisation please visit <a href='#'>  https://kpmg.com/governance.</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer