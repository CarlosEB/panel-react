import React from "react";

import TaskBuild from './taskBuild.jsx';
import TaskFirewall from './taskFirewall.jsx';

import Modal from "./modal.jsx";

export default class TaskList extends React.Component {
    constructor() {
        super();
        
        // The initial state is configured in the component constructor.
        // Once the component is rendered, the componentDidMount callback function is executed.
        this.state = {tasks: []};
    }

    componentWillMount() {
        console.log('TaskList - componentWillMount');
    }
      
    // Once the component is mounted, an ajax call is executed to get all data
   componentDidMount() {
        console.log('TaskList - componentDidMount');
        $.getJSON( "tasks_data", function( data ) {
                this.setState({tasks: data}, this.bindPanel);
        }.bind(this));
    }
    
    
    bindPanel(){
        $('.panel').on('hidden.bs.collapse', function (e) {
           // alert('Hidden: ' + e.currentTarget.id);
           $('#'+ e.currentTarget.id + ' .panel-heading h4 .row ').find('.progress').css( "display", "block" );
        }.bind(this));


        $('.panel').on('show.bs.collapse', function (e) {
            //alert('Show: ' + e.currentTarget.id);
            $('#'+ e.currentTarget.id + ' .panel-heading h4 .row ').find('.progress').css( "display", "none" );
            
        }.bind(this));

    }
    

    render() {
        const {tasks} = this.state;
        const result = tasks.map( m => m.Task == 'B' ? <TaskBuild task={m}  key={m.Id}/> : <TaskFirewall task={m}  key={m.Id}/>)
        return (<div className="task-container">
                    <div className="row" style={{padding: '4px'}}>
                        <div className="col-md-2">Changelist / Build</div>
                        <div className="col-md-1">Owner</div>
                        <div className="col-md-2">Time Started</div>
                        <div className="col-md-2">State</div>
                        <div className="col-md-1">Metrics</div>
                        <div className="col-md-1">Build</div>
                        <div className="col-md-1">Unit Test</div>
                        <div className="col-md-2">Functional Test</div>
                    </div>
                                    
                    <div className="panel-group" id="accordion">
                        {result}
                    </div>
                    <Modal />
                </div>);
    }
}