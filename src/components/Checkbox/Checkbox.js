import React, { useState, useCallback } from 'react';
import { Checkbox as LegoCheckbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Checkbox = () => {
    const [checked, setChecked] = useState(0);
    const onChange = useCallback(() => setChecked(!checked), [checked]);

    return (
        <LegoCheckbox
            theme="normal"
            view="default"
            size="s"
            onChange={onChange}
            checked={checked}
        />
    );
};