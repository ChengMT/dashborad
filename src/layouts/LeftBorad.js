import React,{Component} from 'react';
import './LeftBorad.css';

class Leftborad extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className='left-borad'>
                <div className='display'>
                    <img src={require("./logo.jpg")} alt='logo' width='40px' height='40px'/>
                    <span className='left-display'>display borad</span>
                </div>
                
                
            </div>
        );
    }
}

export default Leftborad;