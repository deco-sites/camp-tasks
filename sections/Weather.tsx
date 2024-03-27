import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
   temperature: Temperature | null;
   text?: string;
}

export default function Weather({ temperature, text }: Props) {
   return (
      <div className="container mx-auto">
         <div className="flex items-center justify-center my-4 gap-10">
            <p className="text-medium font-medium text-8xl">
               {temperature?.celsius}°
            </p>
            <p>{text}</p>
         </div>
      </div>
   );
}
