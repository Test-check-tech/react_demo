import React from 'react';
import {
    GridColumnMenuFilter,
    GridColumnMenuCheckboxFilter
} from '@progress/kendo-react-grid';
import itemTableData from './ItemTableData.json'


 class ColumnMenuCheckboxFilter extends React.Component {
    render() {
        return (
            <div>
                <GridColumnMenuCheckboxFilter {...this.props} data={itemTableData} expanded={true}/>
            </div>
        );
    }
}
export default ColumnMenuCheckboxFilter