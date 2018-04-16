import React, { Component } from 'react';

class FlexibleCards extends Component {
    render() {
        return (
            <section className="element-wrapper">

                <div id="article-header-wrapper">
                    <h3>FLEXIBLE CARDS</h3>
                    <div id="crazy-wrap">
                        <div id="div-rule-top"> </div>
                        <div id="div-rule-bottom"></div>
                    </div>
                </div>
                <div className="card-holder">
                    <article className="flexible-card" id="first">
                        <h2>Lorem ipsum dolor sit</h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="second">
                        <h2>Lorem ipsum dolor sit</h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="third">
                        <h2>Lorem ipsum dolor sit</h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="fourth">
                        <h2>Lorem ipsum dolor sit</h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="fifth">
                        <h2>Lorem ipsum </h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="sixth">
                        <h2>Lorem ipsum </h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                    <article className="flexible-card" id="seventh">
                        <h2>Lorem ipsum dolor sit</h2>
                        <img className="placeholder" src="placeholder.png"/>
                    </article>
                </div>
                <div className="button-div">
                    <div id="view-code">
                        <a className="view-code" href="https://codepen.io/gnora/pen/wmRgwG">VIEW CODE</a>
                    </div>
                </div>
            </section>

        )
    }
}

export default FlexibleCards;