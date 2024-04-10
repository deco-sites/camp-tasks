/**
 * @title {{code}}
 */
export interface CardProps {
  code: string;
  description?: string;
}

export interface CupomProps {
  cards: CardProps[];
}

export default function Cupom({ cards }: CupomProps) {
  return (
    <div class="container px-4">
      <h2 class="text-2xl font-medium mb-3">Cupons Disponíveis</h2>
      <ul class="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <li
            key={index}
            class="shadow rounded-md p-3 min-w-full sm:min-w-40"
          >
            <h3 class="font-medium text-zinc-500">{card.code}</h3>
            <p class="text-sm text-zinc-500">{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
