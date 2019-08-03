import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
  public render(): JSX.Element | null {
    console.log('hello world');
    console.log('hello again');

    return <h1>Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById('page'));
