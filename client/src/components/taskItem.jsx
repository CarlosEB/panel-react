import React from "react";

import Metric from "./metric.jsx";
import Build from "./build.jsx";
import UnitTest from "./unitTest.jsx";
import FunctionalTest from "./functionalTest.jsx";
import Result from "./result.jsx";
import Percentage from "./percentage.jsx";

export default (props) => {
    
    const panelHeader = (task, stateInfo) =>    <div className="row">
                                                    <div className="col-md-2">
                                                        {image}
                                                        {link}
                                                    </div>
                                                    <div className="col-md-1 vcenter">{task.Owner}</div>
                                                    <div className="col-md-2 vcenter">{task.TimeStarted}</div>
                                                    <div className="col-md-2 vcenter">{task.State}</div>
                                                    <div className="col-md-1 vcenter"><Percentage state={stateInfo.id} value={task.Metrics} check={task.MetricMaintainPass == 1 && task.MetricTestPass == 1 }/></div>
                                                    <div className="col-md-1 vcenter"><Percentage state={stateInfo.id} value={task.Build} check={task.BuildPass == 1 }/></div>
                                                    <div className="col-md-1 vcenter"><Percentage state={stateInfo.id} value={task.UTest} check={task.UTestPassed >0 }/></div>
                                                    <div className="col-md-1 vcenter"><Percentage state={stateInfo.id} value={task.FTest} check={task.FTestPassed >0 }/></div>
                                                </div>
    
        const panelBody = (task) => <div className="panel-body">
                                        <div style={{width: '100%'}}>
                                            <Metric {...task} state={stateInfo} />
                                            <Build {...task} state={stateInfo}/>
                                            <UnitTest {...task} state={stateInfo}/>
                                            <FunctionalTest {...task} state={stateInfo}/>
                                            <Result {...task} state={stateInfo}/>
                                        </div>
                                    </div>
        
    
        const enabled = (stateInfo, task) => stateInfo.enabled && (task.Metrics>0 && task.Build>0 && task.UTest>0 & task.FTest>0);

        const {task, stateInfo, image, id} = props;
    
        let link = enabled (stateInfo, task)
                    ? <a data-toggle="collapse" data-parent='#accordion' href={`#${id}`}>{task.TaskName}</a>
                    : <span style={{cursor: "not-allowed"}}>{task.TaskName}</span>;
        
        return (<div className="panel panel-default" id={`panel_${task.Id}`} style={{borderColor: stateInfo.colorBorder}}>
                  <div className={`panel-heading grad-${stateInfo.colorName}`}>
                    <h4 className="panel-title" style={{color: stateInfo.colorFontCode}}>
                        {panelHeader(task, stateInfo)}
                    </h4>
                  </div>
                  <div id={id} className={`panel-collapse collapse grad-${stateInfo.colorName}`}>
                    {panelBody(task)}
                  </div>
                </div>);
}