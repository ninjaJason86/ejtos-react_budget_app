import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UPPER_LIMIT = 20000;

export default function Budget() {
    const { budget, totalExpenses, dispatch } = useContext(AppContext);

    function handleBudgetChange(event) {
        if (event.target.value > UPPER_LIMIT) {
            alert(`The budget cannot exceed £ ${UPPER_LIMIT}`);
            return;
        }

        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spent so far");
            return;
        }

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

