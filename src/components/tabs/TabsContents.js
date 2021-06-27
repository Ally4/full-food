import React, { Component } from 'react'

export default class TabsContents extends Component {
    render() {
        return (
            <div className="tabs">
                        <div className="tabs__sections__up">
        <div className="tabs__sections__up--1">
          <h5> MBAZA AI</h5>
          <h3> THE BEST PRODUCTIVY APP ON THE MARKET</h3>
          <h4>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.... </h4>
          {/* <div className="tabs__sections__up--1--button--left"><i className="fa fa-wrench"></i>&nbsp;&nbsp;&nbsp;VIEW PROJECT</div> */}
          <a href="#du" class="btn btn-danger btn-round">
                    <i class="material-icons">build</i> View Project
                  </a>
        </div>
        <div className="tabs__sections__up--2">
        <h5> MBAZA AI</h5>
          <h3> THE BEST PRODUCTIVY APP ON THE MARKET</h3>
          <h4>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.... </h4>
          <a href="collection.html" class="btn btn-info btn-round">
                    <i class="material-icons">build</i> View Project
                  </a>
        </div>
        </div>
        <div className="tabs__sections__down">
        <h5> MBAZA AI</h5>
          <h3> THE BEST PRODUCTIVY APP ON THE MARKET</h3>
          <h4>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.... </h4>
          <a href="#du" class="btn btn-warning btn-round">
                    <i class="material-icons">build</i> View Project
                  </a>
        </div>
        </div>
        )
    }
}
