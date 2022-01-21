import React from 'react';
import InlineCode from '../components/InlineCode/InlineCode';
import CopyHrefIcon from '../components/CopyHrefIcon/CopyHrefIcon';
import ParameterTable from '../components/ParameterTable/ParameterTable';
import { Link } from "react-router-dom";

function Query() {
    return (
        <section id="query">
            <h1><CopyHrefIcon />Query Parameters</h1>
            <p>The <InlineCode>/api</InlineCode> route will return a JSON object with different properties depending on the
                parameters. More detailed properties for each parameter can be found in the <Link className="hyperlink" to="/examples">examples</Link> page.</p>
            <ParameterTable />
        </section>
    );
}

export default Query;