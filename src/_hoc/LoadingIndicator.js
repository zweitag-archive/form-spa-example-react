import React from 'react';

import wrapDisplayName from '@/_helpers/wrapDisplayName';

export default function LoadingIndicator(Component) {
    function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
            return <Component { ...props } />;
        }

        return <div><h2>Loading</h2></div>;
    };
    EnhancedComponent.displayName = wrapDisplayName(Component, 'LoadingIndicator');

    return EnhancedComponent;
}
