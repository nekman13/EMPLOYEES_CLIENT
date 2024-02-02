import React from "react";
import Navbar from "./Navbar";
import Employees from "./employees/Employees";
import Departments from "./departments/Departments";



class Main extends React.Component {
    state = {
        current: "employees",
    }

    render() {
        return (
            <div>
                <Navbar currentHandler={this.currentHandler}/>
                {
                    this.state.current === "employees"
                        ? <Employees changeIsLoading={this.changeIsLoading}/>
                        : <Departments/>

                }
            </div>)
    }


    currentHandler = (button_id) => {
        this.setState({current: button_id});
    }


}

export default Main;