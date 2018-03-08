import React from "react";
import TestResult from "./testResult.jsx";

export default (props) => {
        
        const data = {
                labels: [ "Passed", "Fail" ],
                datasets: [ { data: [props.FTestPassed, props.FTestFail], backgroundColor: [ "#559933", "#DB4343" ] } ] };
        
        const passed = parseInt(100 - ((props.FTestFail * 100) / props.FTestPassed)); 
        
        return <TestResult data={data} title="Functional Test" pieId={`FT${props.Id}`} passed={passed} codeCoverage={props.CodeCoverageF} />
}