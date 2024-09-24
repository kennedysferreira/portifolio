import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!email || !name || !message) {
      return toast.warning("Fill in all the fields");
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_gn0f6vn",
        "template_bcwefxr",
        templateParams,
        "wn4u8ho1VnTW-PYp6"
      )
      .then(
        () => {
          toast.success("Email sent, thanks!");
          setEmail("");
          setName("");
          setMessage("");
        },
        (err) => {
          toast.error("Error, try again later");
          console.log(err);
        }
      );

    return;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="border border-slate-800 bg-black/10 hover:bg-slate-950/50 hover:border-slate-500 focus-within:border-slate-500 focus-within:bg-slate-950/50 transition-all duration-300 rounded-md">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            value={message}
            placeholder="What project you have in mind?"
            className="bg-transparent  focus:outline-none w-full h-40 resize-none py-2 px-4"
          />
        </div>
        <div className="border border-slate-800 py-2 px-4 bg-black/10 hover:bg-slate-950/50 hover:border-slate-500 focus-within:border-slate-500 focus-within:bg-slate-950/50 transition-all duration-300 rounded-md">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            placeholder="What's your name?"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
        <div className="border border-slate-800 py-2 px-4 bg-black/10 hover:bg-slate-950/50 hover:border-slate-500 focus-within:border-slate-500 focus-within:bg-slate-950/50 transition-all duration-300 rounded-md">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            value={email}
            placeholder="Leave your email, I would get back to you soon!"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md  py-2 px-4 text-slate-200 bg-indigo-500 hover:bg-indigo-600  transition-all duration-300"
      >
        Let's do it
      </button>
    </form>
  );
}
