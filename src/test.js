import React, { Component } from 'react';
export default class Test extends Component {
    componentDidMount() {
      console.log('I was triggered during componentDidMount')
    }
  
    render() {
      console.log('I was triggered during render')
      return () => {
      }
    }
  }