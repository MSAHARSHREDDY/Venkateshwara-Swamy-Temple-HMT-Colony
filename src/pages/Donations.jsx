import { useState } from "react";
import jsPDF from "jspdf";

const Donations = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!form.name || !form.email || !form.phone || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    const amount = Number(form.amount);

    if (amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const resScript = await loadRazorpay();
    if (!resScript) {
      alert("Razorpay failed to load");
      return;
    }

    try {
      // ✅ CREATE ORDER
      const res = await fetch(
        "https://venkateshwara-swamy-temple-backend.vercel.app/api/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      // 🔥 SAFE JSON PARSE
      if (!res.ok) {
        const text = await res.text();
        console.error("Server Error:", text);
        alert("Backend error. Check logs.");
        return;
      }

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Sri Venkateswara Swamy Temple",
        description: "Donation",
        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              "https://venkateshwara-swamy-temple-backend.vercel.app/api/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...response,
                }),
              }
            );

            const data = await verifyRes.json();

            if (data.success) {
              alert("🙏 Donation Successful");

              // ✅ PDF RECEIPT
              const doc = new jsPDF();

              // Title
              doc.setFont("Helvetica", "bold");
              doc.setFontSize(18);
              doc.text(
                "Sri Venkateswara Swamy Temple",
                105,
                20,
                null,
                null,
                "center"
              );

              doc.setFontSize(14);
              doc.text("Donation Receipt", 105, 30, null, null, "center");

              doc.line(20, 35, 190, 35);

              // Content
              doc.setFontSize(12);

              doc.setFont("Helvetica", "bold");
              doc.text("Name:", 20, 50);
              doc.text("Email:", 20, 60);
              doc.text("Phone:", 20, 70);
              doc.text("Amount:", 20, 80);
              doc.text("Payment ID:", 20, 100);
              doc.text("Order ID:", 20, 110);

              doc.setFont("Helvetica", "normal");
              doc.text(form.name, 70, 50);
              doc.text(form.email, 70, 60);
              doc.text(form.phone, 70, 70);
              doc.text(`INR ${amount}`, 70, 80);
              doc.text(response.razorpay_payment_id, 70, 100);
              doc.text(response.razorpay_order_id, 70, 110);

              doc.text("Thank you for your donation 🙏", 20, 140);

              doc.save("donation-receipt.pdf");
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            alert("Verification error");
          }
        },

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        theme: {
          color: "#facc15",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error(error);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <div className="container-custom max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="uppercase tracking-widest text-yellow-500">
          Donations
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

      <div className="card space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black/50 border"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black/50 border"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black/50 border"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black/50 border"
        />

        <button
          onClick={handlePayment}
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:scale-105"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donations;