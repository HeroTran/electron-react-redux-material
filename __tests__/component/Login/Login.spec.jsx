import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../app/renderer/components/AuthUser/Login';

describe('should be rendered without error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
