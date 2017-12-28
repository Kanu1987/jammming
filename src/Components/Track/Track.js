import React from 'react';
import './Track.css';

class Track extends React.Component{

  constructor(props){
    super(props);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
  }


  renderAction(){

    if (this.props.onAdd) {
        return <a className='Track-action' onClick={this.addTrack}>+</a>;
      } else {
        return <a className='Track-action' onClick={this.removeTrack}>-</a>;
      }
  }

  addTrack(){
    this.props.onAdd(this.props.track);
  }

  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  render(){
    return(
          <div class="Track">
      <div class="Track-information">
      <h3>{this.props.track.name}</h3>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a class="Track-action"> {this.renderAction()} </a>
      </div>);
  }

}

export default Track;
