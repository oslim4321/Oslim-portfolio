import React from "react";

const Cv = () => {
  return (
    <div>
      {" "}
      <main class="font-jost hyphens-manual">
        {/* <!-- Page --------------------------------------------------------------------------------------------------------> */}
        <section class="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
          {/* <!-- Name ----------------------------------------------------------------------------------------------------> */}
          <header class="inline-flex items-baseline justify-between w-full mb-2 align-top border-b-4 border-gray-300">
            <section class="block">
              <h1 class="mb-0 text-5xl font-bold text-gray-700">
                Thomas Leon Highbaugh
              </h1>
              {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
              <h2 class="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
                Full Stack Web Development
              </h2>
              {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}

              <h3 class="m-0 mt-2 ml-2 font-semibold text-lg text-gray-500 leading-snugish">
                San Francisco, California
              </h3>
            </section>
            {/* <!--   Initials Block         --> */}
            <section
              class="justify-between px-3 mt-0 mb-5 text-4xl font-bold leading-none text-white initials-container bg-gray-700 print:bg-black"
              //   style="padding-bottom: 1.5rem; padding-top: 1.5rem;"
            >
              <section class="text-center initial">T</section>
              <section class="text-center initial">L</section>
              <section class="text-center initial">H</section>
            </section>
          </header>

          {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
          <section class=" col-gap-8 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
            <section class="flex-col">
              {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
              <section class="pb-2 mb-0 mt-4 first:mt-0">
                {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
                <section class="break-inside-avoid">
                  <section class="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                    <ul class="list-inside pr-7">
                      <li class="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700 print:">
                        <a href="https://thomasleonhighbaugh.me" class="group">
                          <span class="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                            Portfolio:
                          </span>
                          thomasleonhighbaugh.me
                          <span class="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">
                            ↗
                          </span>
                        </a>
                      </li>
                      <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
                        <a
                          href="https://github.com/Thomashighbaugh"
                          class="group"
                        >
                          <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                            Github:
                          </span>
                          Thomashighbaugh
                          <span class="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">
                            ↗
                          </span>
                        </a>
                      </li>

                      <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
                        <a href="mailto:thighbaugh@zoho.com" class="group">
                          <span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                            Email:
                          </span>
                          thighbaugh@zoho.com
                          <span class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700">
                            ↗
                          </span>
                        </a>
                      </li>
                      <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
                        <a href="tel:+15103095128">
                          <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                            Phone:
                          </span>
                          +1(510)309-5128
                        </a>
                      </li>
                    </ul>
                  </section>
                </section>
              </section>
              {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
              <section class="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
                {/* <!-- To keep in the same column --> */}
                <section class="break-inside-avoid">
                  <h2 class="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
                    SUMMARY
                  </h2>

                  <section class="mb-2 break-inside-avoid">
                    <p class="mt-2 leading-normal text-gray-700 text-md">
                      Full stack autodiadact with demonstrable capacity to
                      assess and manage complex business needs and surmount
                      obstacles in the way thereof thus producing refined and
                      accessible work products.
                    </p>
                  </section>
                </section>
              </section>

              {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
              <section class="pb-0 break-inside-avoid mt-2 border-b-4 border-gray-300 first:mt-0">
                {/* <!-- To keep in the same column --> */}
                <section class="break-inside-avoid">
                  <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    EDUCATION
                  </h2>
                  {/* <!-- school ---------------------------------------------------------------------------> */}
                  <section class="mt-2  border-b-2 break-inside-avoid">
                    <header>
                      <h3 class=" text-lg font-semibold text-gray-700 leading-snugish">
                        California State University East Bay
                      </h3>
                      <p class="leading-normal text-md text-gray-500">
                        2009 &ndash; 2014 | Bachelor of Arts
                      </p>
                    </header>
                    <p class="mt-1 leading-normal text-md text-gray-800">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        Major:
                      </span>
                      Political Science
                    </p>
                    <p class="mt-1 leading-normal text-md text-gray-800">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        Minor:
                      </span>
                      Economics
                    </p>
                    <p class="leading-normal text-gray-700 text-md">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        GPA:
                      </span>
                      3.9
                    </p>
                  </section>
                  {/* <!--school 2---------------------------------------------------------------------------------------------> */}
                  <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                    <header>
                      <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                        Las Positas Community College
                      </h3>
                      <p class="leading-normal text-md text-gray-500">
                        2018 &ndash; Present | Associate of Science/Continuing
                        Education
                      </p>
                    </header>
                    <p class="mt-1 leading-normal text-md text-gray-800">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        Major:
                      </span>
                      Computer Science
                    </p>
                    <p class="mt-1 leading-normal text-md text-gray-800"></p>
                    <p class="leading-normal text-gray-700 text-md">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        GPA:
                      </span>
                      4.0
                    </p>
                  </section>

                  {/* <!--school 3 ---------------------------------------------------------------------------------> */}
                  <section class="pb-4 mt-4 mb-4 break-inside-avoid">
                    <header>
                      <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                        Codify Academy
                      </h3>
                      <p class="leading-normal text-md text-gray-500">
                        2018 | Certificate
                      </p>
                    </header>
                    <p class="mt-1 leading-normal text-md text-gray-800">
                      <span class="font-semibold text-gray-700 text-md leading-snugish">
                        Subject:
                      </span>
                      Front End Development
                    </p>
                  </section>
                </section>
              </section>

              {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
              <section class="pb-6 mb-4 mt-0 first:mt-0 break-inside-avoid border-b-4 border-gray-300 ">
                {/* <!-- To keep in the same column --> */}
                <section class="break-inside-avoid">
                  <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    SKILLS
                  </h2>
                  <section class="mb-0 break-inside-avoid">
                    <section class="mt-1 last:pb-1">
                      <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1 font-bold">
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          HTML5
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          CSS3
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          SCSS
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Prompt Engineering
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Containerization
                        </li>

                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          CI/CD
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          System Administration
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          BASH
                        </li>

                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          AWS
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Linux
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Javascript
                        </li>

                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Typescript
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Node.js
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          React.js
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Python
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          NoSQL
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Postgresql
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          MongoDB
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Lua
                        </li>
                        <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
                          Functional Programming
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </section>
              {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
              <section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
                {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
                <section class="break-inside-avoid">
                  <h2 class="mb-2 text-xl font-bold tracking-widest text-gray-800 print:font-normal">
                    EXPERIENCE
                  </h2>
                  {/* <!--Job 1--> */}
                  <section class="mb-2 break-inside-avoid border-b-2 border-gray-300">
                    <header>
                      <h3 class="text-md font-semibold text-gray-800 leading-snugish ">
                        Full Stack Web Developer
                      </h3>
                      <p class="leading-normal text-sm text-gray-500">
                        Jun 2018 &ndash; Present | Freelance
                      </p>
                    </header>
                    <ul class="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Developed high-quality web applications from scratch,
                        using a range of programming languages, including HTML,
                        CSS, JavaScript, PHP, and Python, to meet clients'
                        specific needs
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Utilized various front-end frameworks, such as React,
                        Angular, and Vue.js, and back-end frameworks, such as
                        Node.js, Express, and Laravel, to deliver robust and
                        scalable web solutions.
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Designed and implemented databases using SQL and NoSQL
                        technologies, such as MySQL, PostgreSQL, MongoDB, and
                        Firebase, to store and manage data effectively
                      </li>
                    </ul>
                  </section>
                  {/* <!-- job 2  --> */}
                  <section class="mb-2 break-inside-avoid border-b-2 border-gray-300">
                    <header>
                      <h3 class="text-md font-semibold text-gray-800 leading-snugish">
                        Computer Repair Technician
                      </h3>
                      <p class="leading-snugish text-sm text-gray-500">
                        Mar 2018 &ndash; Present | Freelance
                      </p>
                    </header>
                    <ul class="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Provided freelance computer repair services to
                        individual and business clients, including
                        troubleshooting, diagnosis, and repair of hardware and
                        software issues.
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Demonstrated expertise in a range of operating systems,
                        including Windows, macOS, and Linux, and a variety of
                        hardware components, including CPUs, RAM, hard drives,
                        and graphics cards.
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Offered customized solutions to clients, including
                        hardware upgrades, software installations, and
                        virus/malware removal, to meet their specific needs.
                      </li>
                    </ul>
                  </section>
                  {/* <!-- job 3 --> */}
                  <section class="mb-2 break-inside-avoid border-b-2 border-gray-300">
                    <header>
                      <h3 class="text-md font-semibold text-gray-800 leading-snugish">
                        Assistant Manager
                      </h3>
                      <p class="leading-snugish text-sm text-gray-500">
                        May 2012 &ndash; Apr 2018 | Pet Food Express
                      </p>
                    </header>
                    <ul class="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Trained and supervised staff on product knowledge,
                        customer engagement, and sales techniques.
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Maintained a clean and organized store environment,
                        ensuring the highest level of customer satisfaction.
                      </li>

                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Demonstrated a deep understanding of the pet food
                        industry, including trends, products, and competitors,
                        to provide customers with informed recommendations and
                        advice.
                      </li>
                    </ul>
                  </section>
                  {/* <!-- job 4 --> */}
                  <section class="mb-2 break-inside-avoid border-b-0 border-gray-300">
                    <header>
                      <h3 class="text-md font-semibold text-gray-800 leading-snugish">
                        Executive Assistant
                      </h3>
                      <p class="leading-snugish text-sm text-gray-500">
                        Jun 2009 &ndash; Dec 2011 | 360 Custom Closets and
                        Cabinets
                      </p>
                    </header>
                    <ul class="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Provided high-level administrative support to the small
                        business executive, including managing schedules,
                        booking travel arrangements, and coordinating meetings
                        and events.
                      </li>

                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Managed communication on behalf of the executive,
                        including answering phone calls and emails, and
                        responding to inquiries and requests in a timely and
                        professional manner.
                      </li>
                      <li>
                        <span class="transform -translate-y-px select-none text-gray-500">
                          &rsaquo;
                        </span>
                        Coordinated and maintained relationships with vendors,
                        clients, and other external stakeholders, ensuring that
                        all interactions were professional and aligned with the
                        business's values.
                      </li>
                    </ul>
                  </section>

                  {/* <!--                Additional Jobs Would Go Here--> */}
                </section>
              </section>
            </section>
          </section>
        </section>
        {/* <!-- end Column --> */}

        {/* <!-- end Page --> */}
      </main>
    </div>
  );
};

export default Cv;
