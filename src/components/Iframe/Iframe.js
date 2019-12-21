import React from 'react';
import { cn } from '@bem-react/classname';
import styles from './Iframe.scss';
import { connect } from 'react-redux';
import { toggleTracker } from '../../redux-files/actions/toggle_tracker';

const mapStateToProps = ({tracker}) => {
    return {tracker};
};

const IframeRaw = ({tracker, toggleTracker}) => {
    const cnIframe = cn('Iframe');

    const handleCloseIframe = () => {
        toggleTracker();
    };

    return (
        <div className={cnIframe()}>
            <iframe className={cnIframe('Content')} src={tracker.href} width="602" height="1023"></iframe>
            <button className={cnIframe('Button')} onClick={handleCloseIframe}>X</button>
        </div>
    );
};

export const Iframe = connect(mapStateToProps, { toggleTracker })(IframeRaw);
