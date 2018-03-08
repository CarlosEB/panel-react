import React from "react";

import PercentageCovered from "./percentageCovered.jsx";
import Pie from "./pie.jsx";

export default (props) =><div onClick={() => {$("#myModal").modal();}} className="box-item box-green">
                            <div className="detail-header detail-header-green">{props.title}</div>
                            <div className="container-pie">
                               <Pie pieId={props.pieId} data={props.data}/>
                            </div>
                            <div className="text-test-passed" style={{color: props.passed<50 ? '#D80027' : props.passed>=50 && props.passed<70 ? '#FFDA44' : '#4C8A2E' }} >
                               {`${props.passed}%`}
                               <div>TEST PASSED</div>
                            </div>
                            <PercentageCovered codeCoverage={props.codeCoverage} />
                         </div>