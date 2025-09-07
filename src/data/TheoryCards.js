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
      summary: "Tiếng Trung có bốn thanh điệu cơ bản: thanh 1 (ngang), thanh 2 (lên), thanh 3 (xuống lên), và thanh 4 (xuống). Mỗi thanh điệu có đặc điểm riêng và ảnh hưởng đến nghĩa của từ.",
      examples: [
        {
          label: "Ví dụ minh họa: 妈 (mā) - Thanh 1",
          origin: "妈 (mā1)",
          changed: "妈 (mā)",
          meaning: "Nghĩa: Mẹ",
          audioUrl: "/audio-all-tones.mp3",
        },
        {
          label: "Ví dụ minh họa: 麻 (má) - Thanh 2", 
          origin: "麻 (má2)",
          changed: "麻 (má)",
          meaning: "Nghĩa: Ma",
          audioUrl: "/audio-ma-tone2.mp3",
        },
        {
          label: "Ví dụ minh họa: 马 (mǎ) - Thanh 3",
          origin: "马 (mǎ3)",
          changed: "马 (mǎ)",
          meaning: "Nghĩa: Ngựa",
          audioUrl: "/audio-ma-tone3.mp3",
        },
        {
          label: "Ví dụ minh họa: 骂 (mà) - Thanh 4",
          origin: "骂 (mà4)",
          changed: "骂 (mà)",
          meaning: "Nghĩa: Mắng",
          audioUrl: "/audio-ma-tone4.mp3",
        },
      ],
    }
  },
  {
    id: 2,
    slug: "two-tone3",
    title: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    description: "Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau",
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
          audioUrl: "/audio-nihao.mp3",
        }
      ],
    }
  },
  {
    id: 3,
    slug: "three-tone3",
    title: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    description: "Quy tắc biến âm khi 3 dấu 3 đứng cạnh nhau",
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
    title: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    description: "Quy tắc biến âm khi 4 dấu 3 đứng cạnh nhau",
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
    description: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
    views: "282",
    detail: {
      heading: "Quy tắc biến âm khi dấu 3 kết hợp với các dấu khác",
      summary: "Khi thanh 3 đứng trước các thanh khác (thanh 1, 2, 4), thanh 3 sẽ giữ nguyên hoặc có sự biến đổi nhẹ tùy thuộc vào ngữ cảnh và tốc độ nói.",
      examples: [
        {
          label: "Ví dụ minh họa: 老师 (lǎo shī) - Thanh 3 + Thanh 1",
          origin: "老师 (lǎo3 shī1)",
          changed: "老师 (lǎo shī)",
          meaning: "Nghĩa: Giáo viên",
          audioUrl: "/audio-laoshi.mp3",
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