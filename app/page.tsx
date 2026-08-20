"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // ==============================
  // OUR PROCESS DATA
  // ==============================
  const processSteps = [
    {
      number: "1",
      title: "Raw Material",
      description:
        "We carefully select high quality biomass materials to ensure consistent pellet production.",
      image: "/images/row.png",
      side: "right",
    },
    {
      number: "2",
      title: "Drying",
      description:
        "The raw materials are dried to achieve the optimal moisture level for efficient pellet production.",
      image: "/images/drying.png",
      side: "left",
    },
    {
      number: "3",
      title: "Grinding",
      description:
        "The dried materials are finely ground to achieve a uniform particle size and improve pellet consistency.",
      image: "/images/grinding.png",
      side: "right",
    },
    {
      number: "4",
      title: "Pelletizing",
      description:
        "The processed biomass is compressed under controlled conditions to form dense, durable, and high quality wood pellets.",
      image: "/images/pelletizing.png",
      side: "left",
    },
    {
      number: "5",
      title: "Cooling",
      description:
        "Freshly produced pellets are cooled and stabilized to maintain their strength and quality.",
      image: "/images/cooling.png",
      side: "right",
    },
    {
      number: "6",
      title: "Packaging",
      description:
        "The finished pellets are carefully packaged to protect product quality during storage and transportation.",
      image: "/images/packaging.png",
      side: "left",
    },
    {
      number: "7",
      title: "Export",
      description:
        "The packaged wood pellets are prepared and shipped to customers and partners in domestic and international markets.",
      image: "/images/export.png",
      side: "right",
    },
  ];

  // ==============================
  // MOBILE MENU
  // ==============================
  const [menuOpen, setMenuOpen] = useState(false);

  // ==============================
  // SECTION REFERENCES
  // ==============================
  const aboutRef = useRef<HTMLElement | null>(null);
  const whyUsRef = useRef<HTMLElement | null>(null);
  const productRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // ==============================
  // ANIMATION STATES
  // ==============================
  const [aboutVisible, setAboutVisible] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  // ==============================
  // SCROLL ANIMATION OBSERVER
  // ==============================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current) {
            setAboutVisible(entry.isIntersecting);
          }

          if (entry.target === whyUsRef.current) {
            setWhyUsVisible(entry.isIntersecting);
          }

          if (entry.target === productRef.current) {
            setProductVisible(entry.isIntersecting);
          }

          if (entry.target === processRef.current) {
            setProcessVisible(entry.isIntersecting);
          }

          if (entry.target === contactRef.current) {
            setContactVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (whyUsRef.current) {
      observer.observe(whyUsRef.current);
    }

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==============================
  // CLOSE MOBILE MENU
  // ==============================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==============================
  // RETURN
  // ==============================
  return (
    <main className="min-h-screen bg-[#f4ecdc] text-[#185c2a]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-[#f5eddf] shadow-sm">
        <div className="mx-auto flex min-h-[88px] w-full items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16">
          {/* =========================
        LOGO + COMPANY NAME
    ========================= */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/images/LogoAgro.png"
              alt="Agro Biomass Nusantara Logo"
              width={60}
              height={60}
              priority
              className="h-11 w-11 object-contain sm:h-12 sm:w-12 md:h-[60px] md:w-[60px]"
            />

            <span className="max-w-[180px] text-sm font-bold leading-tight text-[#185c2a] sm:max-w-[220px] sm:text-base md:max-w-none md:text-xl">
              PT AGRO BIOMASS NUSANTARA
            </span>
          </a>

          {/* =========================
        DESKTOP NAVIGATION
    ========================= */}
          <nav className="hidden items-center gap-6 text-[15px] font-medium text-[#222] lg:flex xl:gap-8 xl:text-[16px]">
            <a
              href="#"
              className="text-[#185c2a] transition-colors duration-300 hover:text-[#124a22]"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-[#185c2a]"
            >
              About
            </a>

            <a
              href="#products"
              className="transition-colors duration-300 hover:text-[#185c2a]"
            >
              Our Product
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-[#185c2a]"
            >
              Contact Us
            </a>
          </nav>

          {/* =========================
        DESKTOP CTA
    ========================= */}
          <a
            href="https://wa.me/6285792377222?text=Hi%20Agro%20Biomass%20Nusantara%2C%20I%20want%20to%20order%20premium%20wood%20pellets."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-3 rounded-full bg-[#185c2a] px-5 py-3 text-base font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#124a22] hover:shadow-lg lg:flex xl:gap-4 xl:px-7 xl:py-4 xl:text-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white xl:h-10 xl:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#185c2a] xl:h-6 xl:w-6"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.59 5.96L.03 24l6.28-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.16-3.42-8.42ZM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.27C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.86 9.86 0 0 1 2.89 7c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </span>

            <span>Book our Products</span>
          </a>

          {/* =========================
        MOBILE HAMBURGER
    ========================= */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#185c2a] text-white transition-all duration-300 hover:bg-[#124a22] active:scale-95 lg:hidden"
          >
            <div className="flex w-6 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* =========================
      MOBILE MENU
  ========================= */}
        <div
          className={`overflow-hidden border-t border-[#185c2a]/10 bg-[#f5eddf] transition-all duration-300 ease-out lg:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 pb-5 pt-2 sm:px-8 md:px-12">
            {/* Home */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#185c2a]/10 py-4 text-base font-semibold text-[#185c2a] transition-colors duration-200 hover:text-[#124a22]"
            >
              Home
            </a>

            {/* About */}
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#185c2a]/10 py-4 text-base font-semibold text-[#222] transition-colors duration-200 hover:text-[#185c2a]"
            >
              About
            </a>

            {/* Products */}
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#185c2a]/10 py-4 text-base font-semibold text-[#222] transition-colors duration-200 hover:text-[#185c2a]"
            >
              Our Product
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#185c2a]/10 py-4 text-base font-semibold text-[#222] transition-colors duration-200 hover:text-[#185c2a]"
            >
              Contact Us
            </a>

            {/* Mobile CTA */}
            <a
              href="https://wa.me/6285792377222?text=Hi%20Agro%20Biomass%20Nusantara%2C%20I%20want%20to%20order%20premium%20wood%20pellets."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-[#185c2a] px-5 py-4 text-base font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#124a22] active:scale-[0.98]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-[#185c2a]"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.59 5.96L.03 24l6.28-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.16-3.42-8.42ZM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.27C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.86 9.86 0 0 1 2.89 7c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </span>
              Book our Products
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="min-h-[580px] px-8 py-16 md:px-12 lg:px-16"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto grid min-h-[450px] max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Hero Text */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-[#d2dac2] px-5 py-3 text-lg font-medium">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#185c2a] text-white">
                ✓
              </span>
              Premium Wood Pellet
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl">
              Premium Indonesian Wood Pellets
              <br />
              for Cleaner Energy
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#858177]">
              We supply high quality wood pellets manufactured in Indonesia,
              providing sustainable and reliable biomass fuel for industrial and
              commercial applications worldwide.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Explore More */}
              <a
                href="#about"
                className="flex items-center gap-5 rounded-xl bg-[#185c2a] px-7 py-4 text-lg font-semibold text-white transition hover:bg-[#104a20]"
              >
                Explore More
                <span className="text-2xl">→</span>
              </a>

              {/* Get a Quote */}
              <a
                href="https://wa.me/6285792377222?text=Hi%20Agro%20Biomass%20Nusantara%2C%20I%20would%20like%20to%20request%20a%20quotation%20for%20premium%20wood%20pellets."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-[#5d8b61] bg-[#d9dfd1] px-7 py-4 text-lg font-semibold text-[#185c2a] transition hover:bg-[#cbd5c2]"
              >
                <span className="text-xl">🌿</span>
                <span>Get a Quote</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center overflow-visible md:justify-end">
            <div className="relative h-[450px] w-full max-w-[600px] overflow-visible">
              <img
                src="/images/hero.png"
                alt="Wood pellets"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        ref={aboutRef}
        className="relative overflow-hidden bg-[#f4ecdc] px-8 py-24 md:px-12 lg:px-16"
      >
        {/* Background Daun */}
        <img
          src="/images/Daun.png"
          alt=""
          className={`pointer-events-none absolute bottom-0 right-0 z-0 w-[550px] transform transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            aboutVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-32 opacity-0"
          }`}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* =================================================
        IMAGE
    ================================================= */}
          <div
            className={`relative overflow-visible transform transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              aboutVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-24 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/images/agrobiomass.png"
                alt="Agro Biomass Nusantara Facility"
                className="h-[450px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* =================================================
        ABOUT CARD
    ================================================= */}
          <div
            className={`relative z-10 rounded-[32px] bg-[#faf8f3] p-8 md:p-10 lg:p-12 transform transition-all delay-[200ms] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              aboutVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }`}
          >
            {/* Heading */}
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="text-[#b87518]">About</span>{" "}
              <span className="text-[#185c2a]">Us</span>
            </h2>

            {/* Description */}
            <p
              className={`mt-8 text-lg leading-8 text-[#222] md:text-xl md:leading-9 transform transition-all delay-[450ms] duration-[900ms] ${
                aboutVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="font-bold text-[#185c2a]">
                Agro Biomass Nusantara
              </span>{" "}
              is an Indonesian biomass supplier specializing in premium wood
              pellets for{" "}
              <span className="font-bold text-[#185c2a]">
                industrial heating, power generation, and commercial energy
                solutions.
              </span>
            </p>

            {/* =================================================
          DECORATIVE LINE
      ================================================= */}
            <div
              className={`mt-8 h-2 origin-left rounded-full bg-[#b87518] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                aboutVisible
                  ? "w-40 translate-x-0 opacity-100"
                  : "w-0 -translate-x-8 opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-us"
        ref={whyUsRef}
        className="overflow-hidden bg-[#faf9f5] px-8 py-20 md:px-12 lg:px-16"
      >
        {/* Title */}
        <div
          className={`mb-14 text-center transform transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            whyUsVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[#b87318]">Why </span>
            <span className="text-[#185c2a]">Choose Us</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* =====================================================
        CARD 1
    ===================================================== */}
          <div
            className={`flex min-h-[375px] flex-col items-center justify-center rounded-[28px] bg-[#b87318] px-8 py-10 text-center text-white transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              whyUsVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-20 w-20"
              >
                <path d="M12 3v4" />
                <path d="M12 17v4" />
                <path d="M3 12h4" />
                <path d="M17 12h4" />
                <path d="m5.6 5.6 2.8 2.8" />
                <path d="m15.6 15.6 2.8 2.8" />
                <path d="m5.6 18.4 2.8-2.8" />
                <path d="m15.6 8.4 2.8-2.8" />
                <circle cx="12" cy="12" r="4" />
                <path d="m12 10 1.5 2.5H11l1 2" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold">
              Sustainable
              <br />
              Materials
            </h3>

            <p className="mt-7 text-lg leading-7">
              Produced from responsibly
              <br />
              sourced biomass.
            </p>
          </div>

          {/* =====================================================
        CARD 2
    ===================================================== */}
          <div
            className={`flex min-h-[375px] flex-col items-center justify-center rounded-[28px] bg-[#f1eadc] px-8 py-10 text-center text-[#b87318] transform transition-all delay-[200ms] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              whyUsVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-20 w-20"
              >
                <path d="m12 2.5 2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.56l-5.91 3.1 1.13-6.57-4.77-4.65 6.6-.96L12 2.5Z" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold">Consistent Quality</h3>

            <p className="mt-7 text-lg leading-7">
              Uniform size, low moisture, and
              <br />
              stable combustion
              <br />
              performance.
            </p>
          </div>

          {/* =====================================================
        CARD 3
    ===================================================== */}
          <div
            className={`flex min-h-[375px] flex-col items-center justify-center rounded-[28px] bg-[#b87318] px-8 py-10 text-center text-white transform transition-all delay-[400ms] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              whyUsVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-20 w-20"
              >
                <path d="M3 5h11v10H3z" />
                <path d="M14 8h4l3 3v4h-7z" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="18" cy="17" r="2" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold">Export Ready</h3>

            <p className="mt-7 text-lg leading-7">
              Experienced in international
              <br />
              logistics and export
              <br />
              documentation.
            </p>
          </div>

          {/* =====================================================
        CARD 4
    ===================================================== */}
          <div
            className={`flex min-h-[375px] flex-col items-center justify-center rounded-[28px] bg-[#f1eadc] px-8 py-10 text-center text-[#b87318] transform transition-all delay-[600ms] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              whyUsVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-20 w-20"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v8" />
                <path d="m9 11 3-3 3 3" />
                <path d="M4 12a8 8 0 0 0 14 5" />
                <path d="M20 12a8 8 0 0 0-14-5" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold">Reliable Supply</h3>

            <p className="mt-7 text-lg leading-7">
              Stable production capacity for
              <br />
              long term partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PRODUCT */}
      {/* =====================================================
    OUR PRODUCT
====================================================== */}
      <section
        id="products"
        ref={productRef}
        className="relative overflow-hidden bg-[#f4ecdc] px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
          {/* =====================================================
        LEFT - PRODUCT IMAGE
    ====================================================== */}
          <div
            className={`relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[600px] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              productVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-32 opacity-0"
            }`}
          >
            {/* Product Image */}
            <img
              src="/images/woodpellet.png"
              alt="Premium Wood Pellets"
              className={`relative z-10 w-full max-w-[680px] object-contain transition-transform duration-[1400ms] ease-out ${
                productVisible ? "scale-100" : "scale-90"
              }`}
            />

            {/* Decorative Leaf */}
            <img
              src="/images/Daun.png"
              alt=""
              className={`absolute bottom-[-50px] left-[-50px] z-0 w-[280px] opacity-70 sm:bottom-[-80px] sm:left-[-80px] sm:w-[380px] transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                productVisible
                  ? "translate-x-0 translate-y-0 opacity-70"
                  : "-translate-x-24 translate-y-20 opacity-0"
              }`}
            />
          </div>

          {/* =====================================================
        RIGHT - PRODUCT INFORMATION
    ====================================================== */}
          <div
            className={`w-full min-w-0 rounded-[24px] bg-[#faf9f5] px-5 py-8 sm:rounded-[28px] sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              productVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-32 opacity-0"
            }`}
          >
            {/* Small Heading */}
            <h3
              className={`text-2xl font-bold text-[#b87318] sm:text-3xl transition-all duration-700 delay-[200ms] ${
                productVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              OUR PRODUCT
            </h3>

            {/* Product Name */}
            <h2
              className={`mt-3 text-3xl font-bold leading-tight text-[#2d7d32] sm:mt-4 sm:text-4xl md:text-5xl transition-all duration-700 delay-[350ms] ${
                productVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Premium Wood Pellets
            </h2>

            {/* Description */}
            <p
              className={`mt-4 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8 md:text-xl transition-all duration-700 delay-[500ms] ${
                productVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              High density biomass fuel suitable for industrial boilers, power
              plants, and other industrial applications.
            </p>

            {/* =====================================================
          SPECIFICATIONS
      ====================================================== */}
            <div className="mt-8 w-full space-y-2 sm:mt-10 sm:space-y-3">
              {/* ================= DIAMETER ================= */}
              <div
                className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 sm:gap-5 sm:py-5 transition-all duration-700 delay-[650ms] ${
                  productVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7d32] text-white transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>

                {/* Label */}
                <span className="min-w-0 text-lg font-bold text-black sm:text-xl md:text-2xl">
                  Diameter
                </span>

                {/* Value */}
                <span className="w-[90px] shrink-0 pr-2 text-right text-base font-medium leading-6 text-black sm:w-[115px] sm:pr-3 sm:text-xl md:text-2xl">
                  8 – 10 mm
                </span>
              </div>

              {/* ================= MOISTURE ================= */}
              <div
                className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 sm:gap-5 sm:py-5 transition-all duration-700 delay-[800ms] ${
                  productVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7d32] text-white transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>

                {/* Label */}
                <span className="min-w-0 text-lg font-bold text-black sm:text-xl md:text-2xl">
                  Moisture
                </span>

                {/* Value */}
                <span className="w-[90px] shrink-0 pr-2 text-right text-base font-medium leading-6 text-black sm:w-[115px] sm:pr-3 sm:text-xl md:text-2xl">
                  &lt; 10%
                </span>
              </div>

              {/* ================= ASH CONTENT ================= */}
              <div
                className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 sm:gap-5 sm:py-5 transition-all duration-700 delay-[950ms] ${
                  productVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7d32] text-white transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>

                {/* Label */}
                <span className="min-w-0 text-lg font-bold text-black sm:text-xl md:text-2xl">
                  Ash Content
                </span>

                {/* Value */}
                <span className="w-[90px] shrink-0 pr-2 text-right text-base font-medium leading-6 text-black sm:w-[115px] sm:pr-3 sm:text-xl md:text-2xl">
                  &lt; 2%
                </span>
              </div>

              {/* ================= CALORIC VALUE ================= */}
              <div
                className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 sm:gap-5 sm:py-5 transition-all duration-700 delay-[1100ms] ${
                  productVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2d7d32] text-white transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>

                {/* Label */}
                <span className="min-w-0 text-lg font-bold text-black sm:text-xl md:text-2xl">
                  Caloric Value
                </span>

                {/* Value */}
                <span className="w-[110px] shrink-0 pr-2 text-right text-base font-medium leading-6 text-black sm:w-[135px] sm:pr-3 sm:text-xl md:text-2xl">
                  4.200 – 4.300
                  <br />
                  kcal/kg
                </span>
              </div>
            </div>

            {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}
            <div
              className={`mt-8 h-1 rounded-full bg-[#b87318] transition-all duration-1000 delay-[1250ms] sm:mt-10 ${
                productVisible ? "w-20 opacity-100 sm:w-24" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      <section
        id="process"
        ref={processRef}
        className="relative overflow-hidden bg-[#faf9f5] px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        {/* ==============================
      HEADER
  ============================== */}
        <div
          className={`mx-auto mb-20 max-w-[1000px] text-center transition-all duration-1000 ${
            processVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg font-bold tracking-[0.2em] text-[#b87318] sm:text-xl">
            OUR PROCESS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#185c2a] sm:text-4xl md:text-5xl">
            From Raw Material to High Quality Pellets
          </h2>
        </div>

        {/* ==============================
      PROCESS TIMELINE
  ============================== */}
        <div className="relative mx-auto max-w-[1400px]">
          {/* CENTRAL LINE - DESKTOP */}
          <div
            className={`absolute left-1/2 top-0 hidden h-full w-[6px] -translate-x-1/2 rounded-full bg-[#b87318] lg:block transition-all duration-[1500ms] ${
              processVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            style={{ transformOrigin: "top" }}
          />

          {/* MOBILE LINE */}
          <div
            className={`absolute left-[28px] top-0 block h-full w-[4px] rounded-full bg-[#b87318] lg:hidden transition-all duration-[1500ms] ${
              processVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            style={{ transformOrigin: "top" }}
          />

          {/* ==============================
        PROCESS ITEMS
    ============================== */}
          <div className="relative space-y-20 sm:space-y-24 lg:space-y-28">
            {processSteps.map((step, index) => {
              const isRight = step.side === "right";

              return (
                <div
                  key={step.number}
                  className={`relative grid grid-cols-1 items-center lg:grid-cols-2 ${
                    isRight ? "" : ""
                  }`}
                >
                  {/* ==========================================
                NUMBER CIRCLE
            ========================================== */}

                  {/* DESKTOP */}
                  <div
                    className={`absolute left-1/2 top-1/2 z-30 hidden h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#b87318] bg-[#faf9f5] text-3xl font-bold text-[#b87318] lg:flex`}
                  >
                    {step.number}
                  </div>

                  {/* MOBILE */}
                  <div className="absolute left-0 top-[55px] z-30 flex h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#b87318] bg-[#faf9f5] text-2xl font-bold text-[#b87318] sm:h-[64px] sm:w-[64px] sm:text-3xl lg:hidden">
                    {step.number}
                  </div>

                  {/* ==========================================
                DESKTOP LEFT SIDE
            ========================================== */}

                  <div className="hidden min-h-[220px] items-center justify-end pr-[100px] lg:flex">
                    {!isRight && (
                      <div
                        className={`flex w-full max-w-[600px] items-center justify-end gap-8 transition-all duration-1000 ${
                          processVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-20 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${index * 120}ms`,
                        }}
                      >
                        {/* TEXT */}
                        <div className="max-w-[430px] text-right">
                          <h3 className="text-3xl font-bold text-[#111] xl:text-4xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-lg leading-8 text-gray-500 xl:text-xl">
                            {step.description}
                          </p>
                        </div>

                        {/* LOGO */}
                        <div className="flex h-[130px] w-[130px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#b87318] bg-[#faf9f5] p-[8px]">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#18752d] p-7">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={80}
                              height={80}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ==========================================
                DESKTOP RIGHT SIDE
            ========================================== */}

                  <div className="hidden min-h-[220px] items-center justify-start pl-[100px] lg:flex">
                    {isRight && (
                      <div
                        className={`flex w-full max-w-[600px] items-center gap-8 transition-all duration-1000 ${
                          processVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-20 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${index * 120}ms`,
                        }}
                      >
                        {/* LOGO */}
                        <div className="flex h-[130px] w-[130px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#b87318] bg-[#faf9f5] p-[8px]">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#18752d] p-7">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={80}
                              height={80}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        </div>

                        {/* TEXT */}
                        <div className="max-w-[430px]">
                          <h3 className="text-3xl font-bold text-[#111] xl:text-4xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-lg leading-8 text-gray-500 xl:text-xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ==========================================
                MOBILE VERSION
            ========================================== */}

                  <div
                    className={`ml-[82px] flex flex-col gap-5 sm:ml-[100px] lg:hidden transition-all duration-1000 ${
                      processVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                  >
                    {/* LOGO */}
                    <div className="flex h-[115px] w-[115px] items-center justify-center rounded-full border-[4px] border-[#b87318] bg-[#faf9f5] p-[7px] sm:h-[130px] sm:w-[130px]">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#18752d] p-6 sm:p-7">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={80}
                          height={80}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="max-w-[calc(100vw-125px)]">
                      <h3 className="text-2xl font-bold text-[#111] sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
    CONTACT BUTTONS
========================= */}
      <section
        id="contact"
        ref={contactRef}
        className="bg-[#fbfaf7] px-8 py-24 md:px-16 lg:px-20"
      >
        {/* =========================
      HEADING
  ========================= */}
        <div className="mx-auto max-w-7xl text-center">
          <h2
            className={`transform text-4xl font-bold text-[#287c35] transition-all duration-700 ease-out md:text-5xl ${
              contactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Get in Touch With Us
          </h2>

          <p
            className={`mx-auto mt-5 max-w-6xl transform text-lg leading-8 text-[#222] transition-all duration-700 ease-out md:text-xl ${
              contactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: contactVisible ? "100ms" : "0ms",
            }}
          >
            Whether you’re looking for a reliable biomass supplier, requesting a
            quotation, or exploring a long term partnership, our team is ready
            to assist you. Contact us today and we’ll respond as soon as
            possible.
          </p>
        </div>

        {/* =========================
      CONTACT CONTENT
  ========================= */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* =========================
        IMAGE
    ========================= */}
          <div
            className={`overflow-hidden rounded-[30px] transform transition-all duration-800 ease-out ${
              contactVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <img
              src="/images/agrobiomass.png"
              alt="Agro Biomass Nusantara Facility"
              className="h-[460px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* =========================
        CONTACT BUTTONS
    ========================= */}
          <div className="flex w-full flex-col gap-4">
            {/* =========================
          WHATSAPP
      ========================= */}
            <a
              href="https://wa.me/6285792377222?text=Hi%20Agro%20Biomass%20Nusantara%2C%20I%20want%20to%20order%20premium%20wood%20pellets."
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-[95px] w-full items-center gap-7 rounded-[22px] bg-[#2d8333] px-8 text-white shadow-sm transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#246b2a] hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${
                contactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: contactVisible ? "150ms" : "0ms",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-9 w-9 fill-white"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.59 5.96L.03 24l6.28-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.16-3.42-8.42ZM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.27C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.86 9.86 0 0 1 2.89 7c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </div>

              <span className="text-2xl font-bold">WhatsApp</span>
            </a>

            {/* =========================
          EMAIL
      ========================= */}
            <a
              href="mailto:agronusantara51@yahoo.com"
              className={`group flex h-[95px] w-full items-center gap-7 rounded-[22px] bg-[#2d8333] px-8 text-white shadow-sm transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#246b2a] hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${
                contactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: contactVisible ? "250ms" : "0ms",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-9 w-9 fill-none stroke-white"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <span className="text-2xl font-bold">Email</span>
            </a>

            {/* =========================
          TIKTOK
      ========================= */}
            <a
              href="https://www.tiktok.com/@agrobiomass.nusantara"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-[95px] w-full items-center gap-7 rounded-[22px] bg-[#2d8333] px-8 text-white shadow-sm transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#246b2a] hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${
                contactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: contactVisible ? "350ms" : "0ms",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-9 w-9 fill-white"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.76V9.38a6.35 6.35 0 1 0 5.45 6.29V8.79a8.16 8.16 0 0 0 4.78 1.52V6.88a4.84 4.84 0 0 1-1.01-.19Z" />
                </svg>
              </div>

              <span className="text-2xl font-bold">TikTok</span>
            </a>

            {/* =========================
          FACEBOOK
      ========================= */}
            <a
              href="https://www.facebook.com/people/Agro-Biomass-Nusantara/pfbid0KVcNRNzBSkg6nZ739UKHTyZraHzN4dqUZHgMuUKnLUuXsHBe15mSVKSxyecZFJPyl/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-[95px] w-full items-center gap-7 rounded-[22px] bg-[#2d8333] px-8 text-white shadow-sm transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#246b2a] hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${
                contactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: contactVisible ? "450ms" : "0ms",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 fill-white"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.2 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.98h-1.52c-1.5 0-1.97.94-1.97 1.9v2.23h3.35l-.54 3.49h-2.81V24C19.61 23.2 24 18.1 24 12.07Z" />
                </svg>
              </div>

              <span className="text-2xl font-bold">Facebook</span>
            </a>

            {/* =========================
          LOCATION
      ========================= */}
            <a
              href="https://maps.app.goo.gl/wMqsi2DaEhUW7KpG8"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-[95px] w-full items-center gap-7 rounded-[22px] bg-[#2d8333] px-8 text-white shadow-sm transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#246b2a] hover:shadow-lg active:translate-y-0 active:scale-[0.98] ${
                contactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: contactVisible ? "550ms" : "0ms",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 fill-white"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </div>

              <span className="text-2xl font-bold">Location</span>
            </a>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#b8751b] px-16 py-12 text-white">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/LogoAgro.png"
                alt="Agro Biomass Nusantara Logo"
                width={75}
                height={75}
              />

              <h3 className="text-2xl font-bold">PT AGRO BIOMASS NUSANTARA</h3>
            </div>

            <p className="mt-6 max-w-sm text-lg leading-7">
              Premium Indonesian wood pellets for cleaner, sustainable, and
              reliable energy solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-2xl font-bold">Quick Links</h3>

            <div className="flex flex-col gap-4 text-lg">
              <a href="#" className="transition hover:text-[#185c2a]">
                Home
              </a>

              <a href="#about" className="transition hover:text-[#185c2a]">
                About
              </a>

              <a href="#products" className="transition hover:text-[#185c2a]">
                Our Product
              </a>

              <a href="#contact" className="transition hover:text-[#185c2a]">
                Contact Us
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-2xl font-bold">Contact</h3>

            <div className="space-y-4 text-lg">
              {/* WHATSAPP / PHONE */}
              <a
                href="https://wa.me/6285792377222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition hover:text-[#185c2a]"
              >
                <span className="flex h-8 w-8 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current"
                  >
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
                  </svg>
                </span>

                <span>+62 857-9237-7222</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:agronusantara51@yahoo.com"
                className="flex items-center gap-4 transition hover:text-[#185c2a]"
              >
                <span className="flex h-8 w-8 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-none stroke-current"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />

                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span>agronusantara51@yahoo.com</span>
              </a>

              {/* LOCATION */}
              <a
                href="https://maps.app.goo.gl/wMqsi2DaEhUW7KpG8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition hover:text-[#185c2a]"
              >
                <span className="flex h-8 w-8 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>
                </span>

                <span>Nganjuk, East Java, Indonesia</span>
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex gap-4">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/people/Agro-Biomass-Nusantara/pfbid0KVcNRNzBSkg6nZ739UKHTyZraHzN4dqUZHgMuUKnLUuXsHBe15mSVKSxyecZFJPyl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#b8751b] transition hover:bg-[#185c2a] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.2 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.98h-1.52c-1.5 0-1.97.94-1.97 1.9v2.23h3.35l-.54 3.49h-2.81V24C19.61 23.2 24 18.1 24 12.07Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/agrobiomass.nusantara/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#b8751b] transition hover:bg-[#185c2a] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-current"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />

                  <circle cx="12" cy="12" r="4" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@agrobiomass.nusantara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#b8751b] transition hover:bg-[#185c2a] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.76V9.38a6.35 6.35 0 1 0 5.45 6.29V8.79a8.16 8.16 0 0 0 4.78 1.52V6.88a4.84 4.84 0 0 1-1.01-.19Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/70 pt-6">
          <p className="text-base">
            © 2026 PT Agro Biomass Nusantara. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
