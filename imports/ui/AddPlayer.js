import React from 'react';

import {Players} from './../api/players'



export default class AddPlayer extends React.Component{

 handleSubmit(e){
        let playerName = e.target.playerName.value;
        e.preventDefault();
    if(playerName.trim()){
    
        Players.insert({
            name:playerName,
            Score:0
        });
    }
    e.target.playerName.value='';

    }


    render(){
        return(
            <div className='item'>
                <form className='form' onSubmit={this.handleSubmit.bind(this)}> 
                <input className='form__input' type='text' placeholder='playerName' name='playerName'/>
                <button className='button'>add Player</button>
                 </form>
            </div>
        );
    }
}