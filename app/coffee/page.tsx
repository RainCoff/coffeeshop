// app/coffee/page.tsx
import CoffeeList from "@/components/coffee/CoffeeList";
import { coffeeList } from "@/lib/coffee-data";

export default function CoffeePage() {
    return (
        <main>
            <h1>Наш кофе</h1>
            <CoffeeList coffees={coffeeList} />
        </main>
    );
}