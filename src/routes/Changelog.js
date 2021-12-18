import React, { useState, useEffect } from 'react';
import CopyHrefIcon from '../components/CopyHrefIcon';

function Changelog(props) {
    const [changelogData, setChangelogData] = useState(
        {
            "1.0.2": [
                "Initial Release",
                "[Added] First features - Retreiving costume image and name",
                "[Added] Documentation page."
            ],
            "1.0.4": [
                "[Improved] The way the API handles requests, using parameters instead of query strings",
                "[Added] /Portrait endpoint",
                "[Added] /Aliases endpoint",
                "[Improved] Scraping the fandom to adapt to multiple types of pages",
                "[Added] More fields to /Skin endpoint output"
            ],
            "1.0.6": [
                "[Moved] All the endpoints to /api",
                "[Added] /Emote endpoint.",
                "[Improved] The UI for the documentation."
            ]
        });

    useEffect(() => {
        async function fetchData() {
            fetch("/public/json/changelog.json")
                .then((res) => res?.json?.())
                .then((data) => {
                    if (!data) return;

                    setChangelogData(data)
                });
        }

        fetchData();
    }, [])

    return (
        <section id="change-log">
            <h1><CopyHrefIcon value="changelog" />Changelog</h1>
            <ul>
                {Object.entries(changelogData).map(([version, changes]) => {
                    return (
                        <li key={version.toString()}>
                            {version}
                            <ul>
                                {changes.map((change) => {
                                    return (<li key={change.toString()}>{change}</li>)
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Changelog;