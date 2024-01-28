import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Currency() {
    const { currency, dispatch } = useContext(AppContext);


    function handleCurrencyChange(event) {
        dispatch({
            type: "CHANGE_CURRENCY",
            payload: event.target.value,
        });
    }

    return (
        <div className="alert alert-secondary">
            <div className="currency-select-container">
                <span>Currency</span>
                <select className="currency-select" value={currency} onChange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </div>
        </div>
    );

}