import React,{useState} from 'react'

import './sidebar.styles.css'

export default class Sidebar extends React.Component{
    constructor(){
        super()
        this.state={
            isCFU: false,
            isFU: false
        }
    }
    handleCFUDropdown=()=>{
        this.setState({isCFU: !this.state.isCFU})
    }
    handleFUDropdown=()=>{
        this.setState({isFU: !this.state.isFU})
    }
    render(){
        return(
            <div className="sidebar">
                <div className="period">
                    <h1 className="period-header">Period:</h1>
                    <select>
                        <option value="Oct 2020">Oct 2020</option>
                    </select>
                </div>        
                <div className = "group-transformation">
                    Group Transformation
                </div>
                <div class="dropdown" onClick={this.handleCFUDropdown}>
                    CFU Transformation
                </div>
                {this.state.isCFU ? <div>
                    <ul>
                        <li>MOB</li>
                        <li>CONS</li>
                        <li>ENT</li>
                        <li>WIB</li>
                    </ul>
                </div> : <div></div>}
                <div class="dropdown" onClick={this.handleFUDropdown}>
                    FU Transformation
                </div>
                {this.state.isFU ? <div>
                    <ul>
                        <li>DB</li>
                        <li>NITS</li>
                        <li>FIN</li>
                        <li>HCM</li>
                        <li>SP</li>
                        <li>GCT</li>
                        <li>CorSec</li>
                    </ul>
                </div> : <div></div>}
            </div>
            
        )
    }
    
}