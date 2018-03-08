import React from "react";

export default (props) => {
        
    return (<div onClick={() => {$("#myModal").modal();}} className="box-item box-green">
                   <div className="detail-header detail-header-green">Build</div>
                   <div className="computer">
                        <img src="../../img/pc.svg" />
                        <div>Debug</div>
                   </div>
                   <div className="computer">
                        <img src="../../img/pc.svg" />
                        <div>Release</div>
                   </div>
                   <div className="build-date">
                        {props.BuildDate}
                   </div>
            </div>);
}