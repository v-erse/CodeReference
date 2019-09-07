import React, { useState, useEffect } from "react";
import SplitPage from "../../components/SplitPage";
import CodeBlock from "../../components/CodeBlock";
// import ReactMarkdown from "react-markdown";
// import Unified from "unified";
// import RemarkRehype from "remark-rehype";

import mrkdwn from "./JSHome.md";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import highlight from "rehype-highlight";
import rehype2react from "rehype-react";
import refractor from "refractor";
import rehype from "rehype";
import "../../prism.css";

const test = `# hello there`;

export default function JSHome(props) {
    const [content, setContent] = useState("");

    const processor = unified()
        .use(markdown)
        .use(remark2rehype)
        .use(highlight)
        .use(rehype2react, {
            createElement: React.createElement,
            components: {
                pre: CodeBlock
            }
        });

    useEffect(() => {
        fetch(mrkdwn)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            });
    }, []);

    var nodes = refractor.highlight(
        'const hello = () => {return "world"};',
        "js"
    );
    var html = rehype()
        .stringify({ type: "root", children: nodes })
        .toString();

    return (
        <SplitPage withSideNav>
            <h1>doesn't work very well</h1>
            {processor.processSync(content).contents}
            <CodeBlock>
                <div
                    dangerouslySetInnerHTML={{
                        __html: html
                    }}
                />
            </CodeBlock>
            {/* <CodeBlock value='asdasd' /> */}
            {/* <ReactMarkdown
                source={content}
                renderers={{
                    root: (props) => <SplitPage withSideNav {...props} />,
                    code: CodeBlock
                }}
            /> */}
        </SplitPage>
    );
}
