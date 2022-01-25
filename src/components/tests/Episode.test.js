import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testData = {
    id: 1,
    image: 'image',
    name: 'name',
    season: 1,
    number: 1,
    summary: 'summary',
    runtime: 1,
};

const testDataWithoutImage = {
    id: 1,
    image: null,
    name: 'name',
    season: 1,
    number: 1,
    summary: 'summary',
    runtime: 1,
};

test('renders without error', () => {
    render(<Episode episode={testData} />);
});

test('renders the summary test passed as prop', () => {
    render(<Episode episode={testData} />);

    const summary = screen.queryByText(/summary/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent('summary');
});

test('renders default image when image is not defined', () => {
    render(<Episode episode={testDataWithoutImage} />);
    
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument();
});