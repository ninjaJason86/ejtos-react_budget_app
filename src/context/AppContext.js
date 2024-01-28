import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let budget = 0;
    switch (action.type) {
        case "ADD_EXPENSE":
            let total_expenses = 0;
            total_expenses = state.expenses.reduce(
                (totalExpense, currentExpense) => {
                    return totalExpense += currentExpense.cost
                }, 0
            );
            total_expenses += action.payload.cost;
            action.type = "DONE";
            if (total_expenses <= state.budget) {
                total_expenses = 0;
                state.expenses.map((expense) => {
                    if (expense.name === action.payload.name) {
                        expense.cost += action.payload.cost;
                    }
                    return expense
                });
                return {
                    ...state,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                }
            }
        case "REDUCE_EXPENSE":
            const reduced_expenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name && expense.cost - action.payload.cost >= 0) {
                    expense.cost -= action.payload.cost;
                    budget = state.budget + action.payload.cost
                }
                return expense
            })
            action.type = "DONE";
            return {
                ...state,
                expenses: [...reduced_expenses],
            };
        case "DELETE_EXPENSE":
            action.type = "DONE";
            state.expenses.map((expense) => {
                if (expense.name === action.payload) {
                    budget = state.budget + expense.cost
                    expense.cost = 0;
                }
                return expense
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
        case "SET_BUDGET":
            action.type = "DONE";
            state.budget = action.payload;

            return {
                ...state,
            };
        case "CHANGE_CURRENCY":
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: "Marketing", cost: 50 },
        { id: "Finance", name: "Finance", cost: 300 },
        { id: "Sales", name: "Sales", cost: 70 },
        { id: "Human Resource", name: "Human Resource", cost: 40 },
        { id: "IT", name: "IT", cost: 500 },
    ],
    currency: "£",
    totalExpenses: 960,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext(initialState);

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        remaining = state.budget - totalExpenses;

    }
    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        // @ts-ignore
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency,
                totalExpenses,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
