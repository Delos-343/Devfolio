import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { displayFancyLogs } from "utils";
import { About1, About2, Collaboration, Contact, Cursor, Footer, Header, Hero, Loader, Menu, Meta, ProgressIndicator, Projects, Scripts, Skills, Work } from "../components";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header>
              <Menu />
            </Header>
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex flex-col">
              <div
                role="img"
                className="text-gray-light-1 text-center opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
              >
                HELLO
                <br />
                WORLD
              </div>
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
              <Hero />
              <About1 clientHeight={clientHeight} />
              <Skills />
              <About2 clientHeight={clientHeight} />
              <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
              <Work clientWidth={clientWidth} />
              <Collaboration clientHeight={clientHeight} />
              <div className="pt-10 sm:pt-16 bg-gray-dark-4"></div>
              <Contact />
            </main>
            <Footer />
            <Scripts />
          </>
        )}
      </Meta>
    </>
  );
}
