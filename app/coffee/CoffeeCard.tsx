import Link from 'next/link';
import Image from "next/image";
import type { Coffee} from "@/lib/coffee-data";

type CoffeeCardProps = {
    coffee: Coffee;
};

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
    return (
        <article className="coffee-card">
            <div className="coffee-card__image">
                {}
                {coffee.images[0] && (
                    <Image src={coffee.images[0]} alt={coffee.name} />
                )}
            </div>

            <div className="coffee-card__content">
                <h2>{coffee.name}</h2>
                <p>
                    Происхождение: <strong>{coffee.origin}</strong>
                </p>
                <p>Обжарка: {coffee.roastLevel}</p>
                <p>{coffee.description}</p>

                <Link href={`/coffee/${coffee.slug}`}>
                    Узнать больше
                </Link>
            </div>
        </article>
    );
}