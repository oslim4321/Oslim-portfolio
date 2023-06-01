import React from "react";

const EmailSendSuccess = () => {
  return (
    <div className="flex flex-col w-full max-w-[768px] mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Email Sent Successfully
        </h2>
        <p className="text-gray-500 mb-8">
          Your email has been sent successfully. We will get back to you as soon
          as possible.
        </p>
        <div className="flex justify-between">
          <a href="/" className="btn btn-primary">
            <span>Go Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailSendSuccess;
