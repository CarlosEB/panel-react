import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import TaskList from './components/taskList.jsx';

render(<TaskList/>, document.querySelector('#content'));