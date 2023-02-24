import Layouts from "@/components/Layouts";
import { motion } from "framer-motion";
import { Contacts } from "@/data/Contacts";
import { useEffect, useState } from "react";
import { ContentAnimation, FadeAnimation } from "@/components/Animations";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const form = document.forms["contact-form"];
    const submitForm = (e) => {
      e.preventDefault();
      form.reset();
      setOpenModal(true);
    };
    form.addEventListener("submit", submitForm);
    return () => form.removeEventListener("submit", submitForm);
  }, []);

  return (
    <Layouts pageTitle=" | Contact">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          CONTACT
        </motion.span>

        <motion.div
          {...ContentAnimation}
          className="relative my-10 w-9/12 text-right md:my-0 md:w-2/5"
        >
          {Contacts.map((contact) => (
            <a
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              key={contact.id}
              className="my-4 flex justify-end fill-secondary-light transition-all duration-500 hover:fill-primary-light hover:text-primary-light"
            >
              <div className="mr-8">
                <h4 className="text-base">{contact.name}</h4>
                <h3 className="text-sm font-extralight">{contact.value}</h3>
              </div>
              <div className="h-12 w-12">
                <svg
                  className="p-1"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={contact.svg} />
                </svg>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          {...ContentAnimation}
          className="relative my-10 w-9/12 md:my-0 md:w-1/3"
        >
          <div className="relative w-full md:w-4/5">
            <form name="contact-form">
              <input
                type="text"
                name="name"
                id="name"
                className="contact-form mb-3"
                placeholder="Name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="contact-form mb-3"
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
              <textarea
                name="message"
                id="message"
                className="contact-form mb-2 h-40"
                placeholder="Write your message..."
                onChange={(e) => setData({ ...data, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="contact-form cursor-none font-semibold"
              >
                Send Message
              </button>
            </form>

            <motion.div
              className={`absolute left-0 -top-12 flex w-full justify-center rounded-md border border-secondary-light bg-secondary-dark py-1 transition-all duration-500 md:-left-[80%] ${
                !openModal ? "opacity-0" : ""
              }`}
            >
              <p className="font-semibold text-primary-light">Message Sent!!</p>
              <p
                className="absolute right-0 top-0 py-[3px] px-4 font-bold transition-all duration-500 hover:text-primary-light"
                onClick={() => setOpenModal(false)}
              >
                x
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Contact;
