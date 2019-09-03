import React from "react";
import { VerticalNav } from "../../components/VerticalNav";
import SplitPage from "../../components/SplitPage";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";

const input = `
# struggling
To remain relevant
# a warrior
## struggling
To remain consequential
# Lorem
## ipsum
<code>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
</code>
Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
`;

export default function JSHome() {
    return (
        <SplitPage
            middle={<ReactMarkdown source={input} escapeHtml={false} />}
        />
    );
}
