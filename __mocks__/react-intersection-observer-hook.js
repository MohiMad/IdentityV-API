import React from 'react';

module.exports = {
    useIntersectionObserver: () => ([React.useRef(null), {entry: true}])
}
