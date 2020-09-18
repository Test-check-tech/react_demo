
import * as React from 'react';
import { ExcelExport, ExcelExportColumn, } from '@progress/kendo-react-excel-export';
import { process } from '@progress/kendo-data-query';
import itemTableData from './ItemTableData.json'
import '@progress/kendo-theme-default/dist/all.css'
import {  Button} from "reactstrap";



//const group = [ { field: 'RecorderLevel' } ];
// const data = process(products, {
//     group: group
// }).data;
// const aggregates = [ { field: 'UnitPrice', aggregate: 'sum' } ]; //sum,min,max,count,average
// const group = [ { field: 'Category.CategoryName' } ];
const data = process(itemTableData, {
}).data;
// const total = aggregateBy(itemTableData, aggregates);

//const data = products;



class ExportExcel extends React.Component {
      _exporter;
    export = () => {
        this._exporter.save();
    }
    render() {
        return (
            <div>
                <Button className="btn-round"
                color="primary" onClick={this.export}>Export</Button>

                <ExcelExport
                    data={data}
                    // group={group}
                    fileName="itemTableData.xlsx"
                    ref={(exporter) => { this._exporter = exporter; }}
                >
                    <ExcelExportColumn field="Item_Id" title="Item_Id" />
                    <ExcelExportColumn field="Item name" title="Item name"   />
                    <ExcelExportColumn field="Status" title="Status"   />
                    <ExcelExportColumn field="Organization" title="Organization" width={350} />
                </ExcelExport>
            </div>
        );
    }
}

export default ExportExcel
