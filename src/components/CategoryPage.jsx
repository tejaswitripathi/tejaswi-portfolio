import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const folderName = useMemo(() => {
    return decodeURIComponent(name)
      .toLowerCase()
      .replace(/\s*\+\s*/g, "-")
      .replace(/\s+/g, "-");
  }, [name]);

  // --- Custom About Page Layout ---
  if (folderName === "about-booking-info") {
    return (
      <div
        className="relative min-h-screen bg-black text-pink-200 overflow-hidden px-6 md:px-16"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ✨ Moondust particles behind content */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 border border-pink-300 px-4 py-2 rounded hover:bg-pink-300 hover:text-black transition z-[5]"
        >
          ← Back
        </button>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
            gap: "60px",
            flexWrap: "wrap",
            zIndex: 5,
          }}
        >
          {/* Left image */}
          <div
            style={{
              flex: "1 1 45%",
              display: "flex",
              justifyContent: "center",
              opacity: 0,
              animation: "fadeInLeft 1.2s ease forwards",
            }}
          >
            <img
              src="/images/about-booking-info/01.jpeg"
              alt="Portrait of Tejaswi Tripathi"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "20px",
                boxShadow: "0 0 40px rgba(255,192,203,0.25)",
              }}
            />
          </div>

          {/* Right text */}
          <div
            style={{
              flex: "1 1 45%",
              textAlign: "left",
              opacity: 0,
              animation: "fadeInRight 1.2s ease forwards",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#ff9ad6",
                marginBottom: "1rem",
              }}
            >
              About + Booking Info
            </h1>

            <p className="leading-relaxed mb-4">
              My name is <b>Tejaswi Tripathi</b>.
            </p>

            <p className="leading-relaxed mb-4">
              I do mostly narrative-driven portraits and editorial-style shoots in
              fashion and beauty spaces. I also do graduation and merch shoots.
            </p>

            <p className="leading-relaxed mb-4">
              Clients supply the locations and lighting setups, and I handle
              everything else—direction, photography, editing, and delivery of
              final images.
            </p>

            <p className="leading-relaxed mb-4">
              I am currently in Urbana, IL, USA and available for booking.
            </p>

            <p className="leading-relaxed">
              If you’re interested, reach out to me through Instagram!{" "}
              <a
                href="https://www.instagram.com/josephotoast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-pink-100 underline underline-offset-4 transition"
              >
                @josephotoast
              </a>
            </p>

            <p className="leading-relaxed mb-4">
              P.S. – scroll down on the home page to see my recent work!
            </p>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </div>
    );
  }
  // --- Grace in Concrete: custom cinematic layout ---
    if (folderName === "grace-in-concrete") {
        // Specify which images actually exist
        const validImages = [1, 2, 3, 4, 5]; // update if you add more

        return (
            <div
            className="relative flex flex-col items-center justify-start min-h-screen text-gray-100 px-6 pt-10"
            style={{
                backgroundImage: "url(/images/backgrounds/concrete-bg.jpeg)",
                backgroundSize: "cover", // 🔹 Fix zoomed-in background
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundAttachment: "fixed", // subtle parallax feel
                overflowX: "hidden",
            }}
            >
            {/* ✨ Moondust layer (under content) */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <ParticlesBackground />
            </div>

            {/* Back button */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 border border-gray-400 px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition z-[5]"
            >
                ← Back
            </button>

            {/* Title and description */}
            <div className="relative z-[5] text-center mt-6 mb-8 animate-fadeInUp">
                <h1
                className="text-5xl tracking-wider mb-4"
                style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "4rem", // 🔹 Increase this (try 4–5rem)
                    lineHeight: "1.1",
                    textShadow: "10px 10px 30px rgba(0, 0, 0, 0.7)",
                }}
                >
                Grace in Concrete
                </h1>
                <p
                className="max-w-3xl mx-auto text-center text-gray-300 drop-shadow-md leading-relaxed italic"
                style={{
                    fontFamily: "'Cardo', serif",
                    fontStyle: "italic",
                    fontSize: "1.4rem", // 🔹 Increase this (try 1.5–1.75rem)
                    color: "white",
                    outline: "2px solid rgba(0, 0, 0, 0.3)",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    textShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)",
                }}
                >
                Does beauty quietly rebel against or adapt and coexist with an industrial society?
                </p>
            </div>

            {/* Feature image (04.jpeg) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl z-[5] mb-16 px-4">
                <div
                className="flex-1 opacity-0 animate-fadeInLeft"
                style={{
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                }}
                >
                <img
                    src="/images/grace-in-concrete/04.jpeg"
                    alt="Grace in Concrete 04"
                    className="w-full h-auto object-cover shadow-[0_0_30px_rgba(0,0,0,1)]"
                />
                </div>
            </div>

            {/* Remaining image grid */}
            <div className="w-full flex flex-wrap justify-center gap-8 mt-4 relative z-[5] px-4">
                {validImages.map((num, idx) => {
                if (num === 4) return null; // skip featured image

                // Make the last image smaller
                const isLast = idx === validImages.length - 1;
                return (
                    <div
                    key={num}
                    className={`opacity-0 animate-fadeInUp ${
                        isLast ? "mx-auto" : ""
                    }`}
                    style={{
                        animationDelay: `${0.1 * idx}s`,
                        animationFillMode: "forwards",
                        maxWidth: isLast ? "60%" : "100%",
                    }}
                    >
                    <div className="border-4 border-gray-400 bg-black shadow-[0_0_30px_rgba(0,0,0,1)]">
                        <img
                        src={`/images/grace-in-concrete/${String(num).padStart(2, "0")}.jpeg`}
                        alt={`Grace in Concrete ${num}`}
                        className="w-full h-auto object-cover"
                        />
                    </div>
                    </div>
                );
                })}
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-60px); }
                to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 1.2s ease forwards; }
                .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
            `}</style>
            </div>
        );
    }

    if (folderName === "orbital-opulence") {
        // specify which images actually exist
        const validImages = [1, 2, 3, 4, 5]; // update if you add more later

        return (
            <div
            className="relative flex flex-col items-center justify-start min-h-screen text-gray-100 px-6 pt-10"
            style={{
                backgroundImage: "url(/images/backgrounds/orbital-bg.jpeg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundAttachment: "fixed",
                overflowX: "hidden",
            }}
            >
            {/* ✨ Moondust layer */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <ParticlesBackground />
            </div>

            {/* Back button */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 border border-gray-400 px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition z-[5]"
            >
                ← Back
            </button>

            {/* Title and description */}
            <div className="relative z-[5] text-center mt-6 mb-8 animate-fadeInUp">
                <h1
                className="text-5xl tracking-wide mb-4"
                style={{
                    fontFamily: "'Condor Medium Condensed Italic', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                    fontSize: "4.5rem",
                    lineHeight: "1.1",
                    color: "#e0e0ff",
                    textShadow: "0 0 40px rgba(200, 200, 255, 0.7)",
                    letterSpacing: "0.05em",
                }}
                >
                Orbital Opulence
                </h1>

                <p
                className="max-w-3xl mx-auto text-center drop-shadow-md leading-relaxed"
                style={{
                    fontFamily: "'Cantarell', sans-serif",
                    fontSize: "1.4rem",
                    color: "#f5f5f5",
                    textShadow: "4px 4px 15px rgba(0, 0, 0, 0.6)",
                }}
                >
                A long time ago, a diner was ejected into outer space; now, its patrons
                look at us like we're the outsiders.
                </p>
            </div>

            {/* Featured image (01.jpeg) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl z-[5] mb-16 px-4">
                <div
                className="flex-1 opacity-0 animate-fadeInLeft"
                style={{
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                }}
                >
                <img
                    src="/images/orbital-opulence/01.jpeg"
                    alt="Orbital Opulence 01"
                    className="w-full h-auto object-cover shadow-[0_0_40px_rgba(0,0,0,1)]"
                    style={{
                    border: "4px solid #aaa",
                    }}
                />
                </div>
            </div>

            {/* Remaining image grid */}
            <div className="w-full flex flex-wrap justify-center gap-8 mt-4 relative z-[5] px-4">
                {validImages.map((num, idx) => {
                if (num === 1) return null; // skip featured image
                const isLast = idx === validImages.length - 1;

                return (
                    <div
                    key={num}
                    className={`opacity-0 animate-fadeInUp ${
                        isLast ? "mx-auto" : ""
                    }`}
                    style={{
                        animationDelay: `${0.1 * idx}s`,
                        animationFillMode: "forwards",
                        maxWidth: isLast ? "60%" : "100%",
                    }}
                    >
                    <div
                        className="border-4 border-gray-400 bg-black shadow-[0_0_30px_rgba(0,0,0,1)]"
                        style={{
                        display: "inline-block",
                        }}
                    >
                        <img
                        src={`/images/orbital-opulence/${String(num).padStart(
                            2,
                            "0"
                        )}.jpeg`}
                        alt={`Orbital Opulence ${num}`}
                        className="w-full h-auto object-cover"
                        />
                    </div>
                    </div>
                );
                })}
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-60px); }
                to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 1.2s ease forwards; }
                .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
            `}</style>
            </div>
        );
    }

    if (folderName === "dark-fantasy") {
        // specify which images exist
        const validImages = [1, 2, 3, 4, 5, 6]; // update if you add more later

        return (
            <div
            className="relative flex flex-col items-center justify-start min-h-screen text-gray-100 px-6 pt-10"
            style={{
                backgroundImage: "url(/images/backgrounds/dark-bg.jpeg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundAttachment: "fixed",
                overflowX: "hidden",
            }}
            >
            {/* ✨ Moondust layer */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <ParticlesBackground />
            </div>

            {/* Back button */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 border border-gray-500 px-4 py-2 rounded hover:bg-gray-400 hover:text-black transition z-[5]"
            >
                ← Back
            </button>

            {/* Title and description */}
            <div className="relative z-[5] text-center mt-6 mb-8 animate-fadeInUp">
                <h1
                className="text-5xl tracking-wide mb-4"
                style={{
                    fontFamily: "'Crimson Text', serif",
                    fontWeight: 700,
                    fontSize: "4.2rem",
                    color: "#f5f0eb",
                    textTransform: "uppercase",
                    textShadow: "0 0 30px rgba(100, 0, 0, 0.6)",
                    letterSpacing: "0.03em",
                }}
                >
                Dark Fantasy
                </h1>

                <p
                className="max-w-3xl mx-auto text-center drop-shadow-md leading-relaxed"
                style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    color: "#e8e1d9",
                    textShadow: "3px 3px 15px rgba(0, 0, 0, 0.7)",
                    fontStyle: "italic",
                }}
                >
                An offering.
                </p>
            </div>

            {/* Image grid */}
            <div className="w-full flex flex-wrap justify-center gap-8 mt-4 relative z-[5] px-4">
                {validImages.map((num, idx) => {
                const isLast = idx === validImages.length - 1;

                return (
                    <div
                    key={num}
                    className={`opacity-0 animate-fadeInUp ${
                        isLast ? "mx-auto" : ""
                    }`}
                    style={{
                        animationDelay: `${0.1 * idx}s`,
                        animationFillMode: "forwards",
                        maxWidth:  "100%",
                    }}
                    >
                    <div
                        className="border-4 border-gray-600 bg-black shadow-[0_0_40px_rgba(0,0,0,1)]"
                        style={{
                        display: "inline-block",
                        }}
                    >
                        <img
                        src={`/images/dark-fantasy/${String(num).padStart(2, "0")}.jpeg`}
                        alt={`Dark Fantasy ${num}`}
                        className="w-full h-auto object-cover"
                        />
                    </div>
                    </div>
                );
                })}
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
            `}</style>
            </div>
        );
    }





  // --- Default Layout for All Other Categories ---
  const categoryStyles = {
    "2025-highlights": {
      bg: "/images/background.jpeg",
      description: "Assorted pictures from throughout this year.",
    },
    "my-travel-photos": {
      bg: "/images/background.jpeg",
      description: "My favorite pictures from my trips to India and Japan.",
    },
    "dark-fantasy": {
      bg: "/images/backgrounds/dark-bg.jpeg",
      description: "",
    },
    "orbital-opulence": {
      bg: "/images/backgrounds/orbital-bg.jpeg",
      description: "",
    },
    "grace-in-concrete": {
        bg: "/images/backgrounds/concrete-bg.jpeg",
        description:
            "Does beauty quietly rebel against or adapt and coexist with an industrial society?",
    },

  };

  const style = categoryStyles[folderName] || {};
  const bgImage = style.bg || "";
  const description = style.description || "";

  return (
    <div
        className="relative flex flex-col items-center justify-start min-h-screen text-pink-200 px-6 pt-2"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            overflowX: "hidden",
            paddingBottom: "2rem",
        }}
    >

      {/* ✨ Moondust layer (under content but above bg) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 border border-pink-300 px-4 py-2 rounded hover:bg-pink-300 hover:text-black transition z-[5]"
      >
        ← Back
      </button>

      {/* Title and description */}
      <div className="relative z-[5] text-center mt-4 mb-4 animate-fadeInUp">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          {decodeURIComponent(name)}
        </h1>

        {description && (
          <p className="max-w-2xl text-center text-pink-100 mx-auto drop-shadow-md leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Image grid */}
        <div className="category-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 relative z-[5] px-4 pb-16">
        {Array.from({ length: 20 }, (_, i) => (
            <div
            key={i}
            className="fadeInUp"
            style={{
                animationDelay: `${i * 0.08}s`,
                animationFillMode: "forwards",
            }}
            >
            {/* separate wrapper for hover transform */}
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:z-20">
                <img
                src={`/images/${folderName}/${String(i + 1).padStart(2, "0")}.jpeg`}
                alt={`${folderName} ${i + 1}`}
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
                onError={(e) => (e.target.style.display = 'none')}
                />
            </div>
            </div>
        ))}
        </div>

        {/* ✨ Fade animation keyframes */}
        <style>{`
        @keyframes fadeInUp {
            0% {
            opacity: 0;
            transform: translateY(40px);
            }
            100% {
            opacity: 1;
            transform: translateY(0);
            }
        }

        .fadeInUp {
            opacity: 0;
            animation: fadeInUp 0.9s ease forwards;
        }
        `}</style>


    </div>
  );
}