import React from 'react';
import { cn } from '@bem-react/classname';

import { getSelectedDeck } from '../../redux-files/actions/get_selected_deck';

import styles from './SelectionDeck.scss';


export const SelectionDeck = () => {

    const cnSelectionDeck = cn('SelectionDeck');
    const cnDeck = cn('Deck');

    const selectDeck = (event) => getSelectedDeck(event.target.id);

    return (
        <div className={cnSelectionDeck()}>
            <div className={cnDeck()}>
                <input type="radio" className={cnDeck('input')} onChange={selectDeck} name='deck' id='deck-zero'/>
                <label className={cnDeck('label', {type: 'zero'})} htmlFor='deck-zero'></label>
            </div>
            <div className={cnDeck()}>
                <input type="radio" className={cnDeck('input')} onChange={selectDeck} name='deck' id='deck-one' defaultChecked/>
                <label className={cnDeck('label', {type: 'one'})} htmlFor='deck-one'></label>
            </div>
            <div className={cnDeck()}>
                <input type="radio" className={cnDeck('input')} onChange={selectDeck} name='deck' id='deck-two'/>
                <label className={cnDeck('label', {type: 'two'})} htmlFor='deck-two'></label>
            </div>
            <div className={cnDeck()}>
                <input type="radio" className={cnDeck('input')} onChange={selectDeck} name='deck' id='deck-three'/>
                <label className={cnDeck('label', {type: 'three'})} htmlFor='deck-three'></label>
            </div>
        </div>
    );
};
