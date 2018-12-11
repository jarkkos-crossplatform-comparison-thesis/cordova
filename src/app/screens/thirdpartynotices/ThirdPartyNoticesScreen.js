import React, { Component } from 'react';

import AppBody from "app/components/appBody";
import 'app/App.css';

class ThirdPartyNoticesScreen extends Component {
  render() {
    return (
      <AppBody>
        <div className="horizontal-margin top-margin">
          <div>
            <h3>Cordova</h3>
            <a href="https://cordova.apache.org/">https://cordova.apache.org/</a>
          </div>

          <div>
            <h3>Listview images from Caltech 101 dataset</h3>
            L. Fei-Fei, R. Fergus and P. Perona. Learning generative visual models from few training examples: an incremental Bayesian approach tested on 101 object categories. IEEE. CVPR 2004, Workshop on Generative-Model Based Vision. 2004
          </div>

          <div>
            <h3>Placeholder texts generated at <a href="https://www.lipsum.com/">www.lipsum.com/</a></h3>
          </div>
        </div>
      </AppBody>
    );
  }
}

export default ThirdPartyNoticesScreen;
