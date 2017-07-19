import React from 'react';

export default function LoadingIndicator(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
            return <Component { ...props } />;
        }

        return <div><h2>Loading</h2></div>;
    };
}
