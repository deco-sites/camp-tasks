export interface Props {
  text: string;
}

export default function Test({ text }: Props) {
  return <h1>{text}</h1>;
}
