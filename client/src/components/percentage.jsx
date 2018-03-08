import React from "react";

const getColor = props => (props.state == 'Running') 
                    ? "progress-bar progress-bar-info"
                    : props.check ? "progress-bar progress-bar-success" : "progress-bar progress-bar-danger";

export default (props) =>   <div className="progress">
                                <div className={getColor(props)} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`${props.value}%`}}>
                                </div>
                            </div>