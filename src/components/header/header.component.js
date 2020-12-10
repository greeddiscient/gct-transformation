import React from 'react'

import './header.styles.css'
import telkomlogo from '../../img/telkomlogo.png'
import gctlogo from '../../img/gctlogo.png'

export const Header=()=>{
    return(
        <div className="header">
            <div className="logos">
                <img className="telkom-logo" src={telkomlogo} alt="Telkom"></img>
                <img className="gct-logo" src = {gctlogo} alt="GCT"></img>
            </div>

            <h1 className="title ">Transformation Dashboard</h1>
            <h1 className ="account">Hi Novriwan</h1>
        </div>
        
    )
}