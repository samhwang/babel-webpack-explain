import { Component } from 'react';

class ComponentB extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>This is also a React component</h1>
        <p>This is not a regular JS file, because it also contains JSX.</p>
      </div>
    );
  }
}

export default ComponentB;
