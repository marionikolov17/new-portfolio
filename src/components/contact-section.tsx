export default function ContactSection() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      id="contact"
    >
      <div className="w-full px-8 lg:px-0 lg:w-[750px] flex flex-col gap-y-4 overflow-x-hidden">
        <div className="py-2 flex">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-text-500 capitalize">
            Let&apos;s get in touch.
          </h2>
        </div>
        <p className="text-secondary-text-500 text-sm sm:text-base">
          Or you could send me an email on{' '}
          <span className="font-bold">marionikolovdev@gmail.com</span>
        </p>
        <form className="flex flex-col gap-y-8 mt-4">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
            className="w-full py-4 px-6 text-sm sm:text-base rounded-lg border border-background-100 text-white outline-none focus:bg-background-300"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            className="w-full py-4 px-6 text-sm sm:text-base rounded-lg border border-background-100 text-white outline-none focus:bg-background-300"
          />
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            required
            className="w-full py-6 px-6 text-sm sm:text-base rounded-lg border border-background-100 text-white outline-none focus:bg-background-300 resize-none"
          />
          <button
            type="submit"
            className="w-max py-4 px-10 cursor-pointer rounded-lg text-sm sm:text-base bg-primary-text-500 text-background-500 outline-none hover:bg-primary-text-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
