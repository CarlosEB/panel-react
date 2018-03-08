import React from "react";

export default ({codeCoverage}) =>  <div className="percentage-covered-box">
                                        <div className="progress-bar-container">
                                            <span className="progress-bar-value" style={{color: codeCoverage >= 50 ? '#2B6B24' : '#791515'}} >{codeCoverage}%</span>
                                            <span className="progress-bar-text">code covered</span>
                                            <div className="progress-bar-completed" style={{width: `${codeCoverage}%`}}></div>
                                        </div>

                                    </div>