import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';
 

test('expect to render Card component', () => {
        const mockRobots = [
            {
                id: 1,
                name: "John Snow",
                email: "john@gotmail.com"
            }
        ]
        expect(render(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})