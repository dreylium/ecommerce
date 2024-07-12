import { Phone, Message } from '@ui/assets/Icons';

const Contact = () => {
  return (
    <div className="layout-p mx-auto grid gap-4 px-6 sm:grid-cols-[minmax(0,340px)_1fr] lg:gap-8 lg:py-20">
      <form className="grid max-w-screen-2xl grid-cols-1 grid-rows-6 gap-x-4 gap-y-2 rounded px-4 py-6 shadow-[0_0_5px_rgba(0,0,0,0.1)] sm:order-1 lg:grid-cols-3 lg:grid-rows-[1fr_13rem_1fr] lg:gap-y-8 lg:p-10 [&_input]:w-full">
        <input
          name="name"
          type="text"
          placeholder="Your Name*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <textarea
          name="messages"
          placeholder="Your Message*"
          className="row-span-2 resize-none rounded border bg-clr-Secondary px-4 py-3.5 outline-none lg:col-span-3 lg:row-auto"
        />
        <div className="flex py-2 lg:col-start-3 lg:justify-end">
          <button type="submit" className="w-full rounded bg-clr-ButtonRed font-medium text-white">
            Send Message
          </button>
        </div>
      </form>
      <div className="rounded px-10 py-2 text-sm leading-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <section className="border-b py-8">
          <div className="mb-6 flex items-center gap-x-4 font-medium">
            <Phone />
            <h2>Call To Us</h2>
          </div>
          <p className="mb-4">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </section>
        <section className="border-b py-8">
          <div className="mb-6 flex items-center gap-x-4 font-medium">
            <Message />
            <h2>Write To Us</h2>
          </div>
          <p className="mb-4">Fill out our form and we will contact you within 24 hours.</p>
          <p className="mb-4">Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
