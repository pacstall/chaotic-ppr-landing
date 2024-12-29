// Imports
import React from 'react';
import Navbar from '../components/navbar';
import Content from '../components/content';

export default function Home({downloadLink}) {
    return (
        <>
            <Navbar />
            <Content downloadLink={downloadLink} />
        </>
    )
}

export async function getStaticProps() {
    const downloadLink = 'bash -c "$(curl -fsSL https://pacstall.dev/q/ppr)"';
    return {
        props: {
            downloadLink,
        },
    }
}
