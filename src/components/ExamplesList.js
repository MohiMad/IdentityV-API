import React from 'react';
import PageAnchor from './PageAnchor';

class ExamplesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    toggleSubListVisibility = () => {
        this.setState({ visible: !this.state.visible });
    }


    render() {
        const subExamplePages = [
            { id: "#examples-skin", text: "Skins" },
            { id: "#examples-portraits", text: "Portraits" },
            { id: "#examples-accessory", text: "Accessories" },
            { id: "#examples-aliases", text: "Aliases" },
            { id: "#examples-emote", text: "Emotes" },
        ];
        
        return (
            <li className={(this.state.visible) ? "examples expanded" : "examples"}>
                <span className="examples" onClick={this.toggleSubListVisibility}>Examples</span>
                <ul className={(this.state.visible) ? "examples" : "examples hidden"}>
                    {
                        subExamplePages.map((page, index) => {
                            return (
                                <li key={index}>
                                    <PageAnchor id={page.id} text={page.text} />
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