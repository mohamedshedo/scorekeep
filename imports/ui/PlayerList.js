import React from 'react';
import Player from './Player'
import FlipMove from 'react-flip-move';
    
export default class PlayerList extends React.Component{
   renderPlayers(){

    if(this.props.players.length===0){
return(
    <div className='item'>
    <p className="item__message">add your first player to get started</p>
    </div>
);
    }else{
    return this.props.players.map(function(item){
        return <Player key={item._id} player={item}/> ;
      });
   }
}
    render(){
        return(
                <div>
                    <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                    </FlipMove>
                </div>
        );
    }
}