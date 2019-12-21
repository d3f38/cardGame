import React from 'react';
import { Button as LegoButton } from '@yandex-lego/components/Button/desktop/bundle';

export const Button = () => {
    return <>
        <LegoButton
            theme="normal"
            view="default"
            size="m"
            tone="grey"
            pin="round-clear"
            children="Без маршрута"
        />
        <LegoButton
            theme="normal"
            view="default"
            size="m"
            tone="grey"
            pin="clear-round"
            children="Оптимальный маршрут"
        />
    </>;
};