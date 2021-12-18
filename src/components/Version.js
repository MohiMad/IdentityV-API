import React, { useState, useEffect } from 'react';

function Version() {
    const [version, setVersion] = useState("");

    useEffect(() => {
        async function getVersion() {
            fetch("/version").then((res) => res.json?.())
                .then((res) => {
                    if (!res) return;

                    setVersion(res.version);
                });
        }
        
        getVersion();
    }, []);

    return (<span className="version">{version}</span>);
}

export default Version;