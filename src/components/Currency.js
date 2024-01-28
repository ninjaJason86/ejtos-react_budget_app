import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Currency() {
    const { currency, dispatch } = useContext(AppContext);
    const [showOptions, setShowOptions] = useState(false);
    const options = [
        { label: "$ Dollar", value: "$" },
        { label: "£ Pound", value: "£" },
        { label: "€ Euro", value: "€" },
        { label: "₹ Ruppee", value: "₹" },
    ];
    const selectedLabel = options.filter((item) => item.value === currency)[0].label;


    function handleCurrencyChange(event) {
        dispatch({
            type: "CHANGE_CURRENCY",
            payload: event.target.value,
        });

        setShowOptions(false);
    }

    return (
        <div className="alert alert-secondary">
            <div className="dropdown">
                <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setShowOptions(!showOptions)}
                >
                    Currency ({selectedLabel})
                </button>
                <ul
                    className={`dropdown-menu ${showOptions ? "show" : ""} bg-success`}
                    aria-labelledby="dropdownMenuButton"
                >
                    {
                        options.map((item,) => (
                            <li
                                key={item.value}
                            >
                                <button
                                    className="dropdown-item"
                                    onClick={() => handleCurrencyChange({ target: { value: item.value } })}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );

}