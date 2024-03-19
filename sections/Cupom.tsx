export interface CupomProps {
  title: string;
  code: string;
  description: string;
}

export default function Cupom({ title, code, description }: CupomProps) {
  return (
    <div id="cupom">
      <h2>{title}</h2>
      <p>{code}</p>
      <p>{description}</p>
    </div>
  );
}
