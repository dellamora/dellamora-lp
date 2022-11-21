/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Address from "../../common/svgs/contact/Address";
import Mail from "../../common/svgs/contact/Mail";
import Phone from "../../common/svgs/contact/Phone";

/* import { Container } from "./styles"; */

const Contact: React.FC = (): JSX.Element => {
  return (
    <section
      id="contact"
      className=" lg:flex bg-[#FBFBFB] py-20 lg:py-[120px] overflow-hidden relative lg:justify-center "
    >
      <div className="flex flex-wrap lg:justify-between w-full  ">
        <div className="w-full lg:w-1/2 xl:w-6/12 ">
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
                            bg-primary
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
        <div className="flex gap-12 flex-col items-start lg:justify-center p-8 sm:p-12 w-full lg:w-1/2 xl:w-6/12 ">
          <div className="flex lg:ml-36 gap-12 items-center">
            <Address />
            <div>
              <p className="font-Inter font-semibold ">Address</p>
              <span className="font-Inter">Rio Grade do Sul, Brazil</span>
            </div>
          </div>

          <div className="flex lg:ml-36 gap-12 items-center">
            <Mail />
            <div>
              <p className="font-Inter font-semibold">E-Mail</p>
              <span className="font-Inter">francielle@dellamora.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
