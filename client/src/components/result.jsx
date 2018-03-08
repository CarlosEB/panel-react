import React from "react";

export default (props) => {
        
        const resultActions = props => {
                switch (props.state.id) {
                        case 'Accepted':
                                return (<div className="accepted-result">
                                            <div id="title">Change Accepted</div>
                                            <div id="info">Auto-Merged</div>
                                            <button onClick={() => {$("#myModal").modal();}} type="button" className="btn btn-info">Merged Build</button>
                                        </div>);
                                        
                        case 'Complete':
                                return (<div className="complete-result">
                                            <div id="title">Complete</div>
                                            <button onClick={() => {$("#myModal").modal();}} type="button" className="btn btn-info">Deploy</button>
                                            <br />to:&nbsp;
                                            <select><option>Development</option><option>Staging</option><option>Production</option></select>
                                        </div>);

                                
                        case 'Rejected':
                                const info = props.MetricTestPass == 0 ? "Metrics Reduction" : props.BuildPass == 0 ? "Build Error" : "N.A.";
                                return (<div className="rejected-result">
                                            <div id="title">Change Rejected</div>
                                            <div id="info">{info}</div>
                                            <button onClick={() => {$("#myModal").modal();}} type="button" className="btn btn-info">Find Issues</button>
                                        </div>);

                        default:
                                return <div>...</div>;
                }
        }
        
        return (<div className="box-no-border">
                   <div style={{fontWeight: 'bold'}}>Result:</div>
                   {resultActions(props)}
                </div>);
}