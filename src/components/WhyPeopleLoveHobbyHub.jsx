import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Heart, Users, Star, MessageCircle } from 'lucide-react';

const WhyPeopleLoveHobbyHub = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <Fade direction="up" cascade triggerOnce={true} duration={600}>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Why People Love HobbyHub</h2>
          <p className="text-gray-600 mb-12">Discover what makes our community special</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Heart className="mx-auto text-red-400" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Passion Driven</h3>
              <p className="text-sm text-gray-500">People connect over shared hobbies and true interests.</p>
            </div>

            <div className="border-2 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Users className="mx-auto text-purple-400" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Supportive Community</h3>
              <p className="text-sm text-gray-500">Meet people who inspire, guide, and grow with you.</p>
            </div>

            <div className="border-2 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Star className="mx-auto text-yellow-500" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Quality Events</h3>
              <p className="text-sm text-gray-500">Join well-organized meetups and exciting group activities.</p>
            </div>

            <div className="border-2 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <MessageCircle className="mx-auto text-blue-400" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Easy Communication</h3>
              <p className="text-sm text-gray-500">Stay connected with group members anytime, anywhere.</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhyPeopleLoveHobbyHub;
