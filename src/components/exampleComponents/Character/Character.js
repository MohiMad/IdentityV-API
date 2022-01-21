import React from 'react';
import CopyHrefIcon from '../../CopyHrefIcon/CopyHrefIcon';
import InlineCode from '../../InlineCode/InlineCode';
import FormattedJSONFromRoute from '../../FormattedJSONFromRoute/FormattedJSONFromRoute';


function Character(props) {
    const VIO_ROUTE = "/api/character/violinist";
    
    return (
        <div id="examples-character">
            <h2><CopyHrefIcon value="examples/character" />Character Example</h2>
            <h3>Getting data for Antonio:</h3>
            <p>The data below is retreived from <a className="hyperlink" href={VIO_ROUTE}>{VIO_ROUTE}</a>.</p>
            <FormattedJSONFromRoute route={VIO_ROUTE}/>
            <p>Note that the routes <InlineCode>api/survivor</InlineCode> and <InlineCode>api/hunter</InlineCode> exist but will redirect you to <InlineCode>api/character</InlineCode> since the output for survivors is almost identical to hunters.</p>
        </div>
    );
}

export default Character;