// app/coffee/[slug]/page.tsx

import { notFound } from "next/navigation";
import { coffeeList } from "@/lib/coffee-data";
import CoffeeDetails from "@/components/coffee/CoffeeDetails";

type CoffeeDetailsPageProps = {
    params: {
        slug: string;
    };
};

export default function CoffeeDetailsPage({ params }: CoffeeDetailsPageProps) {
    const coffee = coffeeList.find((item) => item.slug === params.slug);

    if (!coffee) {
        notFound();
    }

    return (
        <main>
            <CoffeeDetails coffee={coffee} />
        </main>
    );
}