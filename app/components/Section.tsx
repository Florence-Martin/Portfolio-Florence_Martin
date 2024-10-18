import { cn } from "@/lib/utils"; // fonction utilitaire qui permet de combiner des classes CSS.
import { PropsWithChildren } from "react"; // type utilitaire qui inclut automatiquement la prop 'children' dans un composant.

// Composant prend des props (dont 'children' et 'className' en option).
export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
