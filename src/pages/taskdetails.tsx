import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';

const TaskDetailsPage = () => {
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
        const data = await response.json();
        setMovieData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen flex justify-center">
      {movieData ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">{movieData.result.title}</h1>
          <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-md mr-4" src={movieData.result.image} alt="Movie Poster" />
            <div>
              <p className="text-lg">Description: {movieData.result.description}</p>
              <p className="text-lg">Date: {new Date(movieData.result.date).toLocaleDateString()}</p>
              <p className="text-lg">Genres: {movieData.result.genres.map((genre: any) => genre.name).join(', ')}</p>
            </div>
          </div>
         
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
    </div>
  );
};

export default TaskDetailsPage;
