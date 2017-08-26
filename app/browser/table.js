import React from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import { Toolbar} from 'react-data-grid-addons';
const { Data:{Selectors}} = require('react-data-grid-addons');

export class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: [],
      rows: {},
      name: '',
      filters: {},
      sortColumn: null,
      sortDirection: null
    }
    this.getRows = this.getRows.bind(this)
    this.getSize = this.getSize.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridSort = this.handleGridSort.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);

  }

  componentDidMount() {
    axios.get('https://data.cityofnewyork.us/views/kku6-nxdu/rows.json?accessType=DOWNLOAD')
    .then(res => res.data)
    .then(data => {
      const column = data.meta.view.columns.filter((elm) => {
        return elm.id !== -1
      })
      let filteredData = []
      data.data.map((dataRow) => {
        return dataRow.slice(8)
      }).forEach((data) => {
        let obj = {}
        for (let i = 0; i < column.length; i++){
          obj[column[i].id] = +data[i]
        }
        filteredData.push(obj)
      })
      const name = data.meta.view.name
      this.setState({column, rows: filteredData, name});
    })
  }

  getRows() {
    return Selectors.getRows(this.state);
  }

  getSize() {
    return this.getRows().length;
  }

  rowGetter(rowIdx) {
    const rows = this.getRows();
    return rows[rowIdx];
  }

  handleGridSort(sortColumn, sortDirection) {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  }

  handleFilterChange(filter) {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  }

  onClearFilters() {
    this.setState({ filters: {} });
}

  render() {
    if(this.state.rows.length === undefined) return null
    return (
      <div>
      <h2>{this.state.name}</h2>
      <ReactDataGrid
      onGridSort={this.handleGridSort}
      enableCellSelect={true}
      columns={this.state.column.map((elm, idx) => {
        return {key: elm.id.toString(), name: elm.name, width: 350, resizable: true, sortable: true, filterable: true }
      })}
      rowGetter={this.rowGetter}
      rowsCount={this.getSize()}
      minHeight={500}
      toolbar={<Toolbar enableFilter={true}/>}
      onAddFilter={this.handleFilterChange}
      onClearFilters={this.onClearFilters} />
      <h4> By Edward Goo </h4>
      </div>
    )
  }
}
