import React from 'react';
import FooterColumn from './FooterColumn';
import PageAnchor from './PageAnchor';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <FooterColumn title="Topics" children={
                        <ul>
                            <li><PageAnchor id="#getting-started" text="Getting Started"/></li>
                            <li><PageAnchor id="#query" text="Query Parameters"/></li>
                            <li><PageAnchor id="#portrait-series" text="Portrait Series"/></li>
                            <li><PageAnchor id="#examples" text="Examples"/></li>
                            <li><PageAnchor id="#help" text="Help"/></li>
                        </ul>
                    } />
                    <FooterColumn title="Changelog" children={
                        <ul>
                            <li><PageAnchor id="#changelog" text="See changelog"/></li>
                        </ul>
                    } />

                    <FooterColumn title="Community" children={
                        <ul>
                            <li><a href="https://discord.gg/f5absw6Kcn">Discord</a></li>
                        </ul>
                    } />

                    <FooterColumn title="Contribute" children={
                        <ul>
                            <li><a href="https://github.com/MohiMad/IdentityV-Costume-API">Open Source Repository</a></li>
                        </ul>
                    } />
                </div>
            </div>
        </footer>
    );
}

export default Footer;