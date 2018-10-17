import React from 'react';
import {Players} from './../api/players'
export default class Player extends React.Component{
    render(){
        let itemClassName=`item item--position-${this.props.player.rank}`
        return (
          
                <div className={itemClassName} key={this.props.player._id}>
                    <div className='player'>
                        <div>
                          <h3 className='player__name'>{this.props.player.name} </h3>
                          <p className='player__stats'> {this.props.player.rank} {this.props.player.position} place - {this.props.player.Score} point(s)</p>
                        </div>
                        <div className='player__actions'>
                          <button className="button button--round" onClick={()=> Players.remove({_id:this.props.player._id})}>x</button>
                             <button className="button button--round" onClick={()=> Players.update({_id:this.props.player._id},{$inc:{Score:1}})}>+</button>
                            <button className="button button--round" onClick={()=> Players.update({_id:this.props.player._id},{$inc:{Score:-1}})}>-</button>
                          </div>
                    </div>
                </div>
        );
    }
}