import React from 'react';
import { Users, Target, Lightbulb, Gift, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen ">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold  mb-6">
            Turning Digital Dreams Into Reality
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
             We&apos;re a team committed to building high-quality products. It&apos;s our mission
        to innovate and deliver the best experience.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Understand Your Vision</h3>
            <p className="text-gray-600">Your goals become our mission. We dive deep to understand your unique needs.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovate with Impact</h3>
            <p className="text-gray-600">We push boundaries to deliver meaningful results that make a difference.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Foster Connections</h3>
            <p className="text-gray-600">Building authentic relationships that drive real engagement and growth.</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold  text-center mb-12">What We Do Best</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Marketing</h3>
                <p className="text-gray-600">Data-backed strategies tailored to your brand&apos;s goals, ensuring maximum impact and ROI.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Content Development</h3>
                <p className="text-gray-600">From eye-catching visuals to powerful storytelling, we create content that resonates.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Audience Engagement</h3>
                <p className="text-gray-600">Building trust, loyalty, and advocacy among your audience through authentic connections.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold  mb-6">Let&apos;s Start Your Journey</h2>
          <p className="text-gray-600 mb-8">
            Whether you&apos;re looking to redefine your brand, engage a wider audience, or amplify your message, we&apos;re here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;