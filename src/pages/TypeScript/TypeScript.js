import React from "react";
import Layout from "../../components/Layout";
import mrkdwn from "./TypeScript.md";

export default function TypeScript() {
    return <Layout withSideNav markdown={mrkdwn} />;
}
