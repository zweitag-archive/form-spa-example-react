export default function wrapDisplayName(WrappedComponent, wrapperName) {
    const displayName = WrappedComponent.displayName ||  WrappedComponent.name ||  'Component';
    return `${wrapperName}(${displayName})`;
}
