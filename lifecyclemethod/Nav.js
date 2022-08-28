import React, { Component } from 'react'

export default class Nav extends Component {
    componentWillUnmount(){
        console.log("components unAmount")
    }
  render() {
    return (
      <div>life cycle Methods used</div>
    )
  }
}

 