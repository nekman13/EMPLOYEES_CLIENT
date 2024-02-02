import {useEffect, useState} from "react";

function Paginstion(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [countPages, setCountPages] = useState(0);




    return (
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!">4</a></li>
            <li className="waves-effect"><a href="#!">5</a></li>
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Paginstion;