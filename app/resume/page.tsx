export const metadata = {
  title: 'Resume — Adam Kayal',
  description: 'Resume of Adam Kayal',
}

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-extrabold">Resume</h1>
        <p className="mt-2 opacity-80">
          The PDF is embedded below. If you don’t see it, use the download link.
        </p>

        <div className="mt-6 rounded-2xl border overflow-hidden">
          <object data="/Adam_Resume.pdf" type="application/pdf" className="w-full h-[85vh]">
            <p className="p-4">
              Your browser can’t display PDFs inline.
              <a className="underline ml-1" href="/Adam_Resume.pdf" target="_blank" rel="noreferrer">
                Download the PDF instead
              </a>.
            </p>
          </object>
        </div>
      </div>
    </section>
  )
}
