import './app-info.css'

const AppInfo = ({increased, employees}) => {
    return(

        <div className='app_info'>
            <h1>Список сотрудников</h1>
            <div className="app_info_list">
                <h2>Количество сотрудников: {employees}</h2>
                <h2>Количество премий: {increased}</h2>
            </div>
        </div>

    )
}


export default AppInfo;