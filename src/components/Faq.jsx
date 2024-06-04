import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
    return (
        <section className="container section">
            <h3 className="text-5xl max-w-2xl font-semibold mb-12">FAQs</h3>
            <div className="grid gap-6 lg:grid-cols-2">
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
            </div>
        </section>
    );
};

export default Faq;