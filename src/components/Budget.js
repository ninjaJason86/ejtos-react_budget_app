import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
    const { budget, dispatch } = useContext(AppContext);

    function handleBudgetChange(event) {
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value,
        })
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: ￡</span>
            <input type="number" step={10} value={budget} onChange={handleBudgetChange}></input>
        </div>
    )
}

