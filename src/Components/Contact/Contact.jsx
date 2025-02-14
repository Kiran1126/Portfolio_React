import Heading from "../Heading/Heading";
import BtnContainer from "../Container/BtnContainer";

const Contact = () => {
  return (
    <section className="bg-custom-dark h-screen w-4/5 float-right flex flex-col justify-evenly items-center">
      <Heading faded="Contact" bold="Get In Touch" theme="text-white" borderColor="border-orange-500"/>
      <div className="flex flex-row justify-evenly gap-20">
        <div className="flex flex-col text-slate-50 mt-10 text-xl md:w-1/2">
          <p className=" text-2xl font-bold">Let's talk about everything!</p>
          <div className="flex flex-wrap">
            <p>Don't like forms? Send me an 
            <span className="text-orange-500 cursor-pointer ml-2 hover:underline" onClick={() => 
              {window.location.href ='mailto:kiransamanta945@gmail.com';}}>email</span>
            . 👋</p>
          </div>
        </div>
        <form className="w-full md:w-1/2">
          <div className="flex flex-col text-lg gap-3">
            <img className="w-full h-44 object-cover rounded-md cursor-not-allowed" src="https://i.pinimg.com/originals/9c/60/36/9c6036872d32db27c82c47c8a5657777.gif" alt="meme" />
            <div className="flex flex-col md:flex-row gap-5">
              <input type="text" name="name" className="h-14 md:w-1/2 w-full rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Your name"/>
              <input type="email" name="email" className="h-14 md:w-1/2 w-full rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Email address"/>
            </div>
            <input type="text" name="subject" className="h-14 w-full rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Subject"/>
            <textarea type="text" name="message" className="h-40 p-5 w-full rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Message"/>
            <BtnContainer>
              Send Message
            </BtnContainer>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;