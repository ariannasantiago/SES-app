import Reach from 'react';
import './Footer.css';

function Footer(props) {
    return(
        <div className="footer">
            {props.title} | 2021<br></br> 
            Created by Arianna Santiago for the Capital One SES Coding Challenge
        </div>
    )
}

export default Footer;