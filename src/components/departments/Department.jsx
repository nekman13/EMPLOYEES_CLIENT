import React from "react";

function Department(props) {
    return (
        <div className="card #b388ff deep-purple accent-1 darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.department.name}</span>
                <p>Город размещения: {props.department.location}</p>
                <p>Дата основания: {props.department.created_date}</p>
            </div>
            <div className="card-action">
                <button className="deleteButton"
                        onClick={() => props.onDelete(props.department.id)}>Удалить
                </button>
            </div>
        </div>


    )
}

export default Department;