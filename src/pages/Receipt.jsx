import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

const Receipt = () => {
  const query = new URLSearchParams(useLocation().search);

  const paymentId = query.get("payment_id");
  const name = query.get("name") || "Devotee";
  const amount = query.get("amount") || "0";

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Sri Venkateswara Swamy Temple", 20, 20);

    doc.setFontSize(14);
    doc.text("Donation Receipt", 20, 30);

    doc.line(20, 35, 190, 35);

    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Amount: ₹${amount}`, 20, 60);
    doc.text(`Payment ID: ${paymentId}`, 20, 80);

    doc.text("Thank you for your donation 🙏", 20, 100);

    doc.save("receipt.pdf");
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">🙏 Payment Successful</h1>

      <p className="mt-4">Payment ID: {paymentId}</p>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-yellow-400 px-6 py-3 rounded-xl font-bold"
      >
        Download PDF Receipt
      </button>
    </div>
  );
};

export default Receipt;