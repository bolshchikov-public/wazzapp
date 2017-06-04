// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import AppShell from './AppShell/AppShell';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<AppShell />, document.getElementById('root'));
registerServiceWorker();
