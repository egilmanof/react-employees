import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{id: 1, name: 'Руслан Ю.', salary: 1000, rise:true, increase: false},
                   {id: 2, name: 'Эдуард Г.', salary: 700, rise:false, increase: false},
                   {id: 3, name: 'Алексей П.', salary: 200, rise:false, increase: false}
            ]
        }
        this.maxId = 4;

    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    onToggleIncrease = (id) => {
        console.log(`Increase айди: ${id}`);
    }

    onToggleRise = (id) => {
        console.log(`Rise айди: ${id}`);
    }

    render() {

        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}


export default App;