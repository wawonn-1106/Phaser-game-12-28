import World from './scenes/World.js';
import House from './scenes/House.js';

export const config={
    type:Phaser.AUTO,
    width:1600,
    height:1600,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0},
            debug:true
        }
    },
    parent:'game-container',
    dom:{
        createContainer:true
    },
    scene:[World,House]
}