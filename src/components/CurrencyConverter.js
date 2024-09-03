import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyConverter = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencies = [
        { code: 'USD', name: '$ Dollar' },
        { code: 'GBP', name: '£ Pound' },
        { code: 'EUR', name: '€ Euro' },
        { code: 'INR', name: '₹ Rupee' }
    ];

    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="currency-converter">
            <select
                value={currency}
                onChange={handleChange}
                className='currency-select'
            >
                {currencies.map(({ code, name }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyConverter;
