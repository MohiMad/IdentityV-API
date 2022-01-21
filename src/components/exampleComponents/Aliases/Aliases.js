import React from 'react';
import CopyHrefIcon from '../../CopyHrefIcon/CopyHrefIcon';
import FormattedJSONFromRoute from '../../FormattedJSONFromRoute/FormattedJSONFromRoute';

function AliasesExamples(props) {
    const VIO_ALIASES_ROUTE = "/api/aliases/hunters/violinist";

    return (
        <div id="examples-aliases">
            <h2><CopyHrefIcon value="examples/aliases"/>Aliases Examples</h2>
            <h3>Getting the available aliases for Antonio:</h3>
            <p>The data below is retreived from <a className="hyperlink" href={VIO_ALIASES_ROUTE}>{VIO_ALIASES_ROUTE}</a>.</p>
            <FormattedJSONFromRoute route={VIO_ALIASES_ROUTE} />
            <h3>Getting all characters' alisases: visit <a className="hyperlink" href="/api/aliases" rel="noreferrer" target="_blank">/api/aliases</a>.</h3>

        </div>
    );
}

export default AliasesExamples;