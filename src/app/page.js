'use client'

import React, { useState } from "react";
import Image from "next/image";
import HeroCollage from "./ui/HeroCollage";
import Sticker from "./ui/Sticker";
import Pillar from "./ui/Pillar";
import EventCard from "./ui/EventCard";
import LogoMark from "./ui/LogoMark";
import { motion } from "motion/react";
import {
  TrainFront as Train,
  HeartHandshake,
  Calendar,
  Trees,
  Bike,
  Home as HomeIcon,
  Baby,
  Mail,
  ThumbsUp,
  MessageCircleMore,
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiBluesky
} from "@icons-pack/react-simple-icons"



export default function Home() {
  const [email, setEmail] = useState("");
  // const [signed, setSigned] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState(null);

  const getApiBaseUrl = () => {
    return process.env.NODE_ENV === 'production' 
      ? 'https://api.southloopurbanists.org'
      : 'http://localhost:8000';
  };

  const formatEventDateTime = (eventDate, timeSpan) => {
    try {
      const date = new Date(eventDate);
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const day = dayNames[date.getDay()];
      const month = monthNames[date.getMonth()];
      const dayNum = date.getDate();
      
      return `${day} • ${month} ${dayNum} • ${timeSpan}`;
    } catch (err) {
      return 'TBA';
    }
  };
  
  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-black leading-tight"
              >
                A South Loop where you can walk, bike, take transit, and live easily.
              </motion.h1>
              <p className="mt-4 text-lg max-w-prose">
                We bring South Loop neighbors together to push for safer streets, great transit, more housing, and more greenspace in the places we love.
              </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#socials" className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#c9f0e1] px-5 py-3 font-extrabold shadow-[4px_4px_0_0_#1c2b2d] hover:translate-y-[-2px] active:translate-y-0 transition-transform">
                  <ThumbsUp className="w-5 h-5"/> Follow on Social Media
                </a>
                <a href="https://join.slack.com/t/south-loop-urbanists/shared_invite/zt-3x27qnmwg-RHaxMzP5OzoGYw1PadyIag" className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#c9f0e1] px-5 py-3 font-extrabold shadow-[4px_4px_0_0_#1c2b2d] hover:translate-y-[-2px] active:translate-y-0 transition-transform">
                  <MessageCircleMore className="w-5 h-5"/> Join Our Slack
                </a>
              </div>
            </div>

            {/* Hero collage */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <HeroCollage />
              </motion.div>
            </div>
            
          </div>
      </section>

      <section id="why" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="relative p-6 rounded-[28px] bg-white/95 border-2 border-black shadow-[6px_6px_0_0_#1c2b2d]">
              <div className="absolute -top-3 -right-3 rotate-3">
                <Sticker text="Neighborhood-first" color="#c9f0e1"/>
              </div>
              <h2 className="text-3xl font-black">Why We Exist</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed">
                South Loop is one of Chicago&apos;s most beloved neighborhoods — walkable, lively, and full of possibility. But today it&apos;s becoming harder for people to stay, move, and enjoy our streets.
                <br/><br/>
                We exist to keep South Loop people-first: a neighborhood where sidewalks feel welcoming, transit is easy and reliable, and new neighbors can afford to live near the places they love. A neighborhood designed for connection not congestion.
                <br/><br/>
                We believe that when neighborhoods make room for people instead of cars, they make room for community.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 rounded-2xl bg-[#2a79c5] text-white border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]">
                <p className="font-extrabold">We start small.</p>
                <p className="text-sm opacity-90">Change begins on locally with neighborhood walks, pilot projects, and low-cost ideas that help people imagine what&apos;s possible. Small wins build momentum.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#ffd166] border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]">
                <p className="font-extrabold">We build coalitions.</p>
                <p className="text-sm">We bring renters, homeowners, families, small businesses, transit riders, and everyday neighbors into the same conversation because shared progress needs shared voices.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#2a79c5] text-white border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]">
                <p className="font-extrabold">We stay persistent.</p>
                <p className="text-sm opacity-90">Good ideas don&apos;t pass by themselves. We show up again and again to move projects from possibility to reality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <h2 className="text-3xl font-black">Our four pillars</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Pillar
              icon={HomeIcon}
              title="More Housing"
              blurb="More neighbors make a stronger, more welcoming community. We support homes near transit that let people stay and belong here."
              badge="Welcoming"
            />
            <Pillar
              icon={Train}
              title="Better Transit"
              blurb="Frequent, reliable service and accessible stops make daily life easier and more connected — because time spent waiting is time you lose with the people you love."
              badge="Connected"
            />
            <Pillar
              icon={Trees}
              title="Green, Calm Streets"
              blurb="Streets should feel comfortable to walk and gather in, with slower traffic, more trees, and people-first spaces for all ages and abilities."
              badge="Kid-Friendly"
            />
            <Pillar
              icon={Bike}
              title="Biking That&apos;s Easy"
              blurb="Getting around shouldn&apos;t require bravery. We support a bike network that feels intuitive, family-friendly, and safe for all ages."
              badge="Rollable"
            />
          </div>
        </div>
      </section>
      
	  {/* Join */}
      <section id="join" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid gap-4">
              
              <div className="relative p-6 rounded-[28px] bg-[#c9f0e1] border-2 border-black shadow-[6px_6px_0_0_#1c2b2d]">
                <h2 className="text-3xl font-black">Join Your Neighbors</h2>
                <p className="mt-2 text-[15.5px]">Pop your email in and we&apos;ll send occasional updates. Or just show up to an event and say hi!</p>
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                  <form
                    action="https://slurbanists.us10.list-manage.com/subscribe/post?u=0429f70ac5bb33e08cfdcc954&amp;id=bc9ede185f&amp;f_id=00ccc6e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="required email"
                          id="mce-EMAIL"
                          required
                          defaultValue=""
                        />
                      </div>

                      <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                      </div>

                      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                        <input
                          type="text"
                          name="b_0429f70ac5bb33e08cfdcc954_bc9ede185f"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>

                      <div className="optionalParent">
                        <div className="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                          <p style={{ margin: "0px auto" }}>
                            <a href="http://eepurl.com/-e3n2DGOUN" title="Mailchimp - email marketing made easy and fun">
                              <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}>
                                <img
                                  className="refferal_badge"
                                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                  alt="Intuit Mailchimp"
                                  style={{ width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }}
                                />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
        </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-black shadow-[5px_5px_0_0_#1c2b2d]">
                <h3 className="font-black">Want to collaborate?</h3>
                <p className="text-sm mt-1">We love teaming up with schools, block clubs, and small businesses.</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div id="socials" className="p-5 rounded-2xl bg-white border-2 border-black shadow-[5px_5px_0_0_#1c2b2d]">
                <h3 className="font-black">Follow on Social Media</h3>
                <div className="flex flex-wrap">
                  <a href="https://www.instagram.com/southloopurbanists/" target="_blank" className="flex items-center text-[#3d6dc2] hover:font-semibold hover:text-[#1e4fe1] me-4 mb-2">
                    <SiInstagram className="me-1" size={20}/> @SouthLoopUrbanists
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#2a79c5] text-white border-2 border-black shadow-[5px_5px_0_0_#1c2b2d]">
                <h3 className="font-black">How We Work</h3>
                <ul className="mt-2 space-y-1 text-sm list-disc ml-5">
                  <li>DIY, neighbor-led projects</li>
                  <li>Public meetings (but shorter and kinder)</li>
                  <li>Data + doodles: charts when useful, chalk when better</li>
                  <li>Events to meet and mingle</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t-2 border-black bg-white/90">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <LogoMark small />
            <div>
              <p className="font-extrabold">South Loop Urbanists</p>
              <p className="text-sm">Building a better South Loop, together.</p>
            </div>
          </div>
          <div className="text-sm md:text-right">
            <p>Say hi: info@southloopurbanists.org</p>
            <p className="opacity-80">© {new Date().getFullYear()} South Loop Urbanists, Chicago, IL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
