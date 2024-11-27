"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Line from "../../public/heroLine.svg";
import phone2 from "../../public/phone2.webp";
import phone1 from "../../public/phone1.webp";
import loading1 from "../../public/loading1.svg";
import loading2 from "../../public/loading2.svg";
import loading3 from "../../public/loading3.svg";
import loading4 from "../../public/loading4.svg";
import loading5 from "../../public/loading5.svg";
import star from "../../public/star.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const iconRef = useRef([]);
  const arrowRef = useRef(null);
  const textRef = useRef([]);
  const phone1Ref = useRef(null);
  const secondSectionRef = useRef(null);
  // Add ref dynamically for icons
  const addIconRef = (el) => {
    if (el && !iconRef.current.includes(el)) {
      iconRef.current.push(el);
    }
  };

  useEffect(() => {
    // Infinite Arrow Animation
    gsap.to(arrowRef.current, {
      y: 25,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    iconRef.current.forEach((icon) => {
      gsap.fromTo(
        icon,
        { x: 0 }, // Initial position
        {
          x: 20, // Move slightly
          duration: 0.5,
          ease: "power1.inOut",
          paused: true,
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse animation
        }
      );

      // Add hover interaction
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { x: -20, duration: 0.3 });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { x: 0, duration: 0.3 });
      });
    });

    // Line-by-line Text Color Animation
    textRef.current.forEach((line, index) => {
      gsap.to(line, {
        color: "#FF7F50",
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        delay: index * 0.6, // Stagger the animations
        ease: "power1.inOut",
      });
    });

   if (phone1Ref.current && secondSectionRef.current) {
     // Match media for responsiveness
     ScrollTrigger.matchMedia({
       // For screens larger than 1300px
       "(min-width: 1300px)": function () {
         const tl = gsap.timeline({
           scrollTrigger: {
             trigger: phone1Ref.current,
             start: "top center", // Start when phone1 is in the center of the viewport
             end: () => secondSectionRef.current.offsetTop, // End at the second section
             scrub: 1.5, // Sync animation with scroll
           },
         });

         // Animations for wider screens
         tl.to(phone1Ref.current, {
           y: -300, // Move down
           rotate: 32, // Initial rotation
           duration: 2,
           ease: "power1.out",
         })
           .to(phone1Ref.current, {
             y: 250, // Move down
             rotate: 16, // Reduce rotation
             duration: 2,
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             y: 1170, // Move down
             rotate: 0, // Reset rotation
             duration: 2,
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             x: -150, // Move left
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             x: -550, // Final position
             ease: "power1.out",
           });
       },

       // For screens smaller than 1300px
       "(max-width: 1300px)": function () {
         const tl = gsap.timeline({
           scrollTrigger: {
             trigger: phone1Ref.current,
             start: "top center", // Start when phone1 is in the center of the viewport
             end: () => secondSectionRef.current.offsetTop, // End at the second section
             scrub: 1.5, // Sync animation with scroll
           },
         });

         // Animations for smaller screens
         tl.to(phone1Ref.current, {
           y: -400, // Move down
           rotate: 32, // Initial rotation
           duration: 2,
           ease: "power1.out",
         })
           .to(phone1Ref.current, {
             y: 250, // Move down
             rotate: 16, // Reduce rotation
             duration: 2,
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             y: 1250, // Move down
             rotate: 0, // Reset rotation
             duration: 2,
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             x: -150, // Move left
             ease: "power1.out",
           })
           .to(phone1Ref.current, {
             x: -420, // Final position for smaller screens
             ease: "power1.out",
           });
       },
     });
   }

  }, []);

  return (
    <div>
      <div className="relative">
        <Image
          src={phone1}
          alt=""
          className="w-[16%] right-[33%]  z-10 absolute "
          // style={{ transform: "rotate(32deg)" }}
          ref={phone1Ref}
        />
      </div>
      <div
        className="relative  pb-48 bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-center"
        style={{ backgroundImage: "url('./heroBack.jpg')" }}
      >
        <div className="relative">
          <Image src={Line} alt="" className="absolute -top-" />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 lg:gap-24 md:gap-24">
          <div>
            <div className="p-14">
              <Image src={logo} alt="" />
            </div>

            <div className="relative">
              <Image
                src={phone2}
                alt=""
                className="lg:w-[46%] md:w-[24%] w-[44%] absolute left-12 lg:left-48 top-0 "
              />
            </div>
            <div className="ml-16">
              <Image
                src={loading4}
                alt=""
                className="w-24 mt-60"
                ref={addIconRef}
              />
              <Image
                src={loading3}
                alt=""
                className="w-24 ml-6 mt-5"
                ref={addIconRef}
              />
            </div>
          </div>
          <div className="relative">
            <div className="">
              <Image
                src={loading2}
                alt=""
                className="absolute left-[20%] top-32 w-24"
                ref={addIconRef}
              />
              <Image
                src={loading1}
                alt=""
                className="absolute left-[50%] w-24 top-16"
                ref={addIconRef}
              />
            </div>
            <div className="absolute top-[50%]">
              <span className="pt-10 text-white text-5xl font-bold">
                Imagine this:
              </span>
              <p className="text-white text-5xl max-w-[590px] font-bold">
                <span ref={(el) => (textRef.current[0] = el)}>
                  From now on,every
                </span>
                <br />
                place you visit with
                <br />
                <span ref={(el) => (textRef.current[2] = el)}>
                  ChillDays will become an
                </span>
                <br />
                instant favorite
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={loading5} alt="" className="w-16" ref={arrowRef} />
        </div>
      </div>

      <div
        ref={secondSectionRef}
        className="  pb-72 bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-center"
        style={{ backgroundImage: "url('./heroBack2.jpg')" }}
      >
        <div className="flex justify-around pt-24 container relative flex-wrap gap-10">
          <div></div>
          <div className="lg:mt-72 md:mt-32">
            <h1 className="text-gray-600 font-bold  text-3xl lg:text-5xl md:text-5xl max-w-[330px]">
              Get spots just right for yoy
            </h1>
            <p className="text-2xl max-w-[600px] pt-4">
              Find, plan, and book the best places for you to eat, drink, chill,
              and have fun. You get great spots to enjoy, matched to your taste,
              preferences, and budget.
            </p>
            <div>
              <Image
                src={star}
                alt=""
                className="w-48 around absolute right-72 lg:top-[58%] md:top-[35%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
