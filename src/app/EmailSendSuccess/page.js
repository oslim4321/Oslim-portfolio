import Link from "next/link";
import React from "react";

const EmailSendSuccess = () => {
  return (
    <div className="flex flex-col w-full max-w-[768px] mx-auto">
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
    </div>
  );
};

export default EmailSendSuccess;
