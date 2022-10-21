import React, { useState } from "react";
import { sendEmail } from "../services/emailSerive";
import { motion } from "framer-motion";
import useCheckMobile from "../hooks/useCheckMobile";
const Contacts = () => {
  let intialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [mail, setMail] = useState(intialForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setMail(() => ({ ...mail, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    sendEmail(mail);
    setMail(intialForm);
    alert("Email send!!");
  };

  const isMobile = useCheckMobile();
  const scrollAnim = !isMobile
    ? {
        start: {
          y: 100,
          opacity: 0,
        },
        loaded: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        },
        duration: {
          duration: 0.8,
        },
        dispaly: {
          once: true,
          amount: 0.8,
        },
      }
    : {
        start: {},
        loaded: {},
        duration: {},
        dispaly: {},
      };

  return (
    <motion.div
      variants={scrollAnim}
      initial="start"
      whileInView="loaded"
      transition="duration"
      viewport="display"
    >
      <h3 className="text-2xl text-white text-center mb-8">Get in Touch!</h3>
      <form className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:grid md:grid-row-2 md:grid-flow-col md:gap-1 justify-center items-center">
          <input
            type="text"
            name="name"
            value={mail.name}
            onChange={changeHandler}
            placeholder="Name"
            className="bg-primary border-2 px-2 py-1 text-sm text-slate-200 border-border w-[80vw] md:w-[19.8vw] my-1"
          ></input>
          <input
            type="text"
            name="email"
            value={mail.email}
            onChange={changeHandler}
            placeholder="Email"
            className="bg-primary border-2 px-2 py-1 text-sm text-slate-200 border-border w-[80vw] md:w-[19.8vw] my-1"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={mail.subject}
            onChange={changeHandler}
            placeholder="Subject"
            className="bg-primary border-2 px-2 py-1 text-sm text-slate-200 border-border w-[80vw] md:w-[40vw] my-1"
          ></input>
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            value={mail.message}
            onChange={changeHandler}
            placeholder="Message"
            rows={8}
            className="bg-primary border-2 px-2 py-1 text-sm text-slate-200 border-border w-[80vw] md:w-[40vw] my-1"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="border border-border px-10 py-1 text-sm text-slate-300 mt-3 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800"
            type="submit"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contacts;
