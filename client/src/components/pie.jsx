import React from 'react';
import Chart from 'chart.js'

export default class PieChart extends React.Component {

    generateId() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    constructor() {
        super();
        //this.state = {id: this.props.pieId};
    }

   componentDidMount() {
        let {data} = this.props;
        let ctx = document.getElementById(this.props.pieId);
        
        Chart.defaults.global.legend.display = false;
        
        if (ctx == undefined) return;
            
        let pie = new Chart(ctx, { type: 'pie', data: data });
    }
    

    render() {
        return (<div>
                 <canvas id={this.props.pieId} width="110" height="110"></canvas>
                </div>);
    }
}