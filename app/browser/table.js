import React from 'react';
import axios from 'axios';
import {Table, Column, Cell} from 'fixed-data-table';

export class DataTable extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    )
  }
}
