import { GridColumnMenuCheckboxFilter} from '@progress/kendo-react-grid';
import itemTableData from './ItemTableData.json'
import React,{Component} from 'react'
import columns from './Column.js';



 class ColumnMenuCheckboxFilter extends Component {
    render() {
        return (
            <div>
                <GridColumnMenuCheckboxFilter {...this.props} data={itemTableData} expanded={true}/>
            </div>
        );
    }
}
export default ColumnMenuCheckboxFilter;