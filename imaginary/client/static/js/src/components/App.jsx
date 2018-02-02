/**
 * @author Victor I. Afolabi
 *
 * A.I. Engineer & Software developer
 * javafolabi@gmail.com
 *
 * Created on 01 February, 2018 @ 2:20 PM.
 * Copyright © 2018. Victor. All rights reserved.
 */

import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;