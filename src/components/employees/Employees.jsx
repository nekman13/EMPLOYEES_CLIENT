import React, {useEffect, useState} from "react";
import Employee from "./Employee";
import Search from "../Search";
import Preloader from "../Preloader";
import MenuEmployees from "./MenuEmployees";
import Pagination from "../Pagination";


function Employees(props) {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const searchEmployees = async (value = "") => {
        await fetch(`http://127.0.0.1:8000/api/v1/get_employees/?search=${value}&page=1`, {
            headers: {'Content-Type': 'application/json;charset=utf-8'}
        })
            .then(response => response.json())
            .then(data => setEmployees(data))
        try {
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
        <div className="employees">
            <div className=" row">
                <Search search={searchEmployees}/>
                <div className="col s3">
                    <MenuEmployees search={searchEmployees}/>
                </div>
                <div className="col s7">
                    {
                        isLoading ? (<Preloader/>) :
                            employees.length === 0 ?
                                <div>
                                    <h5>Сотрудники не найдены</h5>
                                    <button className="deleteButton" onClick={() => searchEmployees("")}>Сбросить
                                    </button>
                                </div>
                                : <ul>
                                    {employees.map(employee => (
                                        <Employee key={employee.id} onDelete={deleteEmployee} employee={employee}/>
                                    ))}
                                </ul>
                    }
                </div>
            </div>
            {/*<Pagination/>*/}
        </div>
    )
}

export default Employees;