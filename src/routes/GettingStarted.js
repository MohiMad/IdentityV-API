import React from 'react';
import CodeBlock from '../components/CodeBlock/CodeBlock';
import CopyHrefIcon from '../components/CopyHrefIcon/CopyHrefIcon';
import WarningBadge from '../components/WarningBadge/WarningBadge';
import InlineCode from '../components/InlineCode/InlineCode';
import FormattedJSONFromRoute from '../components/FormattedJSONFromRoute/FormattedJSONFromRoute';

function GettingStarted(props) {
    const RYUK_ROUTE = "api/skin/Ryuk";
    const axiosExampleCode = `
const axios = require("axios");
// Get data from https://id5.fandom.com/wiki/Ryuk
axios.get("https://idv-costume.herokuapp.com/${RYUK_ROUTE}").then(function (response) {
        // handle success
        console.log(response.data);

}).catch(function (error) {
        // handle error
        console.log(error);
});`;

    return (
        <section id="getting-started">
            <WarningBadge content={(<p>The API's routes has been moved from the root directory to <InlineCode>/api</InlineCode>.</p>)} />

            <h1><CopyHrefIcon value="getting-started" />Getting Started</h1>
            <p>To retreive information uisng the API, use the query parameters to specify what type of data you want.
                The data returned is formatted in JSON.</p>
            <div className="nodejs-example">
                <h2>Example using Node.JS and axios</h2>
                <p>Any web-scraping 3rd party package works, in this example, we're using <a className="hyperlink" href="https://www.npmjs.com/package/axios">axios</a>
                </p>
                <CodeBlock className="language js" code={axiosExampleCode} />
                <h4>Returns a JSON object if succeed:</h4>
                <FormattedJSONFromRoute route={RYUK_ROUTE} />
                <p>Data output based on the query is returned to the URL itself, e.g <a className="hyperlink" href={RYUK_ROUTE}
                    rel="noreferrer" target="_blank">{RYUK_ROUTE}</a>.</p>
            </div>
        </section>
    );
}

export default GettingStarted;