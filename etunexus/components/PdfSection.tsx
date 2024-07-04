"use client";
import { useState } from "react";
import PdfViewer from "../components/PdfViewer";
import { Button } from "./ui/button";

const PdfSection = () => {
  const [showPdf, setShowPdf] = useState(false);

  const togglePdfViewer = () => {
    setShowPdf((prevShowPdf) => !prevShowPdf);
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-screen-lg px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="text-center space-y-4">
          <h2 className="text-black text-3xl font-bold">PDF Viewer Section</h2>
          <p className="text-lg text-gray-700">
            View or download the PDF document below:
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          {showPdf ? (
            <PdfViewer url={"/CH1-Diélectriques.pdf"} />
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <Button
                className="inline-flex items-center justify-center h-12 px-6 bg-primary text-white font-medium rounded-md shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark disabled:pointer-events-none disabled:opacity-50"
                onClick={togglePdfViewer}
              >
                Show PDF
              </Button>
              <Button>
                <a href={"/CH1-Diélectriques.pdf"} download>
                  Download PDF
                </a>
              </Button>
            </div>
          )}
          {showPdf && (
            <Button
              className="inline-flex items-center justify-center h-12 px-6 bg-primary text-white font-medium rounded-md shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark disabled:pointer-events-none disabled:opacity-50"
              onClick={togglePdfViewer}
            >
              Hide PDF
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PdfSection;
