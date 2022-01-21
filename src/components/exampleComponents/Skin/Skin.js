import React from 'react';
import InlineCode from '../../InlineCode/InlineCode';
import CodeBlock from '../../CodeBlock/CodeBlock';
import CopyHrefIcon from '../../CopyHrefIcon/CopyHrefIcon';

function SkinExamples() {
    const ryukData = `{
    "status": 200,
    "name": "Ryuk",
    "price": "N/A",
    "description": "Ryuk's Costume",
    "wearer": "Evil Reptilian",
    "essence": "Death Note Crossover & Season 16 Essence 2",
    "rarity": "S-Tier (Gold)",
    "link": "https://static.wikia.nocookie.net/id5/images/b/bd/Ryuk.png"
}`;

    const abyssData = `{
    "status": 200,
    "name": "\\"Abyss\\"",
    "price": "3 Mysterious S Costume Fragment",
    "description": "There is a thin line between good and evil. If you see \\"Me\\" when you open your eyes, then welcome to the deepest depths of evil.",
    "wearer": "\\"Nightmare\\"",
    "essence": "Time of Reunion & Season 18 Essence 3 & Season 19 Essence 1",
    "rarity": "S-Tier (Gold)",
    "link": "https://static.wikia.nocookie.net/id5/images/8/88/%22Abyss%22.png"
}`;

    return (
        <div id="examples-skin">
            <h2><CopyHrefIcon value="examples/skin" />Skin Examples</h2>
            <p>To get accurate skin data, use the <InlineCode>/api/skin</InlineCode> route.</p>
            <h3>Retreive data for Luchino's <a className="hyperlink" href="https://id5.fandom.com/ryuk" rel="noreferrer" target="_blank">Ryuk</a> costume:</h3>
            <CodeBlock className="language json" code={ryukData} />
            <p>Visit <a className="hyperlink" href="/api/skin/Ryuk" rel="noreferrer" target="_blank">/api/skin/Ryuk</a> for raw version.</p>
            <h3>The API adapts to all rarities of costumes and is updated as long as Identity V Fandom is still up to date.</h3>
            <p>Getting <a className="hyperlink" href={"https://id5.fandom.com/\"Abyss\""} rel="noreferrer" target="_blank">Nightmare's S</a> costume: </p>
            <CodeBlock className="language json" code={abyssData} />
            <p>Raw version at <a className="hyperlink" href={"/api/skin/\"Abyss\""} rel="noreferrer" target="_blank">/api/skin/"Abyss"</a>.</p>
        </div>
    );
}

export default SkinExamples;