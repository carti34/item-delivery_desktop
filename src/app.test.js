import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

describe('App UI tests', () => {
    let component;
    beforeEach(() => {
        component = renderer.create(<App />);
    });

    test('App is working', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('App has the first field equal title', () => {
        const instance = component.root;

        expect(instance.findAllByType("input")[0].props.name).toBe('title');
    });

    test('App has the second field equal msg', () => {
        const instance = component.root;

        expect(instance.findAllByType("input")[1].props.name).toBe('msg');
    });
});
