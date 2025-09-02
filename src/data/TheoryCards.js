const TheoryCards = [
  {
    id: 1,
    slug: "all-tones",
    title: "Bốn loại thanh điệu trong tiếng Trung",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Bốn loại thanh điệu trong tiếng Trung",
    views: "1.103",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Bốn loại thanh điệu trong tiếng Trung",
      summary: "Tiếng Trung có bốn thanh điệu cơ bản: thanh 1 (ngang), thanh 2 (lên), thanh 3 (xuống lên), và thanh 4 (xuống). Mỗi thanh điệu có đặc điểm riêng và ảnh hưởng đến nghĩa của từ.",
      examples: [
        {
          label: "Ví dụ minh họa: 妈 (mā) - Thanh 1",
          origin: "妈 (mā1)",
          changed: "妈 (mā)",
          meaning: "Nghĩa: Mẹ",
        },
        {
          label: "Ví dụ minh họa: 麻 (má) - Thanh 2", 
          origin: "麻 (má2)",
          changed: "麻 (má)",
          meaning: "Nghĩa: Ma",
        },
        {
          label: "Ví dụ minh họa: 马 (mǎ) - Thanh 3",
          origin: "马 (mǎ3)",
          changed: "马 (mǎ)",
          meaning: "Nghĩa: Ngựa",
        },
        {
          label: "Ví dụ minh họa: 骂 (mà) - Thanh 4",
          origin: "骂 (mà4)",
          changed: "骂 (mà)",
          meaning: "Nghĩa: Mắng",
        },
      ],
      audioUrl: "/audio-all-tones.mp3",
      chartLabel: "Biểu đồ bốn thanh điệu",
    }
  },
  {
    id: 2,
    slug: "two-tone3",
    title: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    views: "1.13",
    likes: "6.499",
    comments: "160",
    detail: {
      heading: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
      summary: "Khi hai âm tiết mang thanh 3 đứng cạnh nhau, âm tiết đầu tiên sẽ biến thành thanh 2. Đây là quy tắc biến âm phổ biến nhất và quan trọng nhất của thanh 3.",
      examples: [
        {
          label: "Ví dụ minh họa: 你好 (nǐ hǎo)",
          origin: "你好 (nǐ3 hǎo3)",
          changed: "你好 (ní2 hǎo3)",
          meaning: "Nghĩa: Xin chào",
          illustrationImage: "https://i.imgur.com/example1.png" // Placeholder - thay bằng ảnh thật
        }
      ],
      audioUrl: "/audio-rule2tone3.mp3",
      chartLabel: "Biểu đồ sóng âm",
    }
  },
  {
    id: 3,
    slug: "three-tone3",
    title: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    description: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    views: "2670",
    likes: "6.422",
    comments: "237",
    detail: {
      heading: "Quy tắc biến âm khi ba dấu 3 đứng cạnh nhau",
      summary: "Khi ba âm tiết mang thanh 3 đứng cạnh nhau, hai âm tiết đầu sẽ biến thành thanh 2, âm tiết cuối giữ nguyên thanh 3. Đây là mở rộng của quy tắc biến âm cơ bản.",
      examples: [
        {
          label: "Ví dụ minh họa: 很好吃 (hěn hǎo chī)",
          origin: "很好吃 (hěn3 hǎo3 chī3)",
          changed: "很好吃 (hén2 háo2 chī3)",
          meaning: "Nghĩa: Rất ngon",
          illustrationImage: "https://i.imgur.com/example2.png" // Placeholder - thay bằng ảnh thật
        },
        {
          label: "Ví dụ minh họa: 老老老 (lǎo lǎo lǎo)",
          origin: "老老老 (lǎo3 lǎo3 lǎo3)",
          changed: "老老老 (láo2 láo2 lǎo3)",
          meaning: "Nghĩa: Già già già",
        }
      ],
      audioUrl: "/audio-rule3tone3.mp3",
      chartLabel: "Biểu đồ ba thanh 3",
    }
  },
  {
    id: 4,
    slug: "four-tone3",
    title: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    views: "130",
    likes: "6.211",
    comments: "340",
    detail: {
      heading: "Quy tắc biến âm khi bốn dấu 3 đứng cạnh nhau",
      summary: "Khi bốn âm tiết mang thanh 3 đứng cạnh nhau, ba âm tiết đầu sẽ biến thành thanh 2, chỉ âm tiết cuối cùng giữ nguyên thanh 3. Đây là trường hợp hiếm gặp nhưng cần nắm vững.",
      examples: [
        {
          label: "Ví dụ minh họa: 老老老老 (lǎo lǎo lǎo lǎo)",
          origin: "老老老老 (lǎo3 lǎo3 lǎo3 lǎo3)",
          changed: "老老老老 (láo2 láo2 láo2 lǎo3)",
          meaning: "Nghĩa: Già già già già",
        },
        {
          label: "Ví dụ minh họa: 好好好好 (hǎo hǎo hǎo hǎo)",
          origin: "好好好好 (hǎo3 hǎo3 hǎo3 hǎo3)",
          changed: "好好好好 (háo2 háo2 háo2 hǎo3)",
          meaning: "Nghĩa: Tốt tốt tốt tốt",
        }
      ],
      audioUrl: "/audio-rule4tone3.mp3",
      chartLabel: "Biểu đồ bốn thanh 3",
    }
  },
  {
    id: 5,
    slug: "tone3-with-others",
    title: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    views: "282",
    likes: "5.692",
    comments: "183",
    detail: {
      heading: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
      summary: "Khi thanh 3 đứng trước các thanh khác (thanh 1, 2, 4), thanh 3 sẽ giữ nguyên hoặc có sự biến đổi nhẹ tùy thuộc vào ngữ cảnh và tốc độ nói.",
      examples: [
        {
          label: "Ví dụ minh họa: 老师 (lǎo shī) - Thanh 3 + Thanh 1",
          origin: "老师 (lǎo3 shī1)",
          changed: "老师 (lǎo shī)",
          meaning: "Nghĩa: Giáo viên",
        },
        {
          label: "Ví dụ minh họa: 老婆 (lǎo pó) - Thanh 3 + Thanh 2",
          origin: "老婆 (lǎo3 pó2)",
          changed: "老婆 (lǎo pó)",
          meaning: "Nghĩa: Vợ",
        },
        {
          label: "Ví dụ minh họa: 老大 (lǎo dà) - Thanh 3 + Thanh 4",
          origin: "老大 (lǎo3 dà4)",
          changed: "老大 (lǎo dà)",
          meaning: "Nghĩa: Anh cả",
        }
      ],
      audioUrl: "/audio-rule-others-tone3.mp3",
      chartLabel: "Biểu đồ thanh 3 với thanh khác",
    }
  }
];

export default TheoryCards;