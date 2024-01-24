import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    function handleBudgetChange(event) {
        setNewBudget(parseInt(event.target.value));
    }

    return (
        <div className="alert alert-secondary d-flex justify-content-between">
            <span>Budget: ￡</span>
            <input type="number" step={10} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    )
}

