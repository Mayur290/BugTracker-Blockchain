import React, { useEffect, useState } from 'react';

function CompanyDashboard() {

    useEffect(() => {

    })

    return (
        <>
            <div className="container">
                <br />
                Company Dashboard
                <br /><br /><br />
                <table>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Projects</th>
                            <th>View</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Client1</td>
                            <td>2</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr>
                            <td>Client2</td>
                            <td>3</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr>
                            <td>Client3</td>
                            <td>2</td>
                            <td><button>View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CompanyDashboard;