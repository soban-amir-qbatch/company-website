import React from 'react'

const footerItems = [
    { title: "How it works", links: ["Overview", "Pricing", "Services Areas"] },
    { title: "Resources", links: ["Customer Stories", "Knowledge Base", "Contact Us"] },
    { title: "Products", links: ["Corporate Partners", "Secure Identity", "Legal Help", "First Capital"] },
    { title: "Company", links: ["About Us", "Careers", "Terms of Use"] },
  ];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-6 gap-6 py-10">

        <div className="col-span-2 flex flex-col justify-center items-start">
          <img src="/logo-footer.png" alt="Logo" className="h-10 w-10" />
          <span className="text-black font-bold mt-2">The smarter way to start your next idea.</span>
        </div>

        {footerItems.map((item, index) => (
          <div key={index} className="flex flex-col justify-start items-start text-sm gap-3">
            <h3 className="font-semibold">{item.title}</h3>
            {item.links.map((link, linkIndex) => (
              <a key={linkIndex} href="#" className="text-secondary hover:text-blue-600">{link}</a>
            ))}
          </div>
        ))}

      </div>
    </footer>
  )
}
