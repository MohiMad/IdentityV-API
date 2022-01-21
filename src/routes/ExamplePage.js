import React from 'react';
import { useParams } from "react-router-dom";

import Skin from '../components/exampleComponents/Skin/Skin';
import Accessory from '../components/exampleComponents/Accessory/Accessory';
import Aliases from '../components/exampleComponents/Aliases/Aliases';
import Emote from '../components/exampleComponents/Emote/Emote';
import Portrait from '../components/exampleComponents/Portrait/Portrait';
import Character from '../components/exampleComponents/Character/Character';


function ExamplePage() {
    const { examplePage } = useParams();
    const page = (examplePage.charAt(0).toUpperCase() + examplePage.slice(1).toLowerCase());
    const components = {Skin, Accessory, Aliases, Emote, Portrait, Character};
    const Component = components[page];
    
    if(!Component) return false;

    return (
        <Component />
    );
}

export default ExamplePage;