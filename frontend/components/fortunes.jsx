import React from 'react';
import {Link} from 'react-router-dom';

class FortuneShow extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      cookie: false,
    };
    this.anotherFortune = this.anotherFortune.bind(this);
    this.cookiesmash = this.cookiesmash.bind(this);
  }

  componentDidMount(){
    this.props.fetchFortunes().then(() => this.setState({check:true}));
  }

  anotherFortune(){
    this.props.fetchFortunes().then(() => this.setState({check:true, cookie:false}));
  }

  cookiesmash(){
    this.setState({cookie: true});
  }

  render(){
    if(!this.state.check){
      return (
        <div className='mainbody'>
          <img className='fortunepic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1508746019/fortune-cookie-day1-e1436956094878_jxf8dx.jpg'></img>
            <div className='fortunebody'>Loading...</div>
          </div>
          );
    }
    const lotto = (numbers=[]) =>{
      let ar = [];
      for(var i=0; i < numbers.length; i++){
        ar.push(<div key={i} className='lotto'>{numbers[i]}</div>);
      }
      return ar;
    };

    const fort = () => {
      return(
      <div className='fortunebody'>
        <div className='blue-topleft'></div>
        <div className='blue-topright'></div>
        <div className='blue-botleft'></div>
        <div className='blue-botright'></div>

        <div className='fortune'>{this.props.fortune[0].fortune}</div>
        <div className='ticket'>Lucky Mega: {lotto(this.props.fortune[0].mega)}</div>
        <div className='ticket2'>Lucky Power: {lotto(this.props.fortune[0].power)}</div>
      </div>
    );
  };

  const cookie =() =>{
    return(
      <div onClick={this.cookiesmash} className='cook'>

      </div>
    );
  };


    return(
      <div className='mainbody'>
        <img className='fortunepic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1508746019/fortune-cookie-day1-e1436956094878_jxf8dx.jpg'></img>
          {this.state.cookie ? fort() : cookie()}

      {this.state.cookie? <div className='another' onClick={this.anotherFortune}>Another Fortune?</div> :null}

      </div>
    );
  }


}
export default FortuneShow;
