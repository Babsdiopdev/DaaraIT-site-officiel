import React from 'react';
import './partenaires.css'
//import Huawei from '../../images/Huawei-logo.png'
import logoDit from '../../images/logo-dit.png'

function Partenaires(props) {
    return (
        <div className='Partenaires'>
            <h3 className='titreP'> Ils nous ont fait confiance </h3>
            <div className='logos'>
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
                <img className='logo' src={logoDit}  alt='logo Huawei' />
            </div>

            
        </div>
    );
}

export default Partenaires;