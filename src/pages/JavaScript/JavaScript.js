import React from "react";
import Layout from "../../components/Layout";
import mrkdwn from "./JavaScript.md";

export default function JavaScript() {
    return <Layout withSideNav markdown={mrkdwn} />;
}
