import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
    const { budget, currency, totalExpenses } = useContext(AppContext);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    )
}