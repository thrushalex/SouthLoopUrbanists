'use client'

import Head from "next/head";
import { motion } from "motion/react";
import Image from 'next/image'
import {
  Sprout,
  Building2
} from 'lucide-react'

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us - South Loop Urbanists</title>
        <meta 
          name="description" 
          content="We’re neighbors working to make South Loop a people-first place to walk, bike, take transit, and live well." 
        />
        <meta name="keywords" content="About South Loop Urbanists, South Loop Chicago, urban planning meetings, community bike rides, neighborhood advocacy, South Loop urbanist community" />
      </Head>

      {/* Hero Section */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-black leading-tight">
              About Us
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              We&apos;re neighbors working to make South Loop a people-first place to walk, bike, take transit, and live well.
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 border-black bg-[#c9f0e1] shadow-[3px_3px_0_0_#1c2b2d]">
                <Sprout className="w-4 h-4"/> Grassroots
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 border-black bg-[#ffd166] shadow-[3px_3px_0_0_#1c2b2d]">
                <Building2 className="w-4 h-4"/> Neighborhood First
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <div className="relative p-6 rounded-[28px] bg-white/95 border-2 border-black shadow-[6px_6px_0_0_#1c2b2d]">
            <h2 className="text-3xl font-black">Who we are</h2>
            <p className="mt-3 text-[15.5px] leading-relaxed">
                We&apos;re a group of South Loop residents who love our neighborhood and want to help make it an even better place to live.
                <br/><br/>
                What that means to us is making it easier and safer to walk, roll, bike, and take transit in and around the neighborhood. Currently most streets in our neighborhood dedicate a great deal of space to motor vehicles, and not much else. In recent years there has been some progress made in the form of protected bike lanes, which we hope to see more of in the neighborhood, in addition to things like raised crosswalks, and bus lanes.
                <br/><br/>
                Beyond improving the experience of moving around the neighborhood, we also want improve the experience of simply being in the neighborhood. Greener, more inviting, and more plentiful public spaces would be a great way to accomplish this. Pedestrianizing streets (even if only temporarily) is a quick and easy way to create public space, and get neighbors out and talking to each other. Local businesses benefit too!
                <br/><br/>
                In short, our mission is to advocate for people-first infrastructure and strong neighborhood life to create a more accessible, sustainable, and thriving South Loop community.
            </p>
          </div>
        </div>
      </section>

      <section id="community-area-map" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <h2 className="text-3xl font-black text-center mb-2">Where We Are</h2>
          <div className="flex justify-center">
            <div style={{maxWidth: "800px"}}>
              <Image
                src="/assets/img/community-map.png"
                width={900}
                height={900}
                // style={{objectFit: "contain"}}
                alt="Community Area Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="community-area-map" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <h2 className="text-3xl font-black text-center mb-2">Wards We Intersect With</h2>

          <div className="flex justify-center">
            <div className="w-full px-0 py-0 sm:py-2 mb-4" style={{maxWidth: "800px"}}>
              <div className="w-full relative p-6 rounded-[28px] bg-white/95 border-2 border-black shadow-[6px_6px_0_0_#1c2b2d]">
                <h2 className="text-xl font-black">Who are our Alderpeople?</h2>
                <p className="mt-3 text-[15.5px] leading-relaxed">
                  <div><span className="me-2">Ward 3: Pat Dowell</span> <a className="text-[#3d6dc2] hover:font-semibold hover:text-[#1e4fe1]" href="https://ward03chicago.com/" target="_blank">https://ward03chicago.com/</a></div>
                  <div><span className="me-2">Ward 4: Lamont Robinson</span> <a className="text-[#3d6dc2] hover:font-semibold hover:text-[#1e4fe1]" href="https://www.robinson4thward.com/" target="_blank">https://www.robinson4thward.com/</a></div>
                  <div><span className="me-2">Ward 11: Nicole Lee</span> <a className="text-[#3d6dc2] hover:font-semibold hover:text-[#1e4fe1]" href="https://votenicolelee.com/" target="_blank">https://votenicolelee.com/</a></div>
                  <div><span className="me-2">Ward 34: Bill Conway</span> <a className="text-[#3d6dc2] hover:font-semibold hover:text-[#1e4fe1]" href="https://www.ward34.org/" target="_blank">https://www.ward34.org/</a></div>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div style={{maxWidth: "800px"}}>
              <Image
                src="/assets/img/ward-boundaries-south-loop.png"
                width={900}
                height={900}
                // style={{objectFit: "contain"}}
                alt="Ward Intersection Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
