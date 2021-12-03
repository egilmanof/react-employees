import './app-filter.css';

function AppFilter(props) {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen500', label: 'З/П больше 500 руб/час'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-secondary' : 'btn-outline-secondary';
        return(
            <button
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return(
        <div className='btn-group'>
            {buttons}
        </div>

    )


}

export default AppFilter;