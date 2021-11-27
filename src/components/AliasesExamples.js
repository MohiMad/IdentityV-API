import React from 'react';
import CopyHrefIcon from './CopyHrefIcon';
import CodeBlock from './CodeBlock';

function AliasesExamples(props) {
    const vioAliases = `[
    "violinist",
    "antonio",
    "musician",
    "vio"
]`;

    return (
        <div id="examples-aliases">
            <h2><CopyHrefIcon value="examples-aliases"/>Aliases Examples</h2>
            <h3>Getting the available aliases for Antonio:</h3>
            <p>The data below is retreived from <a href="/api/aliases/hunters/violinist">/api/aliases/hunters/violinist</a>.</p>
            <CodeBlock className="language json" code={vioAliases} />
            <h3>Getting all characters' alisases: visit <a href="/api/aliases" rel="noreferrer" target="_blank">/api/aliases</a>.</h3>

        </div>
    );
}

export default AliasesExamples;