import React from 'react';
import { cn } from '@bem-react/classname';

import styles from './AmountCards.scss';


export const AmountCards = () => {

    const cnAmountCards = cn('AmountCards');
    const cnDeck = cn('Deck');

    const selectDeckSize = (deck) => {
        
    }

    return (
        <div className={cnAmountCards()}>
            <div className={cnAmountCards('radio')}>
                <input type="radio" className={cnAmountCards('input')} onChange={} name='deck-size' id='deck-size-xs'/>
                <label className={cnAmountCards('label', {size: 'xs'})} htmlFor='deck-size-xs'>10</label>
            </div>
            <div className={cnAmountCards('radio')}>
                <input type="radio" className={cnAmountCards('input')} name='deck-size' id='deck-size-s' defaultChecked/>
                <label className={cnAmountCards('label', {size: 's'})} htmlFor='deck-size-s'>20</label>
            </div>
            <div className={cnAmountCards('radio')}>
                <input type="radio" className={cnAmountCards('input')} name='deck-size' id='deck-size-m'/>
                <label className={cnAmountCards('label', {size: 'm'})} htmlFor='deck-size-m'>30</label>
            </div>
            <div className={cnAmountCards('radio')}>
                <input type="radio" className={cnAmountCards('input')} name='deck-size' id='deck-size-l'/>
                <label className={cnAmountCards('label', {size: 'l'})} htmlFor='deck-size-l'>40</label>
            </div>
        </div>
    );
};
