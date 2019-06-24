import React from 'react';
import ButtonGrp from '../components/BtnGroup';
import { create } from 'react-test-renderer';

describe('My snapshot test for buttons',()=>{
    test('testing app button', () => {
    let tree = create(<ButtonGrp />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})