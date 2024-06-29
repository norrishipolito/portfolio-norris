import { AnimatedTooltip } from "../../components/tsx/tooltip";
import { technologies } from "./Technologies";

type Props = {};

function Technology({}: Props) {
  return (
    <div>
      <div className="mt-6 grid grid-cols-4 place-items-center gap-8 md:grid-cols-7">
        {technologies.map((tech, idx) => (
          <AnimatedTooltip
            key={idx}
            items={{
              href: tech.href,
              src: tech.src,
              name: tech.alt,
              darkSrc: tech.darkSrc,
              id: idx,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Technology;
