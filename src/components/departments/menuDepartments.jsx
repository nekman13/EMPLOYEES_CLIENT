import FilterSearch from "../FilterSearch";
import {useEffect, useState} from "react";
import search from "../Search";

function MenuDepartments(props) {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        searchLocations();
    }, []);

    const searchLocations = (value = "") => {
        fetch(`http://127.0.0.1:8000/api/v1/get_departments/?search=${value}`, {headers: {'Content-Type': 'application/json;charset=utf8'}})
            .then(response => response.json())
            .then(data => setDepartments(data))
        console.log(departments)
    }

    const locations = departments.map(department => (
        department.location))


    return (
        <div className="">
            <FilterSearch search={searchLocations}/>
            <h5>Города:</h5>
            <div className="collection">
                {Array.from(new Set(locations)).map(location => (
                    <a key={location} className="collection-item" onClick={() => props.departmentSearch(location)}>{location}</a>
                ))}
            </div>
        </div>
    )
}

export default MenuDepartments;