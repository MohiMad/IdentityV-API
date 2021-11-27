import React from 'react';
import InlineCode from './InlineCode';
import PageAnchor from './PageAnchor';
import CopyHrefIcon from './CopyHrefIcon';
import ParameterTable from './ParameterTable';

function Query(props) {

    return (
        <section id="query">
            <h1><CopyHrefIcon/>Query Parameters</h1>
            <p>The <InlineCode>/api</InlineCode> endpoint will return a JSON object with different properties depending on the
                parameters. More detailed properties for each parameter can be found in the <PageAnchor setPage={props.setPage} text="examples" id="#examples" /> page.</p>
            <ParameterTable />
        </section>
    );
}

export default Query;