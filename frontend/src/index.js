import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { StoreService } from './store/store'

ReactDOM.render(<Provider store={StoreService.storeInstance}><HashRouter><App/></HashRouter></Provider>, document.getElementById('root'));
