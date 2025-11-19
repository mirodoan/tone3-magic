const TheoryCards = [
  {
    id: 1,
    slug: "all-tones",
    title: "Bốn loại thanh điệu trong tiếng Trung",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Bốn loại thanh điệu trong tiếng Trung",
    views: "1.103",
    detail: {
      heading: "Bốn loại thanh điệu trong tiếng Trung",
      summary: "Tiếng Trung có bốn thanh điệu cơ bản: thanh 1, thanh 2, thanh 3, và thanh 4. Mỗi thanh điệu có đặc điểm riêng và ảnh hưởng đến nghĩa của từ.",
      examples: [
        {
          title: "Thanh 1",
          description: "Âm thanh cao và đều, giữ nguyên độ cao (5) từ đầu đến cuối một cách ổn định.",
          example: "mā (妈) - mẹ",
          audioUrl: "/audio/theory/ma1.mp3",
          image: "/images/tone1.png",
          color: "border-blue-400 ring-blue-200",
        },
        {
          title: "Thanh 2",
          description: "Âm thanh đi từ trung bình (3) lên cao (5).",
          example: "má (麻) - sợi đay, vừng",
          audioUrl: "/audio/theory/ma2.mp3",
          image: "/images/tone2.png",
          color: "border-green-400 ring-green-200",
        },
        {
          title: "Thanh 3",
          description: "Âm thanh đi xuống rồi lên lại, bắt đầu từ cao độ (2) xuống thấp (1) rồi lên cao (4).",
          example: "mǎ (马) - con ngựa",
          audioUrl: "/audio/theory/ma3.mp3",
          image: "/images/tone3.png",
          color: "border-red-400 ring-red-200",
        },
        {
          title: "Thanh 4",
          description: "Âm thanh đi từ cao (5) xuống thấp (1), mạnh mẽ và dứt khoát, ngắt hơi.",
          example: "mà (骂) - la mắng",
          audioUrl: "/audio/theory/ma4.mp3",
          image: "/images/tone4.png",
          color: "border-purple-400 ring-purple-200",
        },
      ],
    }
  },
  {
    id: 2,
    slug: "two-tone3",
    title: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
    views: "1.13",
    detail: {
      heading: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
      summary: "Khi hai từ mang thanh 3 đứng cạnh nhau thì từ đầu tiên sẽ có trường độ tương tự dấu 2, nhưng có trường độ từ 1 lên 4 thay vì 3 đến 5.",
      examples: [
        {
          label: "Ví dụ 1",
          origin: "你好 - nǐ hǎo",
          changed: "你好 - ní(1-4) hǎo(3)",
          meaning: "Xin chào",
          audioUrl: "/audio/theory/nihao.mp3",
        }
      ],
    }
  },
  {
    id: 3,
    slug: "three-tone3",
    title: "Quy tắc biến âm khi ba dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    description: "Quy tắc biến âm khi ba dấu 3 đứng cạnh nhau",
    views: "2670",
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
          audioUrl: "/audio-laolaolao.mp3",
        }
      ],
    }
  },
  {
    id: 4,
    slug: "four-tone3",
    title: "Quy tắc biến âm khi bốn dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi bốn dấu 3 đứng cạnh nhau",
    views: "130",
    detail: {
      heading: "Quy tắc biến âm khi bốn dấu 3 đứng cạnh nhau",
      summary: "Khi bốn âm tiết mang thanh 3 đứng cạnh nhau, ba âm tiết đầu sẽ biến thành thanh 2, chỉ âm tiết cuối cùng giữ nguyên thanh 3. Đây là trường hợp hiếm gặp nhưng cần nắm vững.",
      examples: [
        {
          label: "Ví dụ minh họa: 老老老老 (lǎo lǎo lǎo lǎo)",
          origin: "老老老老 (lǎo3 lǎo3 lǎo3 lǎo3)",
          changed: "老老老老 (láo2 láo2 láo2 lǎo3)",
          meaning: "Nghĩa: Già già già già",
          audioUrl: "/audio-laolaolaolaolao.mp3",
        },
        {
          label: "Ví dụ minh họa: 好好好好 (hǎo hǎo hǎo hǎo)",
          origin: "好好好好 (hǎo3 hǎo3 hǎo3 hǎo3)",
          changed: "好好好好 (háo2 háo2 háo2 hǎo3)",
          meaning: "Nghĩa: Tốt tốt tốt tốt",
          audioUrl: "/audio-haohaohaohaohao.mp3",
        }
      ],
    }
  },
  {
    id: 5,
    slug: "tone3-with-others",
    title: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi dấu 3 kết hợp với dấu khác",
    views: "282",
    detail: {
      heading: "Quy tắc biến âm khi dấu 3 kết hợp với dấu khác",
      summary: "Khi thanh 3 đứng trước các thanh khác (thanh 1, 2, 4), thanh 3 sẽ giữ nguyên hoặc có sự biến đổi nhẹ tùy thuộc vào ngữ cảnh và tốc độ nói.",
      examples: [
        {
          label: "Ví dụ minh họa: 老师 (lǎo shī) - Thanh 3 + Thanh 1",
          origin: "老师 (lǎo3 shī1)",
          changed: "老师 (lǎo shī)",
          meaning: "Nghĩa: Giáo viên",
          audioUrl: "/audio/theory/laoshi.mp3",
        },
        {
          label: "Ví dụ minh họa: 老婆 (lǎo pó) - Thanh 3 + Thanh 2",
          origin: "老婆 (lǎo3 pó2)",
          changed: "老婆 (lǎo pó)",
          meaning: "Nghĩa: Vợ",
          audioUrl: "/audio-laopo.mp3",
        },
        {
          label: "Ví dụ minh họa: 老大 (lǎo dà) - Thanh 3 + Thanh 4",
          origin: "老大 (lǎo3 dà4)",
          changed: "老大 (lǎo dà)",
          meaning: "Nghĩa: Anh cả",
          audioUrl: "/audio-laoda.mp3",
        }
      ],
    }
  },
];

export default TheoryCards;