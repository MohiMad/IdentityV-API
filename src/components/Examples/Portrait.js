import React from 'react';
import InlineCode from '../InlineCode';
import CodeBlock from '../CodeBlock';
import CopyHrefIcon from '../CopyHrefIcon';
import { Link } from "react-router-dom";


function PortraitExamples() {
    const cowboyPortraitData = `{
    "status": 200,
    "name": "Colorful Memory Cowboy",
    "price": "N/A",
    "description": "Colorful Memory Portraits Remember this moment and cherish these times in your heart.",
    "essence": "Rank Treasure & Memory Spheres",
    "link": "https://static.wikia.nocookie.net/id5/images/8/8d/ColorfulMemoryCowboy.png"
}`;

    return (
        <div id="examples-accessory">
            <h2><CopyHrefIcon value="examples/accessory" />Portrait Examples</h2>
            <p>Use the <InlineCode>/api/portrait</InlineCode> endpoint for accurate portrait data. Check <Link to="../../portrait-series">Portrait Series</Link> page to see the existing portrait series and their aliases.</p>
            <h3>Retreive data for <a href="https://id5.fandom.com/Colorful_Memory" rel="noreferrer" target="_blank">Cowboy's Colorful Memory</a> portrait:</h3>
            <CodeBlock className="language json" code={cowboyPortraitData} />
            <p>Visit <a href="/api/portrait/colorful_memory/cowboy" rel="noreferrer" target="_blank">/api/portrait/Colorful_Memory/Cowboy</a> for raw version.</p>
        </div>
    );
}

export default PortraitExamples;