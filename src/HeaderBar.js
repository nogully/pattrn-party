import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <section className="element-wrapper">

        <div id="article-header-wrapper">
          <h3>HEADER BAR</h3>
          <div id="crazy-wrap">
            <div id="div-rule-top"> </div>
            <div id="div-rule-bottom"></div>
          </div>
        </div>
        <nav>
          <img className="round-placeholder" src="placeholder.png" />
          <ul>
            <li>Navigation Item 1</li>
            <li>Navigation Item 2</li>
            <li>Navigation Item 3</li>
          </ul>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search" />
        </nav>
       
        <div className="button-div">
          <div id="view-code">
            <a className="view-code" href="https://codepen.io/gnora/pen/wmRgwG">VIEW CODE</a>
          </div>
        </div>
      </section>

    )
  }
}

export default HeaderBar;