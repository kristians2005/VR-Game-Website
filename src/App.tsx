import { GridBackground } from "./components/GridBackground";
import { useEffect, useMemo, useState } from "react";

function App() {
  const taglines = useMemo(
    () => [
      "Caffeine required",
      "Clock in. Don’t blink.",
      "The shift never ends.",
      "Smile for the customers.",
      "Something’s in the kitchen.",
    ],
    []
  );

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineVisible, setTaglineVisible] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTaglineVisible(false);

      window.setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % taglines.length);
        setTaglineVisible(true);
      }, 220);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [taglines.length]);

  return (
    <GridBackground>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 md:pt-20">
          {/* Hero Section */}
          <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          {/* Image: Added 'hidden md:block' so it only exists on large screens */}
          <img
            src="/TestRender.png"
            alt="Hero"
            className="hidden md:block absolute w-1/2 max-w-md object-contain -z-10 "
            style={{
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <div className="flex flex-col items-center">
            {/* Box: Adjusted padding for mobile (py-6) vs desktop (md:py-10) */}
            <div className="bg-red-200 bg-opacity-50 px-4 py-6 md:py-10 rounded-lg md:ml-6 w-full max-w-sm md:max-w-none">
              {/* Title 1: Responsive text size and conditional negative margin */}
              <h1 className="text-5xl md:text-8xl font-black text-white mb-0 md:mb-4 tracking-tight -mt-16 md:-mt-25 relative z-20 leading-tight md:leading-none">
                BACK TO WORK
              </h1>

              {/* Title 2: Responsive text size and conditional negative margin */}
              <h1 className="text-5xl md:text-8xl font-black text-red-400 mb-4 md:mb-4 tracking-tight -mt-28 md:-mt-25 relative z-10 leading-tight md:leading-none">
                BACK TO WORK
              </h1>

              <p className="text-xl md:text-4xl text-white max-w-2xl mx-auto h-10 md:h-12">
                <span
                  className={`inline-block transition-all duration-200 ease-out ${
                    taglineVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1"
                  }`}
                >
                  {taglines[taglineIndex]}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Trailer Section */}
        <section className="py-12 md:py-20 min-h-screen px-4">
          <div className="hidden md:flex w-screen absolute justify-end -z-10">
            <img src="/stalker.png" className="w-[700px]" alt="Stalker" />
          </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
              DOWNLOAD & TRAILER
            </h2> */}
            <div className="flex flex-col md:flex-row gap-12 w-full items-center">
              {/* Left: Download Buttons */}
              <div className="flex-0 md:flex-1 flex flex-col gap-6 max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                  Choose Your Platform
                </h3>
                <a href="https://drive.google.com/file/d/1lVtHcYBASGLpBPXVqN8kM_-chz1d4XRL/view?usp=sharing" className="btn btn-primary w-full justify-center h-12 md:h-16 text-lg md:text-3xl">
                  Download for PCVR
                </a>
                <a href="#" className="btn btn-secondary w-full justify-center h-12 md:h-16 text-lg md:text-3xl">
                  Download for Meta Quest
                </a>
              </div>

              {/* Right: Trailer */}
              <div className="flex-1 md:flex-2 w-full">
                <div>
                  <img
                    src="/coffeeCup.png"
                    className="relative w-[110px] md:w-[150px]"
                    alt="sd"
                  />
                </div>
                <div className="flex-1 relative w-full max-w-[600px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                  <div className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/SNSWVPamXgI?start=10"
                      title="Back to Work – Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 min-h-screen px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">
            {/* Image - Right Side */}
            <div className="flex-1 relative rounded-3xl  overflow-hidden group">
              <img
                src="/cabin.png"
                alt="Game Screen 2"
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>

            {/* Text - Left Side */}
            <div className="flex-1 text-left text-white space-y-3 max-w-4xl">
              <p className="text-base sm:text-lg md:text-3xl leading-relaxed drop-shadow-md">
                <strong>Back to Work</strong> is a{" "}
                <strong>VR game</strong> where the{" "}
                <strong>hours are inhumane</strong>,{" "}
                <strong>the boss is unbearable</strong>, and{" "}
                <strong>pests are straight-up uncanny</strong>.
              </p>
              <p className="text-base sm:text-lg md:text-3xl font-semibold drop-shadow-md">
                Clock in, keep your sanity, and make it through the shift.
              </p>
            </div>
          </div>
        </section>
        </main>

        {/* About Game Section */}
        <section className="mt-auto px-4 py-10 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              {/* Copyright - Bottom Left */}
              <p className="text-sm md:text-base text-neutral-300">
                &copy; 2026 Kristians Mikelsons. All rights reserved.
              </p>

              {/* Social Links - Right */}
              <div className="flex gap-4">
                <a
                  href="https://x.com/Prov20002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 text-neutral-300 hover:text-blue-400 transition-colors"
                >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </a>

                <a
                  href="https://www.youtube.com/@prov-xw8gy/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 text-neutral-300 hover:text-red-400 transition-colors"
                >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>

                <a
                  href="https://github.com/kristians2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 text-neutral-300 hover:text-white transition-colors"
                >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GridBackground>
  );
}

export default App;
