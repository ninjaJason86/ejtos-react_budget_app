import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

export default function ExpenseList() {
    const { expenses, currency, dispatch } = useContext(AppContext);



    function handleIncreaseAllocationBy10(item) {
        dispatch({
            type: "ADD_EXPENSE",
            payload: { ...item, cost: 10, }
        });
    }


    function handleDeleteExpense(item) {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: item.id,
        });
    }

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{currency}{item.cost}</td>
                        <td><button onClick={() => handleIncreaseAllocationBy10(item)}>+</button></td>
                        <td><TiDelete size="1.5em" onClick={() => handleDeleteExpense(item)}></TiDelete></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}