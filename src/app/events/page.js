'use client'

import React, { useState} from "react";
import Head from "next/head";
import { motion } from "motion/react";
import EventCard from "../ui/EventCard";
import Sticker from "../ui/Sticker";
import {
  Calendar,
  CalendarPlus,
  Baby,
  Mail,
  MapPin,
  Clock,
  Users,
  ExternalLink
} from "lucide-react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://southloopurbanists.org/#organization",
        "name": "South Loop Urbanists",
        "description": "A neighborhood group focused on building a more liveable South Loop through advocacy for better housing, transit, and cycling infrastructure",
        "url": "https://southloopurbanists.org",
        "sameAs": [],
        "email": "info@southloopurbanists.org",
        "areaServed": {
          "@type": "Place",
          "name": "South Loop, Chicago, Illinois"
        },
        "knowsAbout": ["Urban Planning", "Housing Policy", "Transit Advocacy", "Cycling Infrastructure", "Community Organizing"]
      },
      ...events.map(event => ({
        "@type": "Event",
        "@id": `https://southloopurbanists.org/events#${event.id}`,
        "name": event.name,
        "description": event.description,
        "organizer": {
          "@id": "https://southloopurbanists.org/#organization"
        },
        "startDate": event.event_date,
        "location": {
          "@type": "Place",
          "name": event.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
          }
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "audience": {
          "@type": "Audience",
          "audienceType": "Families and all neighbors welcome"
        }
      }))
    ]
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Events & Happenings - South Loop Urbanists | Chicago Community Events</title>
        <meta 
          name="description" 
          content="Join South Loop Urbanists for neighborhood walks, advocacy meetings, potlucks, and bike rides in Chicago. Family-friendly events building a better South Loop together." 
        />
        <meta name="keywords" content="South Loop Chicago events, urban planning meetings, community bike rides, neighborhood advocacy, family events Chicago, South Loop urbanist community" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-black leading-tight">
              Events & Happenings
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Join us for neighborhood walks, advocacy meetings, potlucks, and bike rides. 
              Building a better South Loop happens when we show up together. See our upcoming events on <a href="https://www.eventbrite.com/o/121331719107" style={{color:"blue", backgroundColor: "transparent", textDecoration: "none;"}}>Eventbrite</a>
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 border-black bg-[#c9f0e1] shadow-[3px_3px_0_0_#1c2b2d]">
                <Baby className="w-4 h-4"/> Most events are family-friendly
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 border-black bg-[#ffd166] shadow-[3px_3px_0_0_#1c2b2d]">
                <Users className="w-4 h-4"/> All neighbors welcome
              </span>
            </div>
          </motion.div>
        </div>
      </header>


      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
          <h2 className="text-3xl font-black mb-6">Types of Community Events We Host in South Loop</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <motion.div
              whileHover={{ rotate: 0.5, y: -2 }}
              className="p-6 rounded-2xl bg-[#c9f0e1] border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Monthly Meetings</h3>
              <p className="text-sm mt-2">
                Last Wednesday of each month. Planning, updates, and friendly discussion about neighborhood improvements.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: -0.5, y: -2 }}
              className="p-6 rounded-2xl bg-[#ffd166] border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Neighborhood Walks</h3>
              <p className="text-sm mt-2">
                Exploring our streets together, identifying opportunities for better biking, transit, and housing.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 0.5, y: -2 }}
              className="p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Group Bike Rides</h3>
              <p className="text-sm mt-2">
                Slow rolls through the neighborhood and beyond. All skill levels welcome, families especially encouraged.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: -0.5, y: -2 }}
              className="p-6 rounded-2xl bg-[#2a79c5] text-white border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Educational Workshops</h3>
              <p className="text-sm mt-2">
                Learn about zoning, transportation planning, and how local government works. Knowledge is power!
              </p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 0.5, y: -2 }}
              className="p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Social Gatherings</h3>
              <p className="text-sm mt-2">
                Potlucks, picnics, and casual hangouts. Building community one conversation at a time.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ rotate: -0.5, y: -2 }}
              className="p-6 rounded-2xl bg-[#c9f0e1] border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
            >
              <h3 className="font-black text-lg">Advocacy Actions</h3>
              <p className="text-sm mt-2">
                Tabling, petitions, and showing up to public meetings when our neighborhood&apos;s future is being decided.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-[28px] bg-white border-2 border-black shadow-[6px_6px_0_0_#1c2b2d]"
          >
            <div className="absolute -top-4 -left-6 rotate-[-10deg]">
              <Sticker text="We&apos;re listening" color="#c9f0e1"/>
            </div>
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-3xl font-black">Have an event idea?</h2>
                <p className="mt-2 text-lg max-w-2xl">
                  Have an event you would like South Loop Urbanists to support, or an idea for one we could host? 
                  We love collaborating with neighbors, block clubs, local businesses, and community organizations.
                </p>
                <p className="mt-3 text-base font-semibold">
                  Reach out and let&apos;s make it happen together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
