import React, { Component } from 'react';

class Accordion extends Component {
  render() {
    return (
      <section className="element-wrapper">

        <div id="article-header-wrapper">
          <h3>ACCORDION TABS</h3>
          <div id="crazy-wrap">
            <div id="div-rule-top"> </div>
            <div id="div-rule-bottom"></div>
          </div>
        </div>

        <article className="accordion-tabs"> 
          <div className="tabs">
            <input type="radio" name="tabs" id="tabone" checked="checked" />
            <label htmlFor="tabone">Tab 1</label>
            <div className="tab">
              <div id="tab-content-wrapper">
                <img className="placeholder-image"/>
                <div id="tab-text-wrapper">
                  <h4>Book 1</h4> 
                  <p>Arma virumque canō, Trōiae quī prīmus ab orīs, Ītaliam, fātō profugus, Lāvīniaque vēnit lītora, multum ille et terrīs iactātus et altō vī superum saevae memorem Iūnōnis ob īram; multa quoque et bellō passūs, dum conderet urbem, inferretque deōs Latiō, genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae.
                  </p>
                  <p>Mūsa, mihī causās memorā, quō nūmine laesō, quidve dolēns, rēgīna deum tot volvere cāsūs īnsīgnem pietāte virum, tot adīre labōrēs impulerit. Tantaene animīs caelestibus īrae?
                  </p>
                </div>
              </div>            
            </div>
            
            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo">Tab 2</label>
            <div className="tab">
              <div id="tab-content-wrapper">
                <img className="placeholder-image"/>
                <div id="tab-text-wrapper">
                  <h4>Book 2</h4> 
                  <p>Arma virumque canō, Trōiae quī prīmus ab orīs, Ītaliam, fātō profugus, Lāvīniaque vēnit lītora, multum ille et terrīs iactātus et altō vī superum saevae memorem Iūnōnis ob īram; multa quoque et bellō passūs, dum conderet urbem, inferretque deōs Latiō, genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae.
                  </p>
                  <p>Mūsa, mihī causās memorā, quō nūmine laesō, quidve dolēns, rēgīna deum tot volvere cāsūs īnsīgnem pietāte virum, tot adīre labōrēs impulerit. Tantaene animīs caelestibus īrae?
                  </p>
                </div>
              </div>
            </div>
            
            <input type="radio" name="tabs" id="tabthree" />
            <label htmlFor="tabthree">Tab 3</label>
            <div className="tab">
              <div id="tab-content-wrapper">
                <img className="placeholder-image"/>
                <div id="tab-text-wrapper">
                  <h4>Book 3</h4> 
                  <p>Arma virumque canō, Trōiae quī prīmus ab orīs, Ītaliam, fātō profugus, Lāvīniaque vēnit lītora, multum ille et terrīs iactātus et altō vī superum saevae memorem Iūnōnis ob īram; multa quoque et bellō passūs, dum conderet urbem, inferretque deōs Latiō, genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae.
                  </p>
                  <p>Mūsa, mihī causās memorā, quō nūmine laesō, quidve dolēns, rēgīna deum tot volvere cāsūs īnsīgnem pietāte virum, tot adīre labōrēs impulerit. Tantaene animīs caelestibus īrae?
                  </p>
                </div>
              </div>
            </div>

            <input type="radio" name="tabs" id="tabfour" />
            <label htmlFor="tabfour">Tab 4</label>
            <div className="tab">
              <div id="tab-content-wrapper">
                <img className="placeholder-image"/>
                <div id="tab-text-wrapper">
                  <h4>Book 4</h4> 
                  <p>Arma virumque canō, Trōiae quī prīmus ab orīs, Ītaliam, fātō profugus, Lāvīniaque vēnit lītora, multum ille et terrīs iactātus et altō vī superum saevae memorem Iūnōnis ob īram; multa quoque et bellō passūs, dum conderet urbem, inferretque deōs Latiō, genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae.
                  </p>
                  <p>Mūsa, mihī causās memorā, quō nūmine laesō, quidve dolēns, rēgīna deum tot volvere cāsūs īnsīgnem pietāte virum, tot adīre labōrēs impulerit. Tantaene animīs caelestibus īrae?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </article>
        <div className="button-div">
          <div id="view-code">
            <a className="view-code" href="https://codepen.io/gnora/pen/geZLJO">VIEW CODE</a>
          </div>
        </div>
      </section>

    )
  }
}

export default Accordion;