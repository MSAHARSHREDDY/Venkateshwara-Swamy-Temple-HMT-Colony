import { useTranslation } from "react-i18next";
import templeData from "../../data/templeData.json";
import { FaQrcode, FaPhoneAlt } from "react-icons/fa";

export default function TopUtilityBar() {
  const { i18n } = useTranslation();

  return (
    <div className="bg-amber-900 text-amber-50 py-2 px-4 text-[10px] md:text-sm sticky top-0 z-[100]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {templeData.sevaPrices.map((seva, idx) => (
            <span key={idx} className="border-r border-amber-700 pr-4 last:border-0 whitespace-nowrap">
              {/* Logic: If Telugu is selected, show Telugu name, otherwise English name */}
              {i18n.language === "te" ? seva.telugu : seva.name} - 
              <span className="font-bold text-white">₹{seva.price}</span>
            </span>
          ))}
        </div>
        {/* ... (rest of component) */}
      </div>
    </div>
  );
}