import React from 'react';
import CopyHrefIcon from '../components/CopyHrefIcon/CopyHrefIcon';
import SkinExamples from '../components/exampleComponents/Skin/Skin';
import PortraitExamples from '../components/exampleComponents/Portrait/Portrait';
import AccessoryExamples from '../components/exampleComponents/Accessory/Accessory';
import AliasesExamples from '../components/exampleComponents/Aliases/Aliases';
import EmoteExamples from '../components/exampleComponents/Emote/Emote';

function Examples() {
    return (
        <section id="examples">
            <h1><CopyHrefIcon value="examples" />Examples</h1>
            <SkinExamples />
            <PortraitExamples />
            <AccessoryExamples />
            <AliasesExamples />
            <EmoteExamples />
        </section>


    );
}

export default Examples;