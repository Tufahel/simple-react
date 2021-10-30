import React from 'react';
import './BuyPlayer.css';
import data from '../../data/data.json';

const BuyPlayer = (props) => {
    const cart = props.cart;
    const name = props.name;
    let total = 0;
    let playerName = '';
    for (let i = 0; i < cart.length; i++) {
        // const player = cart[i];
        let player = parseInt(cart[i]);
        total = total + (player);
        playerName = playerName + name[i] + '-($'+ `${cart[i]})` + ', ';
    }
    return (
        <div className="main-player">
            <div className="updatePlayer">
                <h2>Total Player: {data.length}</h2>
                <p>Total Selected Player: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Added Player Name: <span>{playerName}</span></p>
            </div>
        </div>
    );
};

export default BuyPlayer;