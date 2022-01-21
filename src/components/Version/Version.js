import React, { useState, useEffect } from 'react';
import Utility from '../../Utility.js';

function Version() {
    const [version, setVersion] = useState("0.0.1");



    useEffect(() => {
        (async () => {
            const version = await Utility.getVersion();
            if(!version) return;
            setVersion(version);
        })();
    }, []);

    return (<span className="version" data-testid="version">{version}</span>);
}

export default Version;