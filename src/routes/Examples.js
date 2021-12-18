import React from 'react';
import CopyHrefIcon from '../components/CopyHrefIcon';
import SkinExamples from '../components/Examples/Skin';
import PortraitExamples from '../components/Examples/Portrait';
import AccessoryExamples from '../components/Examples/Accessory';
import AliasesExamples from '../components/Examples/Aliases';
import EmoteExamples from '../components/Examples/Emote';

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