import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
type MyProps = OrgChart.options;
export default class Chart extends Component<MyProps> {
    private divRef: React.RefObject<HTMLInputElement>;
    chart: OrgChart | undefined;

    constructor(props: {}) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.divRef.current != null)
            this.chart = new OrgChart(this.divRef.current, {
                nodes: this.props.nodes,

                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                }
            });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}