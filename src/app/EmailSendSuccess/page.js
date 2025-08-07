import Link from "next/link";

export const metadata = {
  title: "Message Sent Successfully",
  description:
    "Thank you for contacting Sooto Selim! Your message has been received successfully. I'll respond to your inquiry as soon as possible.",
  robots: {
    index: false,
    follow: true,
  },
};

const EmailSendSuccess = () => {
  return (
    <section className="flex flex-col w-full max-w-[768px] mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Email Sent Successfully
        </h2>
        <p className="text-gray-500 mb-8">
          Thank you for reaching out! I appreciate your interest in my work.
          I'll be in touch soon to discuss next steps.
        </p>
        <button className="flex justify-between border px-3 py-2">
          <Link href="/" className="btn btn-primary">
            <span>Go Back to Home</span>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default EmailSendSuccess;
