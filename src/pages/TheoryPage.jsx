import React from "react";
import { useNavigate } from "react-router-dom";
import TheoryCard from "../components/TheoryCard";
import TheoryCards from "../data/TheoryCards";

export default function TheoryPage() {
  const navigate = useNavigate();

  const handleCardClick = (cardSlug) => {
    navigate(`/theory/${cardSlug}`);
  };

  return (
    <div className="flex justify-center items-center pb-20 sm:pb-0">
      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {TheoryCards.map((card) => (
            <div key={card.id} onClick={() => handleCardClick(card.slug)}>
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