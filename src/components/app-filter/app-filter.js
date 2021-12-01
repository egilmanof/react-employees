import './app-filter.css';

function AppFilter() {

    return(
        <div className='btn-group'>

            <button
                className='btn btn-secondary'
            >
                Все сотрудники
            </button>
            <button
                className='btn btn-outline-secondary'
            >
                На повышение
            </button>
            <button
                className='btn btn-outline-secondary'
            >
                З/П больше 500 руб/час
            </button>

        </div>

    )


}

export default AppFilter;