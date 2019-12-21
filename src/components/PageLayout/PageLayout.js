import React from 'react';

import { Switch, Route, withRouter, Router, Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import styles from './PageLayout.scss';
import { connect } from 'react-redux';
import { getAmountCards } from '../../redux-files/actions/get_amount_cards';
import { getSelectedDeck } from '../../redux-files/actions/get_selected_deck';
import { SelectionDeck } from '../SelectionDeck/SelectionDeck';
import { AmountCards } from '../AmountCards/AmountCards';
const mapStateToProps = ({ amountCards, selectedDeck }) => {
    return { amountCards, selectedDeck };
};

const cnPageLayout = cn('PageLayout');

const PageLayout = (props) => {
    console.log(props);

    return (
        <div className={cnPageLayout()}>
            {props.amountCards}
            <Link to='/game'  className={cnPageLayout('link-to-game')}>Новая игра</Link>
            <SelectionDeck/>
            <AmountCards/>
        </div>
    );

};

export default connect(mapStateToProps, { getAmountCards, getSelectedDeck })(PageLayout);
