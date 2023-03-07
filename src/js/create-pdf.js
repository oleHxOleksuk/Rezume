import html2pdf from "html2pdf.js";
const doc = html2pdf();

const printedElement = document.querySelector(".container");
const options = {
  filename: "Oleh_Oleksiuk_junior_Front End-developer.pdf",
  image: { type: "jpeg", quality: 0.8 },
  html2canvas: { scale: 6 },
  jsPDF: {
    orientation: "p",
    unit: "px",
    format: [1200.0, 1697.0],
    putOnlyUsedFonts: true,
    floatPrecision: 16,
    hotfixes: ["px_scaling"],
    compress: false,
  },
};

const btnpdfRef = document.querySelector(".btn-pdf");
btnpdfRef.addEventListener("click", () => {
  // doc.set(options).from(printedElement).save();
  window.print();
});
