import React from 'react';
import FooterColumn from './FooterColumn';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <FooterColumn title="Topics">
                        <ul>
                            <ul>
                                <li><Link to="/">Getting Started</Link></li>
                                <li><Link to="/query">Query Parameters</Link></li>
                                <li><Link to="/portrait-series">Portrait Series</Link></li>
                                <li><Link to="/examples">Examples</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </ul>
                    </FooterColumn>
                    <FooterColumn title="Changelog">
                        <ul>
                            <li><Link to="/changelog">See Changelog</Link></li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn title="Community">
                        <ul>
                            <li><a href="https://discord.gg/f5absw6Kcn">Discord</a></li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn title="Contribute">
                        <ul>
                            <li><a href="https://github.com/MohiMad/IdentityV-Costume-API">Open Source Repository</a></li>
                        </ul>
                    </FooterColumn>
                </div>
            </div>
        </footer>
    );
}

export default Footer;