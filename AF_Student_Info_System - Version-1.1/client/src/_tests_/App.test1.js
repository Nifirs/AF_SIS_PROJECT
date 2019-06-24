import React from 'react';
import Login from '../components/Login';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
    test('testing app button', () => {
    let tree = create(<Login />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})