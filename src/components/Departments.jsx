import {useEffect, useState} from "react";
import Department from "./Department";
import Preloader from "./Preloader";
import Search from "./Search";

function Departments(props) {

    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        searchDepartments();
    }, []);

    const searchDepartments = async (value = "") => {
        try {
            await fetch(`http://127.0.0.1:8000/api/v1/get_departments/?search=${value}`, {
                headers: {'Content-Type': 'application/json;charset=utf-8'}
            })
                .then(response => response.json())
                .then(data => setDepartments(data))
        } finally {
            setIsLoading(false);
        }
    }

    const deleteDepartment = (id) => {
        fetch(`http://127.0.0.1:8000/api/v1/delete_department/${id}/`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        });
        setDepartments(departments.filter(department => department.id !== id));
    }

    return (
        <div className="departments">
            <Search search={searchDepartments}/>
            {isLoading ? <Preloader/> :
                departments.length === 0 ?
                    <div>
                        <h5>Департаменты не найдены</h5>
                        <button className="deleteButton" onClick={() => searchDepartments("")}>Сбросить</button>
                    </div>    :
            <ul>
                {departments.map(dep => (
                    <Department key={dep.key} department={dep} onDelete={deleteDepartment}/>
                ))}
            </ul>
            }
        </div>
    )
}

export default Departments;