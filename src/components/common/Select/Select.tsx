import { useState, useRef, useEffect } from 'react';
import { SelectPropsType } from '../../../types/basicComponents';
import { selectArrowIcon } from '../../../assets/icons/common';
import './Select.scss';

const Select = ({ options }: SelectPropsType) => {
    const [selected, setSelect] = useState(0);
    const selectRef = useRef<HTMLDivElement>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

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
    };

    const handleSelectOption = (index: number) => {
        setSelect(index);
        setDropdownVisible(false);
    };

    const optionElement = options.map((item, index) => (
        <div className="select-option" key={index} onClick={() => handleSelectOption(index)}>
            {item}
        </div>
    ));

    return (
        <div className="select" ref={selectRef}>
            <div className="select-selected" onClick={handleDropdown} onBlur={() => setDropdownVisible(false)}>
                {options[selected]}
                <span className="select-dropdown-icon">{selectArrowIcon}</span>
            </div>
            <div className={`select-dropdown ${dropdownVisible ? 'select-dropdown-show' : ''}`}>{optionElement}</div>
        </div>
    );
};

export default Select;
