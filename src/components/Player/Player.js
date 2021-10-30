import { React, useEffect, useState } from 'react';
import './Player.css'
import data from '../../data/data.json';

const Player = (props) => {
    const [players, setplayer] = useState([]);
    const handleAddPlayer = props.handleAddPlayer;

    useEffect(() => {
        setplayer(data);
    }, []);

    
    return (
        <div className="player">
            {
                data.map(player => 
                    <div className="playerDiv">
                        <div className="player-img"><img src={player.image} alt=""/></div>
                        <div className="player-info">
                            <h3 className="player-name">Name: {player.name}</h3>
                            <br/>
                            <p><small>Role: {player.role}</small></p>
                            <p><small>From: {player.country}</small></p>
                            <p>Salary: ${player.price}</p>
                            <button onClick={() => handleAddPlayer(player.price, player.name)} className='main-button'>Add Player</button>
                        </div>
                    </div>   
                )
            }
        </div>
    );
};

export default Player;