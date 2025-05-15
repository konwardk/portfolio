export const Contact = () => {
    const contactInfo = [
        {
        icon: "/icons/email.png",
        text: "dipankorkonwar15@gmail.com"
    }
]

return (
  <>
    <div className="w-full h-full pt-20 pb-30" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name / Organization
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name or Organization"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </>
);

}