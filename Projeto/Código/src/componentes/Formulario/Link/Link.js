import React from 'react'
import { Link as RotaLink } from '../../../contextos/Roteamento/Roteamento'
import './Link.css'


function Link(props) {
    return (
        <RotaLink className="link" para={props.para}>
            {props.children}
        </RotaLink>
    );
}

export default Link