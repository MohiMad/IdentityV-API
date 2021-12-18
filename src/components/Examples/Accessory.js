import React from 'react';
import CopyHrefIcon from '../CopyHrefIcon';
import InlineCode from '../InlineCode';
import CodeBlock from '../CodeBlock';

function AccessoryExamples() {
    const roseCaneData = `{
    "status": 200,
    "name": "Rose Cane",
    "price": "388 Echoes & 1314 Clues",
    "description": "Bring a gentleman's rose cane, and treat every fair lady with respect.",
    "wearer": "The Ripper",
    "rarity": "A-Tier (Purple)",
    "link": "https://static.wikia.nocookie.net/id5/images/f/f8/RoseCane.png"
}
    `;

    return (
        <div id="examples-accessory">
            <h2><CopyHrefIcon value="examples/accessory" />Accessory Examples</h2>
            <p>The <InlineCode>/api/accessory</InlineCode> only has one parameter, namenly <InlineCode>:name</InlineCode> which is the name of the accessory.</p>
            <h3>Retreive data for the Ripper's <a href="https://id5.fandom.com/wiki/Rose_Cane" rel="noreferrer" target="_blank">Rose Cane</a>.</h3>
            <p>As mentioned, the accessory endpoint has one parameter which is the name, in this case, <InlineCode>:name</InlineCode> is <a href="/api/accessory/Rose_Cane" rel="noreferrer" target="_blank">Rose_Cane</a>.</p>
            <CodeBlock code={roseCaneData}/>
        </div>
    );
}

export default AccessoryExamples;