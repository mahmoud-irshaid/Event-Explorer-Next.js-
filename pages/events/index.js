import Image from 'next/image';
import React from 'react'
import EventsPage from '../../src/components/events/events-page';

export default function index({ data }) {
    return (
        <EventsPage data={data} />
    )
}


export const getStaticProps = async (ctx) => {

    const { events_categories } = await import('../../data/data.json')

    console.log(events_categories);
    return {
        props: {
            data: events_categories
        }
    }
}

