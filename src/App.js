import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        // @ts-ignore
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Add Budget component here */}
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    {/* Add Remaining component here*/}
                    <div className='col-sm'>

                    </div>
                    {/* Add ExpenseTotal component here */}
                    <div className='col-sm'>

                    </div>

                    {/* Add ExpenseList component here */}

                    {/* Add ExpenseItem component here */}

                    {/* Add AllocationForm component here under */}

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
