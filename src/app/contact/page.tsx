export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Contact Me
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Have a project in mind, a question, or just want to say hi? I'd love
          to hear from you.
        </p>
      </div>
      <div className="mx-auto max-w-sm space-y-4 mt-8">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
