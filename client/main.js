import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker}from 'meteor/tracker'
import {Players,CalculatePlayerPosioton} from './../imports/api/players'
import App from './../imports/ui/app'


Meteor.startup(function(){
    Tracker.autorun(function(){
 let players = Players.find({},{sort:{Score:-1}}).fetch();
 let title='Score keep';
 let positionedPlayer =CalculatePlayerPosioton(players)
    ReactDOM.render(<App title={title} players={positionedPlayer}/>,document.getElementById('app'));
       
});
});