import React from "react";

export default (props) => <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                            
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title">Information</h4>
                                </div>
                                <div className="modal-body">
                                  <p>The detailed information about the clicked item.</p>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>