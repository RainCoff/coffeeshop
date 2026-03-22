import type { Coffee } from "@/lib/coffee-data";
import CoffeeCard from "../../app/coffee/CoffeeCard";

type CoffeeListProps = {
    coffees: Coffee[];
};

export default function CoffeeList({ coffees }: CoffeeListProps) {
    return (
        <section className="coffee-list">
            {coffees.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </section>
    );
}