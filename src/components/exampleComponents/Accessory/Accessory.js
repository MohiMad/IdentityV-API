import React from 'react';
import CopyHrefIcon from '../../CopyHrefIcon/CopyHrefIcon';
import InlineCode from '../../InlineCode/InlineCode';
import FormattedJSONFromRoute from '../../FormattedJSONFromRoute/FormattedJSONFromRoute';

function AccessoryExamples() {
    const ROSE_CANE_ROUTE = "/api/accessory/Rose_Cane";

    return (
        <div id="examples-accessory">
            <h2><CopyHrefIcon value="examples/accessory" />Accessory Examples</h2>
            <p>The <InlineCode>/api/accessory</InlineCode> only has one parameter, namenly <InlineCode>:name</InlineCode> which is the name of the accessory.</p>
            <h3>Retreive data for the Ripper's <a className="hyperlink" href="https://id5.fandom.com/wiki/Rose_Cane" rel="noreferrer" target="_blank">Rose Cane</a>.</h3>
            <p>As mentioned, the accessory route has one parameter which is the name, in this case, <InlineCode>:name</InlineCode> is <a className="hyperlink" href={ROSE_CANE_ROUTE} rel="noreferrer" target="_blank">Rose_Cane</a>.</p>
            <FormattedJSONFromRoute route={ROSE_CANE_ROUTE}/>
        </div>
    );
}

export default AccessoryExamples;