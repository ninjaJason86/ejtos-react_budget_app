import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
    const { currency, totalExpenses } = useContext(AppContext);

    return (
        <div className="alert alert-primary">
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
}
