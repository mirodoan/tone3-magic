import { useParams } from "react-router-dom";

import TheoryDetailAllTones from "./TheoryDetailAllTones";
import TheoryDetailRule2Tone3 from "./TheoryDetailRule2Tone3";
import TheoryDetailRule3Tone3 from "./TheoryDetailRule3Tone3";
import TheoryDetailRule4Tone3 from "./TheoryDetailRule4Tone3";
import TheoryDetailRuleOthersTone3 from "./TheoryDetailRuleOthersTone3";

export default function TheoryDetailRoute() {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <TheoryDetailAllTones />;
    case "2":
      return <TheoryDetailRule2Tone3 />;
    case "3":
      return <TheoryDetailRule3Tone3 />;
    case "4":
      return <TheoryDetailRule4Tone3 />;
    case "5":
      return <TheoryDetailRuleOthersTone3 />;
    default:
      return <div>Không tìm thấy nội dung phù hợp</div>;
  }
}