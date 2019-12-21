import React from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';

import styles from './Game.scss';

const mapStateToProps = ({ selectedDeck, amountCards }) => {
    return { selectedDeck, amountCards };
};

const Game = (props) => {
    console.log(props)
    const cnGame = cn('Game');

    return (
        <div className={cnGame()}>
            Игра
            <img src='src\assets\img\one\2-of-clubs.jpg'></img>
        </div>
    );
};

export default connect(mapStateToProps)(Game);
