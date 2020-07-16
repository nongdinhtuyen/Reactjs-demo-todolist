import React, { Component } from 'react';


class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    }
    onClick = async (sortBy, sortValue) => {
        await this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });
        console.log(this.state.sort)
        this.props.onSort(this.state.sort);
    }
    render() {
        var { sort } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="far fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => { this.onClick('name', 1) }}>
                            <a
                                href='/#'
                                role="button"

                            >
                                <span className="far fa-sort-alpha-asc pr-5">
                                    Tên A-Z  <i className={(sort.by === 'name' && sort.value === 1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                        <li onClick={() => { this.onClick('name', -1) }}>
                            <a
                                href='/#'
                                role="button"

                            >
                                <span className="far fa-sort-alpha-desc pr-5">
                                    Tên Z-A <i className={(sort.by === 'name' && sort.value === -1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => { this.onClick('status', 1) }}>
                            <a
                                href='/#'
                                role="button"
                                
                            >Trạng Thái Kích Hoạt <i className={(sort.by === 'status' && sort.value === 1) ? 'fas fa-check float-right' : ''} /></a></li>
                        <li onClick={() => { this.onClick('status', -1) }}>
                            <a
                                href='/#'
                                role="button"

                            >Trạng Thái Ẩn <i className={(sort.by === 'status' && sort.value === -1) ? 'fas fa-check float-right' : ''} /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
