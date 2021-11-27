import React from 'react';
import CopyHrefIcon from './CopyHrefIcon';
import SkinExamples from './SkinExamples';
import PortraitExamples from './PortraitExamples';
import AccessoryExamples from './AccessoryExamples';
import AliasesExamples from './AliasesExamples';
import EmoteExamples from './EmoteExamples';

function Examples() {
    return (
        <section id="examples">
            <h1><CopyHrefIcon value="examples" />Examples</h1>
            <SkinExamples />
            <PortraitExamples />
            <AccessoryExamples />
            <AliasesExamples/>
            <EmoteExamples/>
        </section>
    );
}

export default Examples;