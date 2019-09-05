import React from "react";
import SplitPage from "../../components/SplitPage";
import CodeBlock from "../../components/CodeBlock";
import Markdown from "markdown-to-jsx";

// const md = `
// # struggling

// To remain relevant

// # a warrior

// ## struggling

// To remain consequential

// # Lorem

// ## ipsum

// <div>

// </div>

// Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.

// # PNEUMA

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus, placeat illum eos quod a? Esse nam excepturi molestias obcaecati. Quas itaque eligendi facere, doloribus quis omnis officiis alias tenetur.
// `;

export default function JSHome() {
    return (
        <SplitPage withSideNav>
            {/* <Markdown
                children={"# doesn't work very well"}
                options={{
                    overrides: {
                        code: {
                            component: CodeBlock
                        }
                    }
                }}></Markdown> */}
            <h1>doesn't work very well</h1>
        </SplitPage>
    );
}
