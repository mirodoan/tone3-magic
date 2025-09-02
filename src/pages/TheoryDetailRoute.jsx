import { useParams } from "react-router-dom";

import TheoryDetailAllTones from "./TheoryDetailAllTones";
import TheoryDetailRule2Tone3 from "./TheoryDetailRule2Tone3";
import TheoryDetailRule3Tone3 from "./TheoryDetailRule3Tone3";
import TheoryDetailRule4Tone3 from "./TheoryDetailRule4Tone3";
import TheoryDetailRuleOthersTone3 from "./TheoryDetailRuleOthersTone3";

export default function TheoryDetailRoute() {
  const { id } = useParams();

  switch (id) {
    case "all-tones":
      return <TheoryDetailAllTones />;
    case "two-tone3":
      return <TheoryDetailRule2Tone3 />;
    case "three-tone3":
      return <TheoryDetailRule3Tone3 />;
    case "four-tone3":
      return <TheoryDetailRule4Tone3 />;
    case "tone3-with-others":
      return <TheoryDetailRuleOthersTone3 />;
    default:
      return <div>Không tìm thấy nội dung phù hợp</div>;
  }
}