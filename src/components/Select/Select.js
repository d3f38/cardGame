import React, { useState, useEffect } from 'react';
import { Select as LegoSelect } from '@yandex-lego/components/Select/desktop/bundle';

const Select = ({value: propsValue, onChange, onToggleOpen, options = [], changeContent, placeholder,  ...props}) => {
    const [isOpen, toggleOpen] = useState(0);
    const [value, setValue] = useState(propsValue);

    const handleClick = (isOpen) => {
        toggleOpen(isOpen);

        if (onToggleOpen) {
            onToggleOpen(isOpen);
        }
    };

    const checkActive = (arr, value) => {
        const activeSelect = arr.filter(item => item.value === value);
        // if (typeFilter.match('status|types|employee|priority')) {
        return activeSelect.length ? activeSelect[0].content : 'Все';
        // }

        // return activeSelect.length ? activeSelect[0].content : '';
    };

    const handleChange = ({target: {value}}) => {
        setValue(value);

        if (onChange) {
            onChange(value);
            changeContent(checkActive(options, value));
        }
    };
    return  <LegoSelect
        theme="normal"
        size="m"
        tone="grey"
        view="default"
        width='max'

        value={value}
        onChange={handleChange}
        options={[...options]}
        opened={isOpen}
        setOpened={handleClick}
        placeholder={placeholder}
        {...props}
    />;
};

export default React.memo(Select);