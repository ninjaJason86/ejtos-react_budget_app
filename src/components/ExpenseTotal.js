import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
    const { totalExpenses } = useContext(AppContext);

    return (
        <div className="alert alert-primary">
            <span>Spent so far: ￡{totalExpenses}</span>
        </div>
    );
}
