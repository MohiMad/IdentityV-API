import React from 'react';
import { NavLink } from "react-router-dom";

class ExamplesList extends React.Component {
    constructor(props) {
        super(props);

        this.subList = React.createRef();

        this.state = {
            visible: false
        };
    }

    toggleSubListVisibilityAndAnimate = () => {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const subExamplePages = [
            { id: "skin", text: "Skins" },
            { id: "portrait", text: "Portraits" },
            { id: "accessory", text: "Accessories" },
            { id: "aliases", text: "Aliases" },
            { id: "emote", text: "Emotes" },
            { id: "character", text: "Characters" },
        ];
        
        return (
            <li className={(this.state.visible) ? "examples expanded" : "examples"}>
                <span className="examples" onClick={this.toggleSubListVisibilityAndAnimate}>Examples</span>
                <ul className={(this.state.visible) ? "examples" : "examples hidden"} >
                    {
                        subExamplePages.map((page) => {
                            return (
                                <li key={page.id}>
                                    <NavLink to={`examples/${page.id}`}>{page.text}</NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
            </li>
        );
    }
}

export default ExamplesList;