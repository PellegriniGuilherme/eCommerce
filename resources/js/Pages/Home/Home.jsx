import React from 'react';
import Layout from '@/Layouts/Layout';
import Slide from './Partials/Slide';
import ProductCard from '@/Components/ProductCard';
import SlideProducts from './Partials/SlideProducts';

export default function Welcome(props) {

    let rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return (
        <Layout title="Início">
            <Slide/>
            <SlideProducts title="Lançamentos"/>
            <section className="p-4 md:p-8 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-10 md:grid-cols-4 md:gap-6">
                {
                    rows.map((item, index) => (
                        <ProductCard key={`${index}_prod`} />
                    ))
                }
            </section>
        </Layout>
    );
}
