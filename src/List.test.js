import React from 'react'
import ReactDOM from 'react-dom';
import List from 'List.js'
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List
      key='0'
      header="Test Header"
      cards={[]}
      />, div);
  
    ReactDOM.unmountComponentAtNode(div);    
  });
  
  it ('renders this UI as expected', () => {
    const app = renderer.create(<List key='0' header='test header' cards={[]}/>).toJSON();
    expect(app).toMatchSnapshot();
  })