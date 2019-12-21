import React from 'react';
import { cn } from '@bem-react/classname';
import url from './logo.svg';
import styles from './Header.scss';


export const Header = () => {
    const cnHeader = cn('Header');

    return (
        <div className={cnHeader()}>
            <div>
                <img className={cnHeader('Logo')} src={url} alt="Yandex Helpboard" />
            </div>
            <div className={cnHeader('Right')} >
                <input type="search" className={cnHeader('Search')}  placeholder="Поиск"></input>
                <div className={cnHeader('User')} ></div>
            </div>
        </div>
    );
};
