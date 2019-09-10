import React from "react";
import Layout from "../../components/Layout";
import mrkdwn from "./Home.md";

export default function Home() {
    return <Layout markdown={mrkdwn} />;
}
