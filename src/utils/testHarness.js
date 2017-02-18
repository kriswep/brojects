export default window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : () => true,
        removeListener: () => true,
    };
};