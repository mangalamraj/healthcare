import { Button } from "../../../components/ui/button";

const ContactSection = () => {
  return (
    <div className="container pt-10">
      <div className="flex flex-wrap">
        <div className="w-full ">
          <div className=" mx-auto text-center md:mb-[50px]">
            <h2 className="md:text-4xl text-2xl font-semibold mt-4 md:mt-8 mb-2 text-left md:text-center md:mb-2 tracking-tight">
              Ready to get started with Flair Health?{" "}
            </h2>
            <p className="2xl:text-center text-sm font-normal md:w-[55%] text-left m-auto text-gray-500 2xl:text-base mb-8">
              Achieve better patient outcomes, increased engagement, and higher
              revenue for your practice without additional staff burden. It's a
              win-win.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-9/12 ">
          <form
            target="_blank"
            action="https://formsubmit.co/b502af0edb5c06969c992fbc4f10ee95"
            method="POST"
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="md:mb-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-3 border-b-2 border-gray-300 focus:border-b-[#14a8e1] bg-gray-100"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="md:mb-6 mb-4">
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization"
                    className="w-full p-3 border-b-2 border-gray-300 focus:border-b-[#14a8e1] bg-gray-100"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="md:mb-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border-b-2 border-gray-300 focus:border-b-[#14a8e1] bg-gray-100"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="md:mb-6 mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 border-b-2 border-gray-300 focus:border-b-[#14a8e1] bg-gray-100"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-6">
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Optional Message"
                    className="w-full p-3 border-b-2 border-gray-300 focus:border-b-[#14a8e1] bg-gray-100 resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button className="bg-[#14a8e1] hover:bg-[#14a8e1] hover:opacity-85 px-8 mb-10">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
