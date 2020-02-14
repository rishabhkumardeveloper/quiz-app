import React,{Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
class Play extends Component{
    constructor(props){
        super(props)
        this.state ={
            counter: 0
        }
    }

    increaseCount =() =>{
        this.setState({
            counter: 5
        });
    };
    render(){
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
    
            <div className="questions">
                <h1>Quiz Mode</h1>
                <div className="lifeline-container">
                    <p>
                        Lifeline:2
                    </p>
                
                <p>
                       <span className="lifeline"> Fifty Fifty: 5</span>
                </p>
                </div>
                <div>
                    <p className="page-time-element">
                        <span className="left" > 1 of 15</span>
                        <span className="right">2:15</span>
                    </p>
                </div>
            <h5>Google was founded in what year? </h5>
            
            <div className="options-container">
                <p className="option">1997</p>
                <p className="option">1998</p>
            </div>
            <div className="options-container">
                <p className="option">1990</p>
                <p className="option">2000</p>
            </div>
            <div className="button-container">
                <button>Previous</button>
                <button>Next</button>
                <button>Quit</button>
            </div>
            </div>
            </Fragment>
        );
    }
}

export default Play;