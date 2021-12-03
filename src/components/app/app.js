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
                   {id: 2, name: 'Алексей Б.', salary: 900, rise:false, increase: false},
                   {id: 3, name: 'Михаил В.', salary: 300, rise:false, increase: false},
                   {id: 4, name: 'Николай Д.', salary: 600, rise:true, increase: false},
                   {id: 5, name: 'Александр И.', salary: 500, rise:false, increase: false},
                   {id: 6, name: 'Евгений Ж.', salary: 800, rise:true, increase: false},
                   {id: 7, name: 'Владислав Е.', salary: 400, rise:false, increase: false},
                   {id: 8, name: 'Игорь Н.', salary: 200, rise:false, increase: false}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 9;

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


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }


        return  items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen500':
                return  items.filter(item => item.salary > 500);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}


export default App;