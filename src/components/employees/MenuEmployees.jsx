import {useEffect, useState} from "react";
import Search from "../Search";
import FilterSearch from "../FilterSearch";

function MenuEmployees(props) {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        searchDepartment();
    }, []);

    const searchDepartment = async (value = "") => {
        fetch(`http://127.0.0.1:8000/api/v1/get_departments/?search=${value}`, {
            headers: {'Content-Type': 'application/json;charset=utf-8'}
        }).then(response => response.json())
            .then(data => setDepartments(data))
    }

    return (
        <div>
            <FilterSearch search={searchDepartment}/>
            <h5>Департаменты:</h5>
            <div className="collection">
                {departments.map(department => (
                    <a key={department.id} className="collection-item" onClick={() => props.search(department.name)}>{department.name}</a>
                ))}


            </div>
        </div>

    )
}

export default MenuEmployees;