import React, { useState, useEffect } from 'react';
import InlineCode from '../components/InlineCode';
import CopyHrefIcon from '../components/CopyHrefIcon';

function PortraitSeries() {
    const [seriesTableCells, setSeriesTableCells] = useState(
        {
            "Black-and-White_(Portrait)": [
                "black_and_white",
                "blackandwhite",
                "bnw"
            ],
            "Colorful_Memory": [
                "colorfulmemory",
                "colorful_memory"
            ]
        });

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/aliases/portraits")
            if (!res) return;

            const data = await res.json();


            setSeriesTableCells(data);
        }

        fetchData();
    }, []);

    return (
                <section id="portrait-series">
                    <h1><CopyHrefIcon />Possible Portrait Series</h1>
                    <h4>This section is dedicated to the /api/portrait endpoint where it uses a <InlineCode>:series</InlineCode> parameter. This parameter is explained in this section.</h4>
                    <p>Portrait series are groups that consists of non-speacial portraits. They're all summed up in one page in the Identity V Fandom,
                        see the <a href="https://id5.fandom.com/wiki/Colorful_Memory" rel="noreferrer" target="_blank">colorful memory series'</a> page for reference.
                    </p>
                    <p>Note that the API is flexible with the :series parameter, meaning that you don't have to write it the way the fandom requires you to.
                        For instance, using "Black_and_white" is enough instead of "Black-and-White_(Portrait)"</p>
                    <h3>The table below includes some of the Portrait Series in the IdentityV Fandom and their corresponding valid aliases for the API.</h3>
                    <div className="table-holder">
                        <table>
                            <thead>
                                <tr>
                                    <th>Series</th>
                                    <th>Valid API Aliases</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(seriesTableCells).map(([series, aliases], i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{series}</td>
                                                <td>{aliases.join(", ")}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
    );
}

export default PortraitSeries;