export interface CardProps {
  code: string;
  description?: string;
}

export interface CupomProps {
  cards: CardProps[];
}

export default function Cupom({ cards }: CupomProps) {
  return (
    <div class="container mx-auto">
      <h2 class="text-8xl font-medium mb-3">Cupons</h2>
      <ul class="flex gap-4">
        {cards.map((card, index) => (
          <li
            key={index}
            class="border-2 border-dashed border-emerald-300 p-2 rounded-md min-w-72"
          >
            <h3 class="font-medium">{card.code}</h3>
            <p class="text-sm">{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
