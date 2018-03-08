import React from "react";

export default (props) => {
        
        const color = props.MetricTestPass == 0 || props.MetricMaintainPass == 0 ? "red" : "green";
        
        return (<div onClick={() => {$("#myModal").modal();}} className={`box-item box-${color}`}>
                       <div className={`detail-header detail-header-${color}`}>Metrics</div>
                       <div className="arrow-float">
                            <div className={props.MetricTestPass == 1 ? "up-arrow-green" : "down-arrow-red" }>{props.MetricTest}</div>
                            <div>Test</div>
                       </div>
                       <div className="arrow-float">
                            <div className={props.MetricMaintainPass == 1 ? "up-arrow-green" : "down-arrow-red" }>{props.MetricMaintain}</div>
                            <div>Maintainnability</div>
                       </div>
                  
                       <div className="arrow-float">
                            <div className="right-arrow-yellow">{props.MetricSecurity}</div>
                            <div>Security</div>
                       </div>
                       <div className="arrow-float">
                            <div className="right-arrow-yellow">{props.MetricWork}</div>
                            <div>Workmanship</div>
                       </div>
                </div>);
}