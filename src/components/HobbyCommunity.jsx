import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';
import { Users, Group, CalendarCheck, Smile } from 'lucide-react';

const HobbyCommunity = () => {
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <Fade direction="up" cascade triggerOnce={true} duration={600}>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Thriving Community</h2>
          <p className=" mb-12">We’re proud of the amazing people and energy within HobbyHub</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <Users className="text-purple-600 mb-2" size={40} />
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={5000} duration={12} />+
              </h3>
              <p className="mt-1">Active Members</p>
            </div>

            <div className="flex flex-col items-center">
              <Group className="text-green-600 mb-2" size={40} />
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={120} duration={6} />+
              </h3>
              <p className=" mt-1">Hobby Groups</p>
            </div>

            <div className="flex flex-col items-center">
              <CalendarCheck className="text-yellow-500 mb-2" size={40} />
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={800} duration={8} />+
              </h3>
              <p className=" mt-1">Events Hosted</p>
            </div>

            <div className="flex flex-col items-center">
              <Smile className="text-pink-500 mb-2" size={40} />
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={10000} duration={14} />+
              </h3>
              <p className=" mt-1">Smiles Shared</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HobbyCommunity;
