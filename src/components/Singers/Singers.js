import React from 'react';
import './Singers.css';

// fontawesome icons packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMusic} from '@fortawesome/free-solid-svg-icons';


const Singers = (props) => {
    // destructuring
    const {image,name,country,profession,age,earns}=props.singer;

    // fontawesome icons
    const element = <FontAwesomeIcon icon={faMusic} />
    const icon = <FontAwesomeIcon icon={faFacebook} size="2x"/>

    // displaying singers information
    return (
        <div className="singer-container">
            {/* singer picture */}
           <div className="image-div">
                <img className="image-size" src={image} alt="" />
           </div>

           {/* singer details-five data */}
           <div className="singer-details">
                <h5>Singer: {name}</h5>
                <h5>Country: {country}</h5>
                <h5>Profession: {profession}</h5>
                <h5>Age: {age}</h5>
                <h5>Net Worth: $ {earns}</h5>
                <h6>Follow on {icon}</h6>

            {/* functional button */}
                <button onClick={() => props.addSingers(props.singer)}className="btn-select">{element} Select</button>
           </div>  
        </div>
    );
};

export default Singers;