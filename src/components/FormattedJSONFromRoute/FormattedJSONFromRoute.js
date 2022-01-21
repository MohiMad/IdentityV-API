import React,{ useState, useEffect } from 'react';
import CodeBlock from '../CodeBlock/CodeBlock';

function FormattedJSONFromRoute(props) {
    const [output, setOutput] = useState("{}");

    useEffect(() => {
        fetch(props.route).then((res) => res.json?.())
        .then(data => {
            if (!data) return;

            setOutput(JSON.stringify(data, null, 4));
        })
    }, [props.route]);

    return (
        <CodeBlock className="language json" code={output} />
    );
}

export default FormattedJSONFromRoute;