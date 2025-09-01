const TheoryCards = [
  {
    id: 1,
    title: "Bốn loại thanh điệu trong tiếng Trung",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Bốn loại thanh điệu trong tiếng Trung",
    views: "1.103",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Quy tắc HTML căn bản",
      summary: "Học cách xây dựng layout, dùng thẻ HTML và CSS căn bản.",
      examples: [
        {
          label: "Ví dụ: <div> ... </div>",
          origin: "<div class='box'>Nội dung</div>",
          changed: "<div class='box highlight'>Nội dung</div>",
          meaning: "Nghĩa: Thêm class để đổi style.",
        }
        // Thêm ví dụ khác nếu cần
      ],
      audioUrl: "/audio-html.mp3",
      chartLabel: "Ví dụ biểu đồ CSS",
    }
  },
  {
    id: 2,
    title: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    views: "1.13",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Quy tắc CSS nâng cao",
      summary: "Tìm hiểu về flexbox và responsive.",
      examples: [
        {
          label: "Ví dụ: Flexbox",
          origin: "display: flex;",
          changed: "display: flex; justify-content: center;",
          meaning: "Nghĩa: Căn giữa nội dung.",
        }
      ],
      audioUrl: "/audio-css.mp3",
      chartLabel: "Biểu đồ Flexbox",
    }
  },
  {
    id: 3,
    title: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    description: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    views: "2670",
    likes: "6.422",
    comments: "237",
    detail: {
      heading: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
      summary: "Khi hai âm tiết mang thanh 3 đứng cạnh nhau...",
      examples: [
        {
          label: "Ví dụ minh họa: 你好 (nǐ hǎo)",
          origin: "你好 (nǐ3 hǎo3)",
          changed: "你好 (ní2 hǎo3)",
          meaning: "Nghĩa: Xin chào",
        }
      ],
      audioUrl: "/audio-js.mp3",
      chartLabel: "Biểu đồ sóng âm",
    }
  },
  {
    id: 4,
    title: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    views: "130",
    likes: "6.211",
    comments: "340",
    detail: {
      heading: "Kiến thức nền tảng",
      summary: "Các bước học lập trình hiệu quả.",
      examples: [
        {
          label: "Ví dụ: Step by step",
          origin: "Bước 1: Khởi động",
          changed: "Bước 2: Làm bài tập",
          meaning: "Nghĩa: Từng bước tiến bộ.",
        }
      ],
      audioUrl: "/audio-base.mp3",
      chartLabel: "Biểu đồ tiến bộ",
    }
  },
  {
    id: 5,
    title: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    views: "282",
    likes: "5.692",
    comments: "183",
    detail: {
      heading: "Code Thiếu Nhi Battle",
      summary: "Tranh giành trà sữa size lớn bằng code.",
      examples: [
        {
          label: "Ví dụ: Game code",
          origin: "Trà sữa size L",
          changed: "Trà sữa size XL",
          meaning: "Nghĩa: Level up!",
        }
      ],
      audioUrl: "/audio-battle.mp3",
      chartLabel: "Biểu đồ chiến đấu",
    }
  }
];

export default TheoryCards;