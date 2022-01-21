import React from 'react';
import documentation from '../../documentation.json';
import InlineCode from '../InlineCode/InlineCode';
import './ParameterTable.css';

const tableFields = ["Parameter", "Type", "Description", "Required"];

function formatType(type) {
    if (Array.isArray(type)) {
        return type.map((subType, i) => {
            return (
                <div key={i} className="multi-description-holder">
                    <InlineCode>{subType}</InlineCode>
                    {(i !== type.length - 1) ? (<br />) : ""}
                </div>
            );
        });
    }
    return (<InlineCode>{type}</InlineCode>);
}

function formatDescription(description) {
    if (Array.isArray(description)) {
        return description.map((subDescription, i) => {
            return (<div key={i} className="multi-description-holder">
                <InlineCode>{subDescription.name} - {subDescription.description}</InlineCode>
                <br />
            </div>);
        });
    }

    return description;
}


const tableContent = documentation.parameters.map((param, i) => {
    const name = param.name;
    const type = formatType(param.type);
    const description = formatDescription(param.description);

    return (
        <tr key={i}>
            <td>{name}</td>
            <td>{type}</td>
            <td className="description">{description}</td>
            <td>{(param.isRequired) ? "Required" : "Optional"}</td>
        </tr>
    )
});

function ParameterTable() {
    return (
        <div className="table-holder">
            <table className="parameter-table">
                <thead>
                    <tr>
                        {
                            tableFields.map((field, i) => (<th key={i}>{field}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    );
}

export default ParameterTable;