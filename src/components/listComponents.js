
import React from 'react';
import './list.css';
class LsComp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    upName(){
        this.setState({
            date: "雷霆沙赞"
          });
        console.log(this.state.date)
    }
    componentWillMount(){
        setInterval(()=>{
            this.setState({
                date: new Date()
              });
        },1000)
    }
    render(){
        return (
            <div>
                <h1>oooooook!</h1>
                <h2 onClick={this.upName.bind(this)}>{ this.props.userInfo.name}</h2>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
                <HelloMessage names={this.state.date}/>
                <div className="div1">
                    <div className="flex-div">
                        <div className="item1">
                            123
                        </div>
                        <div className="item1">
                            123
                        </div>
                        <div className="item1">
                            123
                        </div>
                        <div className="item1">
                            123
                        </div>
                        <div className="item1">
                            123
                        </div>
                        <div className="item1">
                            123
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LsComp;


function HelloMessage(props) {
    return <h1>Hello 222</h1>;
}