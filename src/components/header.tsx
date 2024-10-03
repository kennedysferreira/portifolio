import { Github, Linkedin, FileText } from "lucide-react";

import { LinkMenu } from "./linkMenu";

export function Header() {
  return (
    <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-200 sm:text-[44px]">
          Kennedy Ferreira
        </h1>
        <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Developer
        </h3>
        <p className="mt-4 max-w-xs leading-normal">
          I code beautifully, simple and efficient interfaces, and I love what I
          do.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <LinkMenu href={"#about"}>ABOUT</LinkMenu>
            </li>
            <li>
              <LinkMenu href={"#skills"}>SKILLS</LinkMenu>
            </li>
            <li>
              <LinkMenu href={"#certifications"}>CERTIFICATES</LinkMenu>
            </li>
            <li>
              <LinkMenu href={"#projects"}>PROJECTS</LinkMenu>
            </li>
            <li>
              <LinkMenu href={"#contact"}>CONTACT</LinkMenu>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-6">
        <li>
          <a href="https://github.com/kennedysferreira" target="_blank">
            <Github className="size-6 text-slate-400 hover:text-indigo-500 transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sferreirakennedy/"
            target="_blank"
          >
            <Linkedin className="size-6 text-slate-400 hover:text-indigo-500 transform duration-300" />
          </a>
        </li>
        <li >
          <a href="https://drive.google.com/file/d/1V68hdl_oKSjjb0yHkv6CnaplBI6aGMwq/view?usp=drive_link" target="_blank">
            <FileText className="size-6 text-slate-400 hover:text-indigo-500 transform duration-300" />
          </a>
        </li>
      </ul>
    </header>
  );
}
