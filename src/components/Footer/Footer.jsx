import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0C1D39] text-white py-12 lg:py-16 px-[11%] text-[16px] lg:text-[20px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 md:basis-[20%] xl:basis-[30%] mr-4 xl:mr-8">
            <a href="/">
              <img
                src="https://reveza.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8mv3taq0%2Fproduction%2F5567d013a334e525986bfffc9601219b42ecb0b4-202x70.png&w=256&q=75"
                alt="#" width="150" height="50"

              />
            </a>
            <p className="pt-8">
              <span >Contact</span> <br />
              <span class="text-[#838383] text-[14px] lg:text-[16px]">
                Reveza Technologies Pvt. Ltd. 2nd floor, Varthur Main Rd, above
                Urban Ladder, Palm Meadows, Ramagondanahalli, Whitefield,
                Bengaluru, Karnataka 560066
              </span>
            </p>
          </div>
          <div className="flex-1">
            <p>
              <span>Mail us at</span> <br />
              <a className="text-[#838383] text-[14px] lg:text-[16px]" href="">support@raveja.com</a>
            </p>
            <p>
              <br />
              <span>Reach us at</span>
              <br />
              <a className="text-[#838383] text-[14px] lg:text-[16px]" href="">+91 8355962866</a>
            </p>
          </div>
          <div className="flex-1">
            <p>Quick Links</p>
            <a className="text-[#838383] text-[14px] lg:text-[16px]" href="">Terms and Condition </a> <br />
            <a className="text-[#838383] text-[14px] lg:text-[16px]" href="">Privacy Policy</a>
          </div>
          <div className="flex-1">
            <p>Follow us on</p>
            <div>
              <a href="">
                <img
                  src="https://reveza.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8mv3taq0%2Fproduction%2Fb29fc84675b5770516de7bc6a1bc0aab2c09a5b8-32x32.png&w=32&q=75"
                  alt="#"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] md:text-[12px] border-t mt-16 pt-16 gap-3">
            <p>Copyright © 2024 Reveza Technologies Pvt. Ltd</p>
            <p>Maintained By Ailoitte Technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
