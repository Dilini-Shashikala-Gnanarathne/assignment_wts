"use client";

import { Download } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Resume() {
  return (
   <main className="relative w-full min-h-screen bg-linear-to-br from-(--bg-0) via-(--bg-1) to-(--bg-2) text-white overflow-hidden">
  <div className="absolute top-20 left-10 w-96 h-96 bg-(--accent)/8 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--accent-2)/8 rounded-full blur-3xl" />

  <section className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px] mx-auto py-20 sm:py-24 lg:py-32">
        {/* Header */}

       <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-(--accent)" />
            <span className="text-sm uppercase tracking-widest text-(--accent) font-semibold">
              Resume
            </span>
          </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="font-bold leading-none tracking-tight">
              <span className="block text-6xl md:text-7xl lg:text-8xl">
                {resumeData.name.first}
              </span>

              <span className="block text-6xl md:text-7xl lg:text-8xl">
                {resumeData.name.last}
              </span>
            </h1>

            <p className="mt-8 text-3xl text-neutral-400">
              {resumeData.title}
            </p>
          </div>

          <div className="flex lg:justify-end">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-5 text-black text-xl font-medium hover:bg-neutral-200 transition"
            >
              <Download size={24} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Contact */}

        <div className="mt-20 rounded-xl border border-white/10 bg-[#111] p-8">
          <div className="grid md:grid-cols-3 gap-10">
            {resumeData.contact.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <Icon
                    size={24}
                    className="text-neutral-500"
                  />

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-neutral-300">
                      {item.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Summary */}

        <section className="mt-24">
          <div className="rounded-xl border border-white/10 bg-[#111] p-8">
            <h2 className="text-4xl font-bold mb-8">
              Professional Summary
            </h2>

            <p className="text-lg leading-9 text-neutral-300">
              {resumeData.summary}
            </p>
          </div>
        </section>

        {/* Experience */}

        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-14">
            Work Experience
          </h2>

          <div className="space-y-16">
            {resumeData.experience.map((item) => (
              <div
                key={item.role}
                className="grid lg:grid-cols-[1fr_auto] gap-10 border-b border-white/10 pb-12"
              >
                <div>
                  <h3 className="text-3xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-2xl text-neutral-400 mt-2">
                    {item.company}
                  </p>

                  <ul className="mt-8 space-y-4 list-disc pl-6 text-neutral-300 text-lg leading-8">
                    {item.description.map((desc) => (
                      <li key={desc}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-neutral-500 uppercase whitespace-nowrap">
                  {item.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}

        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-14">
            Education
          </h2>

          <div className="space-y-10">
            {resumeData.education.map((item) => (
              <div
                key={item.degree}
                className="rounded-xl border border-white/10 bg-[#111] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-semibold">
                      {item.degree}
                    </h3>

                    <p className="mt-3 text-2xl text-neutral-400">
                      {item.institute}
                    </p>

                    <p className="mt-6 text-lg text-neutral-400">
                      {item.details}
                    </p>
                  </div>

                  <span className="text-neutral-500 text-lg whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Publications */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold mb-14">
              Publications
            </h2>

            <div className="space-y-10">
              {resumeData.publications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#111] p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                    <div>
                      <span className="text-sm uppercase tracking-widest text-neutral-500">
                        {item.type}
                      </span>

                      <h3 className="mt-4 text-2xl font-semibold leading-10">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-lg text-neutral-400">
                        {item.conference}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <div className="h-36" />
      </section>
    </main>
  );
}