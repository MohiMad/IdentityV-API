import React from 'react';
import CopyHrefIcon from './CopyHrefIcon';
import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';

function EmoteExamples(props) {
    const cowboyDance = `{
    "status": 200,
    "name": "Dance Cowboy",
    "price": "N/A",
    "description": "Dance Emote, exclusive to Cowboy",
    "essence": "Memory Spheres - Previous Seasons & Event Store & Abyss Treasure (Call of the Abyss III)",
    "rarity": "B-Tier (Gold Blueprint)",
    "link": "https://static.wikia.nocookie.net/id5/images/0/08/Dance.png",
    "preview": "https://static.wikia.nocookie.net/id5/images/1/1c/CowboyDance.gif"
}
    `;

    const confusedEmote = `{
    "status": 200,
    "name": "Confused",
    "price": "N/A",
    "description": "A motion that means confusion.",
    "essence": "Rank Treasures",
    "rarity": "D-Tier (Brown Blueprint)",
    "link": "https://static.wikia.nocookie.net/id5/images/6/68/Confused.png"
}
    `;

    return (
        <div id="examples-emote">
            <h2><CopyHrefIcon value="examples-emote"/>Emote Examples</h2>
            <p>Emotes are separated into two different groups, ones with series, and ones without. 
                Take <a href="https://id5.fandom.com/wiki/Dance" rel="noreferrer" target="_blank">Dance</a> and <a href="https://id5.fandom.com/wiki/Confused">Confused</a> emotes as an example. 
                Dance has different animations depending on the character, 
                while confused is generalised for male and female characters. Not to mention that the image/icon for the Dance emote is different for each factor (hunters and survivors).</p>
            <h3>Get information for an emote that belongs to a series:</h3>
            <p>Since <a href="https://id5.fandom.com/wiki/Dance" rel="noreferrer" target="_blank">Dance</a> was mentioned, we'll retreive Cowboy's using <a href="/api/emote/dance/cowboy" rel="noreferrer" target="_blank">/api/emote/dance/cowboy</a>.</p>
            <CodeBlock className="language json" code={cowboyDance}/>
            <p>Note how the output has a new property: <InlineCode>preview</InlineCode>, if you visit its link, it'll display the dance animation.</p>
            <br/>
            <h3>Getting a general emote:</h3>
            <p>We'll use the <a href="https://id5.fandom.com/wiki/Confused">Confused</a> emote as an example. The corresponding endpoint to retreive the data would be <a href="/api/emote/confused" rel="noreferrer" target="_blank">/api/emote/confused</a>. Note that the <InlineCode>:name</InlineCode> parameter is emitted in this example because the data returned is going to be the same regardless of the character.</p>
            <CodeBlock className="language json" code={confusedEmote}/>
        </div>
    );
}

export default EmoteExamples;