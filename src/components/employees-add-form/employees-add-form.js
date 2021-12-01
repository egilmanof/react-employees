import './employees-add-form.css'

function EmployeesAddForm() {

    return (

        <div className="app-add-form">
            <h3>Добавьте нового сотрудника:</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Имя Фамилия"/>
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в руб/час"/>
                <button type="submit"
                        className="btn btn-outline-light">Добавить
                </button>
            </form>
        </div>

    )

}

export default EmployeesAddForm;