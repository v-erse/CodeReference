import React, { useState, useEffect } from "react";
import SplitPage from "../../components/SplitPage";
import CodeBlock from "../../components/CodeBlock";
import SideNav from "../../components/SideNav";

import mrkdwn from "./JSHome.md";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import rehype2react from "rehype-react";
import slug from "rehype-slug";
import "../../tomorrow-hljs.css";

export default function JSHome(props) {
    const [content, setContent] = useState("");
    const [headerIds, setHeaderIds] = useState([]);

    const processor = unified()
        .use(markdown)
        .use(remark2rehype)
        .use(slug)
        .use(highlight)
        .use(rehype2react, {
            createElement: React.createElement,
            components: {
                pre: CodeBlock
            }
        });

    const getSetHeaders = (content) => {
        if (content.props) {
            let items = [];
            content.props.children.forEach((child) => {
                if (child.type === "h1" || child.type === "h2") {
                    items.push(child.props.id);
                }
            });
            setHeaderIds([...items]);
        }
    };

    useEffect(() => {
        fetch(mrkdwn)
            .then((response) => response.text())
            .then((text) => {
                setContent(processor.processSync(text).contents);
            });
    }, []);

    useEffect(() => {
        getSetHeaders(content);
    }, [content]);

    return (
        <SplitPage withSideNav right={<SideNav headerIds={headerIds} />}>
            {content}
        </SplitPage>
    );
}
