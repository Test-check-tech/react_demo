import React, { StrictMode } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout'
import '@progress/kendo-theme-default/dist/all.css'
import CBGrid from '../components/Kendo/Grid'
import ExportExcel from '../components/Kendo/ExportExcel'
import {
    Button
} from "reactstrap";

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            view: false,
            valueorg: false,
            text: ""
        }
    }
    handleSelect = (e) => {
        this.setState({ selected: e.selected })
    }

    gettext(e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div className="content">
                <TabStrip selected={this.state.selected} onSelect={this.handleSelect} vertical={false}>
                    <TabStripTab title="Items" >
                       {/* <Button className="btn-round"
                           
                            color="primary"
                            type="submit" >Export
                            </Button> */}
                            <div style={{float:'right'}}>
                            <ExportExcel  ></ExportExcel></div>
                            <Button className="btn-round"
                            color="primary"
                            type="submit">Add Item
                            </Button>
                            <Button className="btn-round"
                            color="primary"
                            type="submit">Delete Item
                            </Button>
                        <CBGrid 
                        name="Column" />
                    </TabStripTab>
                    <TabStripTab title="Others" >
                    <h2>Upcoming</h2>
                    </TabStripTab>
                </TabStrip>
            </div>
        )
    }
}

export default Tab;
