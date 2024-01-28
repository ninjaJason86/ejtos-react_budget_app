import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import { RiAddCircleFill } from "react-icons/ri";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";



export default function ExpenseItem(props) {
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
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FaPlusCircle
                    size={"40px"}
                    color="green"
                    onClick={() => handleIncreaseAllocationBy10(props)}
                />
            </td>
            <td>
                <FaMinusCircle
                    size={"40px"}
                    color="darkred"
                    onClick={() => handleDecreaseAllocationBy10(props)}
                />
            </td>
            <td>
                <TiDelete
                    size="1.5em"
                    onClick={() => handleDeleteExpense(props)}
                />
            </td>
        </tr>
    );
}