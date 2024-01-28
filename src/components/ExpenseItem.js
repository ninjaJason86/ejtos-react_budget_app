import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";



export default function ExpenseItem(item, index) {
    const { currency, dispatch } = useContext(AppContext);


    function handleIncreaseAllocationBy10(item) {
        dispatch({
            type: "ADD_EXPENSE",
            payload: { ...item, cost: 10, }
        });
    }

    function handleDecreaseAllocationBy10(item) {
        dispatch({
            type: "REDUCE_EXPENSE",
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
        <tr key={index}>
            <td>{item.name}</td>
            <td>{currency}{item.cost}</td>
            <td>
                <FaPlusCircle
                    size={"40px"}
                    color="green"
                    onClick={() => handleIncreaseAllocationBy10(item)}
                />
            </td>
            <td>
                <FaMinusCircle
                    size={"40px"}
                    color="darkred"
                    onClick={() => handleDecreaseAllocationBy10(item)}
                />
            </td>
            <td>
                <TiDelete
                    size="1.5em"
                    onClick={() => handleDeleteExpense(item)}
                />
            </td>
        </tr>
    );
}