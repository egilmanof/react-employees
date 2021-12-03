import './search-panel.css';
import {Component} from "react";


class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state ={
            term: ''
        }

    }

    onUpSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }


    render() {

        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder='Поиск сотрудника'
                value={this.state.term}
                onChange={this.onUpSearch}
            />

        )
    }
}


export default SearchPanel;