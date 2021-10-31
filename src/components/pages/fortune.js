import React from "react";

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
        fortune: ''
    }
}

componentDidMount() {
    fetch("https://backend-edwin.herokuapp.com/item", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        fortunes: data.fortune,  
        error: false
      }, this.getFortune)
    })
    .catch(error => {
        console.log("Error fetching fortune ", error)
        this.setState({
            loading: false,
            error: true
        })
    })
  }
getFortune = () =>  {
    let rand = Math.floor(Math.random() * (this.state.fortunes.length - 1) + 0)
    console.log(rand);
    this.setState({
        fortune: this.state.fortunes[rand]
    })
}



render() {
    return (
        <div className="test">
            <div className="center">
                <button onClick={this.getFortune}>Your Fortune</button>
            </div>
            <div className="center">
                <h4>{this.state.fortune}</h4>
            </div>
        </div> 
       
    )
}
}
export default Fortune