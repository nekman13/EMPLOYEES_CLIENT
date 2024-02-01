import {useState} from "react";

function Search(props) {

    const [requestText, setRequestText] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleChange = (text) => {
        setRequestText(text)
        if (text === "") {
            setButtonDisabled(true)
        }
        else {
            setButtonDisabled(false)
        }
    }


    return (
        <div className="row search">
            <div className="input-field">
                <input
                    value={requestText}
                    onChange={(event) => handleChange(event.target.value)}
                    placeholder="Поиск"
                    id="search"
                    type="search"
                    className="validate"
                />
                <button className="searchButton" disabled={buttonDisabled} onClick={() => props.search(requestText)}>
                    Поиск
                </button>
            </div>
        </div>
    )
}

export default Search;