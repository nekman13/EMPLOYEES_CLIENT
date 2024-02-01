import React, {useEffect, useState} from "react";
import Employee from "./Employee";
import Search from "./Search";
import Preloader from "./Preloader";
import MenuEmployees from "./MenuEmployees";


function Employees(props) {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchEmployees = async (value = "") => {
        try {
            await fetch(`http://127.0.0.1:8000/api/v1/get_employees/?search=${value}`, {
                headers: {'Content-Type': 'application/json;charset=utf-8'}
            })
                .then(response => response.json())
                .then(data => setEmployees(data))
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        searchEmployees();
    }, []);
    const deleteEmployee = (id) => {
        fetch(`http://127.0.0.1:8000/api/v1/delete_employee/${id}/`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        })
        setEmployees(employees.filter(employee => employee.id !== id))
    }


    return (
        <div className="employees row">
            <Search search={searchEmployees}/>
            <div className="col s3">
                <MenuEmployees/>
            </div>
            <div className="col s8">
                {
                    isLoading ? (<Preloader/>) :
                        employees.length === 0 ?
                            <div>
                                <h5>Сотрудники не найдены</h5>
                                <button className="deleteButton" onClick={() => searchEmployees("")}>Сбросить</button>
                            </div>
                            : <ul>
                                {employees.map(employee => (
                                    <Employee key={employee.id} onDelete={deleteEmployee} employee={employee}/>
                                ))}
                            </ul>
                }
            </div>
        </div>
    )
}

export default Employees;