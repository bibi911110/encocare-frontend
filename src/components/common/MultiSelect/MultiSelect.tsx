import { useState, useRef, useEffect } from 'react';
import { MultiSelectPropsType } from '../../../types/basicComponents';
import { checkIcon, crossIcon, selectArrowIcon } from '../../../assets/icons/common';
import './MultiSelect.scss';

const MultiSelect = ({ options, defaultValue, placeHolder }: MultiSelectPropsType) => {
    const [selectedOptions, setSelectOption] = useState<Array<number>>([]);
    const selectRef = useRef<HTMLDivElement>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        if (defaultValue !== undefined && defaultValue.length > 0) {
            setSelectOption(defaultValue);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectRef]);

    const handleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        console.log('here');
    };

    const handleSelectOption = (index: number) => {
        if (selectedOptions.indexOf(index) > -1) {
            const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== index);
            setSelectOption(updatedOptions);
        } else {
            setSelectOption([...selectedOptions, index]);
        }
    };

    const optionElement = options.map((item, index) => {
        const selected = selectedOptions.indexOf(index) > -1;

        return (
            <div
                className={`multi-select-option ${selected ? 'selected' : ''}`}
                key={index}
                onClick={() => handleSelectOption(index)}
            >
                {item}
                {selected && <span className="checked-icon">{checkIcon}</span>}
            </div>
        );
    });

    return (
        <div className="multi-select">
            <div className="multi-select-wrapper" ref={selectRef}>
                <div className="multi-select-main" onClick={handleDropdown} onBlur={() => setDropdownVisible(false)}>
                    <span className="multi-select-placeholder">{placeHolder}</span>
                    <span className="multi-select-dropdown-icon">{selectArrowIcon}</span>
                </div>
                <div className={`multi-select-dropdown ${dropdownVisible ? 'show' : ''}`}>{optionElement}</div>
            </div>
            <div className="selected-items-wrapper">
                {selectedOptions.map((item) => (
                    <div className="selected-item" key={item}>
                        {options[item]}
                        <span className="remove-icon" onClick={() => handleSelectOption(item)}>
                            {crossIcon}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiSelect;
