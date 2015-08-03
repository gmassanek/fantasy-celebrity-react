import React, { findDOMNode } from 'react';

var DataTable = React.createClass({

  componentDidUpdate: function() {
    var initAttrs = {};

    if(this.props.ordering) {
      initAttrs.order = [[this.props.initOrderCol, this.props.initOrderDir]];
    }

    $(React.findDOMNode(this)).DataTable(initAttrs)
  },

  render: function() {
    return (
      <table className="table table-striped table-bordered table-hover ui-datatable"
        data-data-data-length-change={this.props.lengthChange}
        data-data-info={this.props.info}
        data-data-paging={this.props.paging}
        data-data-page-length={this.props.pageLength}
        data-data-searching={this.props.searching} 
        data-ordering={this.props.ordering}
        data-order={this.props.order}
        data-searching={this.props.searching}
      >

        {this.props.children}
      </table>
    );
  }
})

DataTable.defaultProps = {
  info: false,
  lengthChange: false,
  pageLength: 10,
  paging: true,
  searching: false,
  ordering: false,
  initOrderCol: 0,
  initOrderDir: 'asc'
};

export default DataTable;
