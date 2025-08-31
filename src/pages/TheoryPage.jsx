import React, { useState } from "react";
import TheoryCard from "../components/TheoryCard";
import TheoryDetail from "../components/TheoryDetail";

// Dữ liệu 5 thẻ, mỗi thẻ có cả phần chi tiết (bạn tự thay thế cho phù hợp)
const cardDetails = [
  {
    id: 1,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Bốn loại thanh điệu trong tiếng Trung",
    views: "1.103",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Quy tắc HTML căn bản",
      summary: "Học cách xây dựng layout, dùng thẻ HTML và CSS căn bản.",
      example: {
        label: "Ví dụ: <div> ... </div>",
        origin: "<div class='box'>Nội dung</div>",
        changed: "<div class='box highlight'>Nội dung</div>",
        meaning: "Nghĩa: Thêm class để đổi style.",
      },
      audioUrl: "/audio-html.mp3",
      chartLabel: "Ví dụ biểu đồ CSS",
    }
  },
  {
    id: 2,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    views: "1.13",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Quy tắc CSS nâng cao",
      summary: "Tìm hiểu về flexbox và responsive.",
      example: {
        label: "Ví dụ: Flexbox",
        origin: "display: flex;",
        changed: "display: flex; justify-content: center;",
        meaning: "Nghĩa: Căn giữa nội dung.",
      },
      audioUrl: "/audio-css.mp3",
      chartLabel: "Biểu đồ Flexbox",
    }
  },
  {
    id: 3,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    description: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    views: "2670",
    likes: "6.422",
    comments: "237",
    detail: {
      heading: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
      summary: "Khi hai âm tiết mang thanh 3 đứng cạnh nhau...",
      example: {
        label: "Ví dụ minh họa: 你好 (nǐ hǎo)",
        origin: "你好 (nǐ3 hǎo3)",
        changed: "你好 (ní2 hǎo3)",
        meaning: "Nghĩa: Xin chào",
      },
      audioUrl: "/audio-js.mp3",
      chartLabel: "Biểu đồ sóng âm",
    }
  },
  {
    id: 4,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    views: "130",
    likes: "6.211",
    comments: "340",
    detail: {
      heading: "Kiến thức nền tảng",
      summary: "Các bước học lập trình hiệu quả.",
      example: {
        label: "Ví dụ: Step by step",
        origin: "Bước 1: Khởi động",
        changed: "Bước 2: Làm bài tập",
        meaning: "Nghĩa: Từng bước tiến bộ.",
      },
      audioUrl: "/audio-base.mp3",
      chartLabel: "Biểu đồ tiến bộ",
    }
  },
  {
    id: 5,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    views: "282",
    likes: "5.692",
    comments: "183",
    detail: {
      heading: "Code Thiếu Nhi Battle",
      summary: "Tranh giành trà sữa size lớn bằng code.",
      example: {
        label: "Ví dụ: Game code",
        origin: "Trà sữa size L",
        changed: "Trà sữa size XL",
        meaning: "Nghĩa: Level up!",
      },
      audioUrl: "/audio-battle.mp3",
      chartLabel: "Biểu đồ chiến đấu",
    }
  }
];

export default function TheoryPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  if (selectedCard !== null) {
    // Hiển thị chi tiết của thẻ đã chọn
    return (
      <TheoryDetail
        detail={cardDetails[selectedCard].detail}
        cardTitle={cardDetails[selectedCard].title}
        onBack={() => setSelectedCard(null)}
      />
    );
  }

  return (
    <div className="flex justify-center items-center pb-20 sm:pb-0">
      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {cardDetails.map((card, idx) => (
            <div key={card.id} onClick={() => setSelectedCard(idx)}>
              <TheoryCard
                image={card.image}
                description={card.description}
                views={card.views}
                likes={card.likes}
                comments={card.comments}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}