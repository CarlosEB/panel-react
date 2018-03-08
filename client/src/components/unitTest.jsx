import React from "react";
import TestResult from "./testResult.jsx";

export default (props) => {
        
        const data = {
                labels: [ "Passed", "Fail" ],
                datasets: [ { data: [props.UTestPassed, props.UTestFail], backgroundColor: [ "#559933", "#DB4343" ] } ] };
        
        const passed = parseInt(100 - ((props.UTestFail * 100) / props.UTestPassed)); 
        
        return <TestResult data={data} title="Unit Tests" pieId={`UT${props.Id}`} passed={passed} codeCoverage={props.CodeCoverageU} />
}