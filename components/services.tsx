import React from 'react';

import {
  Search,
  DollarSign,
  ThumbsUp,
  FileText,
  Mail,
  Star,
  Link,
  Code,
  ShoppingCart,
  Shield,
  BarChart3,
  Video,
  Edit,
  Mic,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine\nOptimization",
    description:
      "Enhance your website's visibility on search engines and attract more organic traffic with tailored SEO strategies.",
  },
  {
    icon: DollarSign,
    title: "Pay-Per-Click\nAdvertising",
    description:
      "Drive instant traffic and measurable results with cost-effective PPC campaigns across major platforms.",
  },
  {
    icon: ThumbsUp,
    title: "Social Media\nMarketing",
    description:
      "Engage your audience and grow your brand with compelling social media campaigns and strategies.",
  },
  {
    icon: FileText,
    title: "Content\nMarketing",
    description:
      "Create and distribute valuable, relevant content to attract and retain a clearly defined audience.",
  },
  {
    icon: Mail,
    title: "Email\nMarketing",
    description:
      "Reach your audience directly and foster loyalty with personalized email marketing campaigns.",
  },
  {
    icon: Star,
    title: "Influencer\nMarketing",
    description:
      "Collaborate with industry influencers to amplify your brand and connect with niche audiences.",
  },
  {
    icon: Link,
    title: "Affiliate\nMarketing",
    description:
      "Boost your sales through partnerships and a robust affiliate marketing network.",
  },
  {
    icon: Code,
    title: "Website\nDevelopment",
    description:
      "Build user-friendly, responsive websites that drive conversions and represent your brand effectively.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce\nSolutions",
    description:
      "Launch or enhance your online store with cutting-edge e-commerce solutions tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Online Reputation\nManagement",
    description:
      "Monitor, manage, and improve your brand’s online reputation to build trust with your audience.",
  },
  {
    icon: BarChart3,
    title: "Digital\nAnalytics",
    description:
      "Analyze data to gain actionable insights and make informed decisions for your digital campaigns.",
  },
  {
    icon: Video,
    title: "Video\nMarketing",
    description:
      "Captivate your audience with engaging video content tailored to your brand and goals.",
  },
  {
    icon: Edit,
    title: "Blog\nManagement",
    description:
      "Maintain and grow your blog with high-quality content and effective SEO practices.",
  },
  {
    icon: Mic,
    title: "Podcast\nMarketing",
    description:
      "Leverage the power of podcasts to build your brand and connect with your target audience.",
  },
  {
    icon: MessageCircle,
    title: "Messenger\nMarketing",
    description:
      "Engage with your audience directly and efficiently through messenger platforms.",
  },
];



const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className=' text-5xl font-bold mb-8'>Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 transition-transform duration-300 hover:translate-y-[20px] hover:translate-x-[10px] "
            >
              {/* Main card with border */}
              <div className="absolute inset-0 border-2  rounded-lg shadow-lg"  style={{
                borderTopRightRadius: '3rem',
                borderBottomLeftRadius: '3rem'
              }} />
              
              {/* Content */}
              <div className="relative space-y-4 " >
                <service.icon className="w-6 h-6" />
                <h3 className="text-xl font-bold whitespace-pre-line">
                  {service.title}
                </h3>
                <p className=" text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;