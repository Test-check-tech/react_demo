import React from "react";
// import { Buttons } from '@progress/kendo-react-buttons'
// import { NumericTextBox} from '@progress/kendo-react-inputs'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import itemTableData from './ItemTableData.json'
import '@progress/kendo-theme-default/dist/all.css'
import { filterBy } from '@progress/kendo-data-query'
// import ReactDOM from "react-dom";
import { process } from '@progress/kendo-data-query'
import dropdownFilterCell from "./DropDownFilterCell"
import ColumnMenuCheckboxFilter from './ColumnMenuCheckboxFilter';
// import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
// import { Checkbox } from '@progress/kendo-react-inputs';
import columns from './Column.js';
import CustomColumnMenu from './CustomColumnMenu';
// import resources from './Resource.js'
//import { ColumnMenuCheckboxFilter} from '@progress/kendo-react-grid';

const categories = Array.from(new Set(itemTableData.map(p => p.Status)));
const CategoryFilter = dropdownFilterCell(categories, 'Select category');
//console.log (CategoryFilterCell)


const createDataState = (dataState) => {
  return {
    result: process(itemTableData.slice(0), dataState),
    dataState: dataState
  }

}



const dataState = {
  sort: [{ field: "code", dir: "asc" }],
  take: 10,
  skip: 0
};

class CBGrid extends React.Component {


  lastSelectedIndex = 0;

  state = {

    dataState: dataState,
    data: itemTableData.map(dataItem => Object.assign({ selected: false }, dataItem)),
    filter: undefined,
    showdialog: false,
    columns: columns,
    // resources:resources,
    gridtype: this.props.name,
    type: ''

  };


  dataStateChange = (event) => {
    this.setState(createDataState(event.data));
    console.log(event.data);
  }

  filterChange = (event) => {
    this.setState({
      data: filterBy(itemTableData, event.filter),
      filter: event.filter
    });
  }

  selectionChange = (event) => {
    const data = this.state.data.map(item => {
      if (item.Item_Id === event.dataItem.Item_Id) {
        item.selected = !event.dataItem.selected;
      }
      return item;
    });
    this.setState({ data });
  }
  rowClick = event => {
    let last = this.lastSelectedIndex;
    const data = [...this.state.data];
    const current = data.findIndex(dataItem => dataItem === event.dataItem);

    if (!event.nativeEvent.shiftKey) {
      this.lastSelectedIndex = last = current;
    }

    if (!event.nativeEvent.ctrlKey) {
      data.forEach(item => (item.selected = false));
    }
    const select = !event.dataItem.selected;
    for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
      data[i].selected = select;
    }
    this.setState({ data });
  };

  headerSelectionChange = (event) => {
    const checked = event.syntheticEvent.target.checked;
    const data = this.state.data.map(item => {
      item.selected = checked;
      return item;
    });
    this.setState({ data });
  }


  getDialog = () => {
    this.setState({
      showdialog: !this.state.showdialog
    });

  }

  getCheckedData = (event) => {
    this.setState({
      selected: event.value
    });
    console.log(this.selected)

  }

  onColumnsSubmit = (columnsState) => {
    this.setState({
      columns: columnsState
    });
    console.log(this.columnsState)
  }
  // componentDidMount(){ 
  //   if(this.state.gridtype == "Column"){
  //     this.setState({
  //      type:this.state.gridtype
  //   });

  // }
  //  }


  render() {
    return (
      <div>
        <Grid
          pageable
          sortable
          filterable
          style={{ height: "400px" }}
          selectedField="selected"
          onSelectionChange={this.selectionChange}
          onHeaderSelectionChange={this.headerSelectionChange}
          onRowClick={this.rowClick}
          filter={this.state.filter}
          onFilterChange={this.filterChange}
          onDataStateChange={this.dataStateChange}
          reorderable

          data={process(this.state.data, this.state.dataState, this.state.result)}
          {...this.state.dataState}
          //data={this.state.datum}
          onDataStateChange={(e) => {
            this.setState({ dataState: e.data })
          }}
        >

          {(() => {
            switch (this.state.gridtype) {
              case "Column":
                return (this.state.columns.map((column, idx) => {
                  if (column.show && column.title === "Status") {
                    return <Column
                      //  key={idx}
                      field={column.field}
                      title={column.title}
                      filter={column.filter}
                      filterCell={CategoryFilter}

                    />
                  }
                  else if (column.show && column.title === "Organization") {
                    return <Column
                      // key={idx}
                      field={column.field}
                      title={column.title}
                      filter={column.filter}
                      columnMenu={ColumnMenuCheckboxFilter}

                    />

                  } else if (column.show) {
                    return (<Column
                      key={idx}
                      field={column.field}
                      title={column.title}
                      filter={column.filter}
                      columnMenu={
                        props =>
                          <CustomColumnMenu
                            {...props}
                            columns={this.state.columns}
                            onColumnsSubmit={this.onColumnsSubmit}

                          />
                      }
                    />)
                  } else if (column.show && column.field) {
                    return (<Column
                      filterable={false}
                    />)
                  }
                })
                )




              default: return ("")
            }
          })()}


        </Grid>
      </div>

    );
  }
}


export default CBGrid;

