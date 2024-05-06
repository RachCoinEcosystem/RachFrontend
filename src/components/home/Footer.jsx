import { socialMenu } from "../../constants";
import { footerContent } from "../../constants";



const LinkSection = ({ title, links }) => (
  <div className="space-y-2.5">
    <h3>{title}</h3>
    {links.map(({ title }) => (
      <p
        key={title}
        className="text-sm text-gray-400 cursor-pointer hover:text-yellow-500"
      >
        {title}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { protocols, governance, support, developers, subscribe, copyright } = footerContent;
  const socials = socialMenu;

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
          {/* Links */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8">
              {/* Protocols */}
              <div><LinkSection title={protocols.title} links={protocols.links} /></div>
              {/* Governance */}
              <div><LinkSection title={governance.title} links={governance.links} /></div>
              {/* Support */}
              <div><LinkSection title={support.title} links={support.links} /></div>
              {/* Developers */}
              <div><LinkSection title={developers.title} links={developers.links} /></div>
            </div>
          </div>
          {/* Subscribe */}
          <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="space-y-3">
              <div className="mb-1">{subscribe.title}</div>
              <p className="text-sm text-gray-400">{subscribe.subtitle}</p>
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
          <p className="text-sm text-gray-400">{copyright.left}</p>
          <p className="text-sm text-gray-400">{copyright.center}</p>
          <p className="text-sm text-gray-400">{copyright.right}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
