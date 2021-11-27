import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import GettingStarted from './GettingStarted';
import Query from './Query';
import PortraitSeries from './PortraitSeries';
import Examples from './Examples';
import WarningBadge from './WarningBadge';
import InlineCode from './InlineCode';
import HelpPage from './HelpPage';
import Changelog from './Changelog';

import { PageContext } from '../App';

const pages = {
    "#getting-started": GettingStarted,
    "#query": Query,
    "#portrait-series": PortraitSeries,
    "#examples": Examples,
    "#change-log": Changelog,
    "#help": HelpPage
}

function SectionHolder() {
    const { page } = useContext(PageContext);
    const Page = pages[page];

    useEffect(() => {
        window.hljs.highlightAll();
    }, [page]);

    return (<>
        <div className="section-holder">
            <WarningBadge content={(<p>The API's endpoints has been moved from the root directory to <InlineCode>/api</InlineCode>.</p>)} />
            <Page/>
        </div>
        <Footer />
    </>
    );
}

export default SectionHolder;