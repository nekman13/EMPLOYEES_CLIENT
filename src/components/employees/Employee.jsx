import React from "react";

function Employee(props) {

    return (

                <div className="card employees-card #b388ff deep-purple accent-1 darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.employee.last_name} {props.employee.first_name}</span>
                        <p>Департамент: {props.employee.department?.name ? props.employee.department.name : "Департамент неизвестен"}</p>
                        <p>Должность: {props.employee.role}</p>
                        <h4>Задачи:</h4>
                        <ul>
                            {props.employee.tasks.length ? props.employee.tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            )) :
                                <li>Задачи отсутствуют</li>}
                        </ul>
                    </div>
                    <div className="card-action">
                        <button className="deleteButton waves-effect"
                           onClick={() => props.onDelete(props.employee.id)}>Удалить
                        </button>
                    </div>
                </div>



    )
}

export default Employee;