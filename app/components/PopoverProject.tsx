import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverProjectProps {
  technologies: {
    fullstack: string[];
    frontend: string[];
    backend: string[];
    bdd: string[];
    orm: string[];
    devops: string[];
    tools: string[];
  };
}

const PopoverProject: React.FC<PopoverProjectProps> = ({ technologies }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Technologies</Button>
      </PopoverTrigger>
      <PopoverContent className="w-150  bg-slate-600">
        <div className="grid gap-4">
          {/* Section Fullsatck */}
          {technologies.fullstack.length > 0 && (
            <div>
              <h5 className="font-medium">Fullstack</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.fullstack.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.fullstack.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Section Frontend */}
          {technologies.frontend.length > 0 && (
            <div>
              <h5 className="font-medium">Frontend</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.frontend.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Backend */}
          {technologies.backend.length > 0 && (
            <div>
              <h5 className="font-medium">Backend</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.backend.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.backend.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Bdd */}
          {technologies.bdd.length > 0 && (
            <div>
              <h5 className="font-medium">Bdd</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.bdd.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.bdd.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section ORM */}
          {technologies.orm.length > 0 && (
            <div>
              <h5 className="font-medium">ORM</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.orm.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.orm.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section DevOps */}
          {technologies.devops.length > 0 && (
            <div>
              <h5 className="font-medium">DevOps</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.devops.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.devops.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Outils */}
          {technologies.tools.length > 0 && (
            <div>
              <h5 className="font-medium">Outils</h5>
              <div className="flex flex-wrap items-center gap-2">
                {technologies.tools.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Label>{tech}</Label>
                    {index < technologies.tools.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverProject;
