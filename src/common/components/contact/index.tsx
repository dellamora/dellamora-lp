/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Address from "../../svgs/contact/Address";
import Mail from "../../svgs/contact/Mail";
import Phone from "../../svgs/contact/Phone";

/* import { Container } from "./styles"; */

const Contact: React.FC = (): JSX.Element => {
  return (
    <section className="bg-[#FBFBFB] py-20 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container">
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
                            focus-visible:shadow-none
u                            "
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
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]"></span>
                <span className="absolute -right-10 top-[90px] z-[-1]"></span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Address />
              <p className="font-Inter text-bold">Address</p>
              <span className="font-Inter">
                3424 Layman Avenue, Fayetteville, NC
              </span>
            </div>
            <div>
              <Phone />
              <p className="font-Inter text-bold">Phone</p>
              <span className="font-Inter">(501) 414-1541</span>
            </div>
            <div>
              <Mail />
              <p className="font-Inter text-bold">E-Mail</p>
              <span className="font-Inter">calebnyong02@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
