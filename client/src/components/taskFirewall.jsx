import React from "react";

import StateConfig from "../util/stateConfig.js";
import TaskItem from "./taskItem.jsx";

export default class Firewall extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        
        const {task} = this.props;
        let stateInfo = StateConfig(task.State);
        let id = `collapse${task.Id}`;
                    
        const newProps = {
          task: task,
          stateInfo: stateInfo,
          id: id,
          image: <img src={`../../img/firewall_${stateInfo.colorName}.svg`}  className="task-img" />
        };
        return (<TaskItem {...newProps} />);
    }
}