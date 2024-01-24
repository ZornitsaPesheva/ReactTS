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
        if (this.divRef.current != null) {
            // how to create your own template
            OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
            OrgChart.templates.myTemplate.node =
                '<rect filter="url(#isla-shadow1)" x="0" y="0" rx="5" ry="5" height="120" width="250" fill="#FFF" stroke-width="1" stroke="#1EC9E8" ></rect> ';

            this.chart = new OrgChart(this.divRef.current, {
                nodes: this.props.nodes,
                template: "myTemplate",
                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                }
            });
        }
        
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}