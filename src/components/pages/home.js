import React from 'react'
import { Link } from "react-router-dom"
import Fortune  from "./fortune"

export default function Home() {

  
    return (
        <div className='home-wrapper'>
            <h1>What is your fortune?</h1>
        <div className="home-buttons-wrapper">

           <Link to="fortune"> <button onClick={Fortune.getFortune}>Get Fortune</button></Link>
                <Link to="/add-item"><button>Add Fortune</button></Link>
            </div>
        </div>
    );
    componentDidMount(); {
        this.getFortune();
    }
getFortune = () =>  {
    let rand = Math.floor(Math.random() * (this.state.fortunes.length) + 0)
    console.log(rand);
    this.setState({
        fortune: this.state.fortunes[rand]
    })
}
    
}