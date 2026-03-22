// lib/coffee-data.ts

export type Coffee = {
    id: number;
    slug: string;
    name: string;
    origin: string;
    roastLevel: string;
    description: string;
    images: string[];
};

export const coffeeList: Coffee[] = [
    {
        id: 1,
        slug: "ethiopia-yirgacheffe",
        name: "Эфиопия Иргачеффе",
        origin: "Эфиопия",
        roastLevel: "Средняя",
        description: "Яркий вкус с цветочными нотами и цитрусовой кислотностью.",
        images: ["/images/coffee/ethiopia-1.jpg", "/images/coffee/ethiopia-2.jpg"],
    },
    {
        id: 2,
        slug: "brazil-santos",
        name: "Бразилия Сантос",
        origin: "Бразилия",
        roastLevel: "Средне-темная",
        description: "Сбалансированный вкус с ореховыми и шоколадными нотами.",
        images: ["/images/coffee/brazil-1.jpg"],
    },
];