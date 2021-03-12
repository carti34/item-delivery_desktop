import React from 'react';
import PersonCard from './index';
import renderer from 'react-test-renderer';

test('PersonCard is working', () => {
    const component = renderer.create(<PersonCard />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});