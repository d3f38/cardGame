import React from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import { getActiveFilters } from '../../redux-files/actions/get_active_filters';
import { getInitialMap } from '../../redux-files/actions/get_initial_map';

const mapStateToProps = ({ activeFilters, initMap }) => {
    return { activeFilters, initMap };
};

const buttonFullscreen = () => {
    return (
        <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.25 0.25V4.75H1.75V1.75H4.75V0.25H0.25ZM9.25 0.25V1.75H12.25V4.75H13.75V0.25H9.25ZM0.25 9.25V13.75H4.75V12.25H1.75V9.25H0.25ZM12.25 9.25V12.25H9.25V13.75H13.75V9.25H12.25Z" fill="#333333"/>
            </svg>
            <span>Карта во весь экран</span>
        </>
    );
};

const buttonWithoutFullscreen = () => {
    return (
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.08333 1V5.08333H1V6.25H6.25V1H5.08333ZM9.75 1V6.25H15V5.08333H10.9167V1H9.75ZM1 9.75V10.9167H5.08333V15H6.25V9.75H1ZM9.75 9.75V15H10.9167V10.9167H15V9.75H9.75Z" fill="#333333" stroke="#333333" strokeWidth="0.5"/>
            </svg>
            <span>Карта не во весь экран</span>
        </>
    );
};


const ButtonFullscreen = (props) => {
    const cnButtonFullscreen = cn('Map-ButtonFullscreen');

    const hideColumns = () => {
        props.getActiveFilters({
            columns: !props.activeFilters.columns
        });
    };

    return (
        <div className={cnButtonFullscreen()}
            onClick={hideColumns}
        >
            {!props.activeFilters.columns ? buttonWithoutFullscreen() : buttonFullscreen()}
        </div>
    );
};


export default connect(mapStateToProps, { getActiveFilters, getInitialMap })(ButtonFullscreen);
