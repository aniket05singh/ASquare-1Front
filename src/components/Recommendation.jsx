import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../App";

const Recommendation = () => {
  const { defi } = useContext(UserContext); // Get deficiencies from context
  const [recommendations, setRecommendations] = useState([]); // Store API response

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('https://asquare-01.onrender.com/recommend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ defi }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // ✅ Remove `null` values from response
        const filteredData = data.data?.filter(item => item !== null) || [];
        setRecommendations(filteredData);

        console.log('Success:', filteredData);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    // ✅ Only fetch if defi exists and is not empty
    if (defi?.length > 0) {
      fetchRecommendations();
    }
  }, [defi]); // ✅ Correct dependencies

  return (
    <div className="p-6 mx-auto bg-gray-900 rounded-xl shadow-2xl mt-8 w-[80%] max-w-4xl border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Recommended Foods
      </h2>
      {recommendations.length > 0 ? (
        <ul className="space-y-4">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h5 className="text-xl font-semibold text-cyan-400 mb-4">
                {item.name}: <span className="text-white">{item.dailyRequirement}</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {item.sources.map((source, ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm hover:bg-cyan-700 hover:text-white transition-all duration-200"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">No recommendations yet.</p>
      )}
    </div>
  );
};

export default Recommendation;