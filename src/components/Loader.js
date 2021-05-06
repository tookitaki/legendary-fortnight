import React from "react";
import {Spin} from 'antd';

const Loading = () => (<div style={ {
  position: 'fixed',
  top: '50%',
  left: '50%',
  color: '#3F516F',
  fontSize: '14px'
}}> <Spin size="large"/></div>);
export default Loading;