import React, { findDOMNode } from 'react';

var DataTable = React.createClass({
  componentDidUpdate: function() {
    var initAttrs = {
      info: this.props.info,
      lengthChange: this.props.lengthChange,
      pageLength: this.props.pageLength,
      paging: this.props.paging,
      searching: this.props.searching,
      ordering: this.props.ordering,
      initOrderCol: this.props.initOrderCol,
      initOrderDir: this.props.initOrderDir
    };

    if(this.props.ordering) {
      initAttrs.order = [[this.props.initOrderCol, this.props.initOrderDir]];
    }

    $(React.findDOMNode(this)).DataTable(initAttrs)
  },

  render: function() {
    return (
      <table className="table table-striped table-bordered table-hover ui-datatable" >
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
