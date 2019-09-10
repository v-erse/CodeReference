import React from "react";
import Layout from "../../components/Layout";
import mrkdwn from "./JSHome.md";

export default function JShome() {
    return <Layout withSideNav markdown={mrkdwn} />;
}
