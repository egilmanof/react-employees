import './employees-add-form.css'
import {Component} from "react";


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        const{name, salary} = this.state;
        e.preventDefault();
        if (name !== '' && isNaN(name) && salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }


    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника:</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}
                >
                    <input type='text'
                           className='form-control new-post-label'
                           placeholder="Имя Фамилия"
                           onChange={this.onValueChange}
                           name='name'
                           value={name}
                    />
                    <input type='number'
                           className='form-control new-post-label'
                           placeholder='З/П в руб/час'
                           onChange={this.onValueChange}
                           name='salary'
                           value={salary}
                    />
                    <button type="submit"
                            className="btn btn-outline-secondary">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;