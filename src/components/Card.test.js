import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
 
/* test('expect to render Card component', () => {
    render(<Card />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toEqual(1);
}) */

    test('expect to render Card component', () => {
        expect(render(<Card />)).toMatchSnapshot();
    })