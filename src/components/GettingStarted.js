import React from 'react';
import PageImpl from './PageImpl';
import CodeBlock from './CodeBlock';
import CopyHrefIcon from './CopyHrefIcon';

class GettingStarted extends PageImpl {
    constructor(props) {
        super(props);

        this.axiosExampleCode = `
const axios = require("axios");
// Get data from https://id5.fandom.com/wiki/Whiplash
axios.get("https://idv-costume.herokuapp.com/api/skin/Ryuk").then(function (response) {
        // handle success
        console.log(response.data);

}).catch(function (error) {
        // handle error
        console.log(error);
});`;

        this.axiosExampleOutput = `{
    "status": 200,
    "name": "Ryuk",
    "wearer": "Evil Reptilian"
    "essence": "Death Note Crossover & Season 16 Essence 2",
    "description": "Ryuk's Costume",
    "price": "N/A",
    "rarity": "S-Tier (Gold)",
    "link": "https://static.wikia.nocookie.net/id5/images/b/bd/Ryuk.png"
}`
    }
    render() {
        return (
            <section id="getting-started">
                <h1><CopyHrefIcon/>Getting Started</h1>
                <p>To retreive information uisng the API, use the query parameters to specify what type of data you want.
                    The data returned is formatted in JSON.</p>
                <div className="nodejs-example">
                    <h2>Example using Node.JS and axios</h2>
                    <p>Any web-scraping 3rd party package works, in this example, we're using <a href="https://www.npmjs.com/package/axios">axios</a>
                    </p>
                    <CodeBlock className="language js" code={this.axiosExampleCode} />
                    <h4>Returns a JSON object if succeed:</h4>
                    <CodeBlock className="language json" code={this.axiosExampleOutput} />
                    <p>Data output based on the query is returned to the URL itself, e.g <a href="/api/skin/Ryuk"
                        target="_blank">/api/skin/Ryuk</a>.</p>
                </div>
            </section>
        );
    }
}

export default GettingStarted;