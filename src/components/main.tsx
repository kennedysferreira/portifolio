import { Cards } from "./cards";
import { StickyTitle } from "./stickyTitle";
import { Tag } from "./tag";
import { Form } from "./form";
import AmA from "../assets/AmA.png";
import FoodExplorer from "../assets/FoodExplorer.png";
import Inorbit from "../assets/inorbit.png";
import Confraria from "../assets/confraria.png"
import { Certificates } from "./certificates";

export function Main() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 ">
      <StickyTitle>About</StickyTitle>
      <section
        id="about"
        className="mb-14 space-y-4 scroll-mt-16 md:mb-22 lg:mb-32 lg:scroll-mt-24"
      >
        <p>
          I'm <span className="text-slate-200">a full-stack developer</span>,
          based in Setúbal, Portugal. I have a passion for technology that
          drives my continuous learning.
        </p>
        <p>
          I am constantly developing my skills by{" "}
          <span className="text-slate-200">hands-on practice</span>, and I'am completing my Bachelor s in Software
          Analysis and Development. This allows me{" "}
          <span className="text-slate-200">to adapt quickly to new tools</span>.
          I thrive in dynamic environments, viewing challenges as opportunities
          for growth. Collaboration is essential. I prioritize empathy and
          communication for effective teamwork. As a FullStack developer, I am
          committed to evolving my skills. I embrace new possibilities in the
          tech landscape.
        </p>
      </section>

      <StickyTitle>Skills</StickyTitle>
      <section
        id="skills"
        className="group/list space-y-7 md:space-y-12 lg:space-y-16 mb-14 scroll-mt-16 md:mb-22 lg:mb-32 lg:scroll-mt-24"
      >
        <Cards
          contentOne={[
            <Tag key="1" children="HTML5" />,
            <Tag key="2" children="CSS" />,
            <Tag key="27" children="Sass" />,
            <Tag key="3" children="JavaScript" />,
            <Tag key="4" children="Typescript" />,
            <Tag key="5" children="Git" />,
          ]}
          contentTwo={[
            <Tag key="6" variant="secondary" children="React" />,
            <Tag key="7" variant="secondary" children="Next.js" />,
            <Tag key="8" variant="secondary" children="Vite" />,
            <Tag key="9" variant="secondary" children="TailwindCSS" />,
            <Tag key="10" variant="secondary" children="Bootstrap" />,
            <Tag key="11" variant="secondary" children="Jest" />,
            <Tag key="12" variant="secondary" children="Github" />,
            <Tag key="13" variant="secondary" children="VsCode" />,
            <Tag key="26" variant="secondary" children="Figma" />,
          ]}
          title={"Frontend"}
          subTitleOne="Languages I speak"
          subTitleTwo="Tools I use"
          variant={"primary"}
        />

        <Cards
          contentOne={[
            <Tag key="14" children="NodeJs" />,
            <Tag key="15" children="Python" />,
            <Tag key="16" children="SQL" />,
          ]}
          contentTwo={[
            <Tag key="17" variant="secondary" children="Docker" />,
            <Tag key="18" variant="secondary" children="PostgreSQL" />,
            <Tag key="19" variant="secondary" children="MongoDB" />,
            <Tag key="20" variant="secondary" children="Fastify" />,
            <Tag key="21" variant="secondary" children="Express" />,
            <Tag key="22" variant="secondary" children="NestJs" />,
            <Tag key="23" variant="secondary" children="Drizzle" />,
            <Tag key="24" variant="secondary" children="Prisma" />,
          ]}
          title={"Backend"}
          subTitleOne="Languages I speak"
          subTitleTwo="Tools I use"
          variant={"primary"}
        />
      </section>

      <StickyTitle>Certifications</StickyTitle>
      <section
        id="certifications"
        className="group/list space-y-8 mb-14 scroll-mt-16 md:mb-22 lg:mb-32 lg:scroll-mt-24"
      >
        <Certificates technology={"Software Analysis and Development."} school={"Uninter"} url={""} />
        <Certificates technology={"CS50 Computer Science"} school={"Harvard University"} url={"https://certificates.cs50.io/e99b6128-b4a9-48cd-bdda-1394b4667b14.pdf?size=letter"} />
        <Certificates technology={"Web Development"} school={"Rocketseat"} url={"https://app.rocketseat.com.br/certificates/c39675b2-1e78-4876-8108-f1b363e3024c"} />
        <Certificates technology={"Web Development"} school={"Cod3r"} url={"https://www.udemy.com/certificate/UC-45d1c359-7f63-454b-bfcb-85a22fb3e38d/"} />
        <Certificates technology={"Deploy"} school={"Rocketseat"} url={"https://app.rocketseat.com.br/certificates/00581010-97a3-4de9-9d93-916ddbd20417"} />
      </section>

      <StickyTitle>Projects</StickyTitle>
      <section
        id="projects"
        className="group/list space-y-14 md:space-y-12 lg:space-y-16 mb-14 scroll-mt-16 md:mb-22 lg:mb-32 lg:scroll-mt-24"
      >
        <Cards
          variant={"secondary"}
          href="https://github.com/kennedysferreira/confraria"
          title={Confraria}
          subTitleOne="Confraria"
          description="Confraria is a system for managing confraternities and groups, facilitating the organization of events, members and interactions."
          contentOne={[
            <Tag key="23" children="Typescript" />,
            <Tag key="28" children="NodeJs" />,
            <Tag key="25" variant="secondary" children="NextJs" />,
            <Tag key="26" variant="secondary" children="React" />,
            <Tag key="27" variant="secondary" children="TailwindCSS" />,
          ]}
        />
        <Cards
          variant={"secondary"}
          href="https://github.com/kennedysferreira/projectFoodExplorer"
          title={FoodExplorer}
          description="Explore Food is an app for restaurants that allows you to browse menus, add items to your cart, view prices, and make payments, all seamlessly integrated into the application. Project in progress, stay tuned for updates."
          subTitleOne="Food Explorer"
          contentOne={[
            <Tag key="23" children="Typescript" />,
            <Tag key="28" children="NodeJs" />,
            <Tag key="25" variant="secondary" children="Vite" />,
            <Tag key="26" variant="secondary" children="React" />,
            <Tag key="27" variant="secondary" children="TailwindCSS" />,
            <Tag key="29" variant="secondary" children="SQLite" />,
          ]}
        />
        <Cards
          variant={"secondary"}
          href="https://github.com/kennedysferreira/projectAMA"
          title={AmA}
          subTitleOne="AmA - Ask me Anything"
          description="The project developed consisted of an application where users can create rooms and send questions, with real-time interactions facilitated by the use of WebSockets."
          contentOne={[
            <Tag key="23" children="Typescript" />,
            <Tag key="28" children="Go" />,
            <Tag key="25" variant="secondary" children="Vite" />,
            <Tag key="26" variant="secondary" children="React" />,
            <Tag key="27" variant="secondary" children="TailwindCSS" />,
            <Tag key="29" variant="secondary" children="PostgreSQL" />,
            <Tag key="30" variant="secondary" children="Docker" />,
          ]}
        />

        <Cards
          variant={"secondary"}
          href="https://github.com/kennedysferreira/projectInOrbit"
          title={Inorbit}
          description="The app allows you to track your goals, mark them as completed, delete them, view a progress bar, and search by date to see goals completed on that day."
          subTitleOne="In.Orbit"
          contentOne={[
            <Tag key="23" children="Typescript" />,
            <Tag key="28" children="NodeJs" />,
            <Tag key="25" variant="secondary" children="Vite" />,
            <Tag key="26" variant="secondary" children="React" />,
            <Tag key="27" variant="secondary" children="TailwindCSS" />,
            <Tag key="29" variant="secondary" children="Sqlite" />,
          ]}
        />

      </section>

      <StickyTitle>Contact</StickyTitle>
      <section id="contact" className="space-y-4 md:space-y-6 lg:space-y-8 mb-14 scroll-mt-16 md:mb-22 lg:mb-28 lg:scroll-mt-24">
        <h1 className="text-slate-200 text-lg">
          Look for a developer to help you on a project? Tell me about your
          ideas.
        </h1>
        <Form />
      </section>
    </main>
  );
}
