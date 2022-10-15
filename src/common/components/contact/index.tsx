/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Address from "../../svgs/contact/Address";
import Mail from "../../svgs/contact/Mail";
import Phone from "../../svgs/contact/Phone";

/* import { Container } from "./styles"; */

const Contact: React.FC = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="bg-[#FBFBFB] py-20 lg:py-[120px] overflow-hidden relative z-10"
    >
      <div className="flex flex-wrap lg:justify-between -mx-4">
        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
          <div className="bg-white relative rounded-lg p-8 sm:p-12 ">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder=" Name"
                  className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            outline-none
                            focus-visible:shadow-none  "
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder=" Email"
                  className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            outline-none
                            focus-visible:shadow-none
                            "
                />
              </div>

              <div className="mb-6">
                <textarea
                  rows={6}
                  placeholder=" Message"
                  className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="
                             w-full
                            text-[#fff]
                            bg-[#F1AB75]
                            rounded
                            p-3
                            transition
                            hover:bg-opacity-90
                            "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-8 sm:p-12 ">
          <div className="flex pb-[58px] items-center">
            <Address />
            <div className="ml-[24px] ">
              <p className="font-Inter font-semibold ">Address</p>
              <span className="font-Inter">
                3424 Layman Avenue, Fayetteville, NC
              </span>
            </div>
          </div>
          <div className="flex pb-[58px] items-center">
            <Phone />
            <div className="ml-[24px]">
              <p className="font-Inter font-semibold">Phone</p>
              <span className="font-Inter">(501) 414-1541</span>
            </div>
          </div>
          <div className="flex items-center">
            <Mail />
            <div className="ml-[24px]">
              <p className="font-Inter font-semibold">E-Mail</p>
              <span className="font-Inter">calebnyong02@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
