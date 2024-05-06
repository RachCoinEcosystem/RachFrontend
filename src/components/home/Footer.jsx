
import { footerContent } from "../../constants";


const Footer = () => {
  const footerData = [
    { title: 'Protocols', links: footerContent.protocols.links },
    { title: 'Governance', links: footerContent.governance.links },
    // ... add other sections from footerContent
    { title: 'Developers', links: footerContent.developers.links },
  ];

  const subscribeContent = {
    title: subscribe.title,
    subtitle: subscribe.subtitle,
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
          {/* Links */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8">
              {footerData.map((section, index) => (
                <LinkSection key={index} title={section.title} links={section.links} />
              ))}
            </div>
          </div>
          {/* Subscribe */}
          <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="space-y-3">
              <div className="mb-1">{subscribeContent.title}</div>
              <p className="text-sm text-gray-400">{subscribeContent.subtitle}</p>
              <button className="h-16 my-3">Subscribe</button>
              <div className="flex space-x-1">
                {socials.map((item, i) => (
                  <item.icon key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-5" />
        <div className="flex flex-col md:flex-row justify-between items-center pb-6">
          <CopyrightSection content={copyright} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Create LinkSection and CopyrightSection components in a separate file (FooterComponents.js):

import React from 'react';

const LinkSection = ({ title, links }) => (
  <div className="space-y-2.5">
    <h3>{title}</h3>
    {links.map(({ title }) => (
      <p key={title} className="text-sm text-gray-400 cursor-pointer hover:text-yellow-500">
        {title}
      </p>
    ))}
  </div>
);

const CopyrightSection = ({ content }) => (
  <p className="text-sm text-gray-400">
    {content.left} {content.center} {content.right}
  </p>
);

export { LinkSection, CopyrightSection };
