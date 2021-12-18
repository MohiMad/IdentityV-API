import React from 'react';
import { useParams } from "react-router-dom";

import Skin from '../components/Examples/Skin';
import Accessory from '../components/Examples/Accessory';
import Aliases from '../components/Examples/Aliases';
import Emote from '../components/Examples/Emote';
import Portrait from '../components/Examples/Portrait';

function ExamplePage() {
    const { examplePage } = useParams();
    const page = (examplePage.charAt(0).toUpperCase() + examplePage.slice(1).toLowerCase());
    const components = {Skin, Accessory, Aliases, Emote, Portrait};
    const Component = components[page];

    if(!Component) return false;

    return (
        <Component />
    );
}

export default ExamplePage;