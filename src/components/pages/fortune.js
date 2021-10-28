import React from "react";
import {Link} from "react-router-dom"

class Fortune extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        fortunes: [
            "An exciting opporunity lies ahead",
            "A long time friend will brirng wise advice in the coming week",
            "You will find great fortunes in unexpected places",
            "Never give up... Unless you want to thats cool too",
            "111",
            "222",
            "333",
            "444",
            "Maybe a nap is what you need",
            "Don't Text Your EX!"
        ],
        fortune: ""
    }
}

componentDidMount() {
    this.getFortune();
}

getFortune = () =>  {
    let rand = Math.floor(Math.random() * (this.state.fortunes.length) + 0)
    console.log(rand);
    this.setState({
        fortune: this.state.fortunes[rand]
    })
}



render() {
    return (
        <body>
        <div className="home-buttons-wrapper">
            
            <button onClick={this.getFortune}>Your Fortune</button>
            
            
        </div>
        <h5>{this.state.fortune}</h5>
        </body>
    )
}
}

console.log('getFortune');

export default Fortune; 