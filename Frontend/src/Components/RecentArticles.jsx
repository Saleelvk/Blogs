import React from "react";
import jenny from "../assets/images/Jennifer-Lee.webp";
import robert from "../assets/images/download.jpeg";

function RecentArticles() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
          Top Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Article Card */}
          {[
            {
              image: jenny,
              tag: "Business",
              title: "Remote Work Strategies for Team Success",
              description:
                "Effective approaches to maintain productivity and team cohesion in distributed work environments.",
              author: "Jennifer Lee",
              date: "Feb 20, 2025",
              bgColor: "bg-purple-50",
              textColor: "text-purple-600",
              letter: "J",
            },
            {
              image: robert,
              tag: "Science",
              title: "Latest Breakthroughs in Quantum Computing",
              description:
                "How recent advances in quantum technologies are reshaping the computing landscape.",
              author: "Dr. Robert Chen",
              date: "Feb 18, 2025",
              bgColor: "bg-blue-50",
              textColor: "text-blue-600",
              letter: "R",
            },
          ].map((article, index) => (
            <article
              key={index}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full"
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Image */}
                <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                  <img
                    src={article.image}
                    alt={`${article.author}'s article`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow h-full">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 ${article.bgColor} ${article.textColor} rounded-full text-xs sm:text-sm font-medium mb-2`}
                    >
                      {article.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Author Section */}
                  <div className="flex items-center mt-auto">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3 flex items-center justify-center ${article.bgColor}`}
                    >
                      <p className="text-center text-sm sm:text-xl font-semibold">
                        {article.letter}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm">
                        {article.author}
                      </p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentArticles;
