import { noticeData } from "../data/noticeData";
import NoticeSection from "../components/NoticeSection";

export default function NoticePage() {
  return (
    <div className="w-full min-h-screen temple-bg px-4 py-10">

      <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-700 mb-10">
        🛕 Temple Notice Board
      </h1>

      {/* 🎉 Festivals */}
      <NoticeSection
        title="Upcoming Festivals"
        data={noticeData.festivals}
        icon="🎉"
      />

      {/* 🪔 Poojas */}
      <NoticeSection
        title="Upcoming Poojas"
        data={noticeData.poojas}
        icon="🪔"
      />

      {/* 📿 Sevas */}
      <NoticeSection
        title="Regular Sevas"
        data={noticeData.sevas}
        icon="📿"
      />

    </div>
  );
}