import React, { useState, useEffect } from "react";
import SplitPage from "../../components/SplitPage";
import CodeBlock from "../../components/CodeBlock";
import ReactMarkdown from "react-markdown";

import mrkdwn from "./JSHome.md";

export default function JSHome(props) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(mrkdwn)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            });
    });

    return (
        <SplitPage withSideNav>
            <h1>doesn't work very well</h1>
            <CodeBlock value='asdasd' />
            <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
        </SplitPage>
    );
}
