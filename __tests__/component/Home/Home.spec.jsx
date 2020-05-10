import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../app/renderer/components/Home/Home';

describe('should be rendered without error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
