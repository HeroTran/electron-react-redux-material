import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../app/renderer/components/Home/Home';

let renderComponent;
beforeEach(() => {
  renderComponent = shallow(<Home />);
});

describe('should be rendered without error', () => {
  it('rendering root component', () => {
    expect(renderComponent).toMatchSnapshot();
  });
});
