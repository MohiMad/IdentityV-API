import React from 'react';
import CopyHrefIcon from '../../CopyHrefIcon/CopyHrefIcon';
import InlineCode from '../../InlineCode/InlineCode';
import FormattedJSONFromRoute from '../../FormattedJSONFromRoute/FormattedJSONFromRoute';

function EmoteExamples(props) {
    const COWBOY_DANCE_ROUTE = "/api/emote/dance/cowboy";
    const CONFUSED_EMOTE_ROUTE ="/api/emote/confused";

    return (
        <div id="examples-emote">
            <h2><CopyHrefIcon value="examples/emote"/>Emote Examples</h2>
            <p>Emotes are separated into two different groups, ones with series, and ones without. 
                Take <a className="hyperlink" href="https://id5.fandom.com/wiki/Dance" rel="noreferrer" target="_blank">Dance</a> and <a className="hyperlink" href="https://id5.fandom.com/wiki/Confused">Confused</a> emotes as an example. 
                Dance has different animations depending on the character, 
                while confused is generalised for male and female characters. Not to mention that the image/icon for the Dance emote is different for each factor (hunters and survivors).</p>
            <h3>Get information for an emote that belongs to a series:</h3>
            <p>Since <a className="hyperlink" href="https://id5.fandom.com/wiki/Dance" rel="noreferrer" target="_blank">Dance</a> was mentioned, we'll retreive Cowboy's using <a className="hyperlink" href={COWBOY_DANCE_ROUTE} rel="noreferrer" target="_blank">{COWBOY_DANCE_ROUTE}</a>.</p>
            <FormattedJSONFromRoute route={COWBOY_DANCE_ROUTE}/>
            <p>Note how the output has a new property: <InlineCode>preview</InlineCode>, if you visit its link, it'll display the dance animation.</p>
            <br/>
            <h3>Getting a general emote:</h3>
            <p>We'll use the <a className="hyperlink" href="https://id5.fandom.com/wiki/Confused">Confused</a> emote as an example. The corresponding route to retreive the data would be <a className="hyperlink" href={CONFUSED_EMOTE_ROUTE} rel="noreferrer" target="_blank">{CONFUSED_EMOTE_ROUTE}</a>. Note that the <InlineCode>:name</InlineCode> parameter is emitted in this example because the data returned is going to be the same regardless of the character.</p>
            <FormattedJSONFromRoute route={CONFUSED_EMOTE_ROUTE}/>
        </div>
    );
}

export default EmoteExamples;