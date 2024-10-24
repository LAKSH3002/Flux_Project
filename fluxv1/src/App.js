import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthContextProvider } from "./context/Authcontext";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;

// const MOVIE_API = "https://api.themoviedb.org/3/";
//   const SEARCH_API = MOVIE_API + "search/movie";
//   const DISCOVER_API = MOVIE_API + "discover/movie";
//   const API_KEY = "b4e4303afb773dc8cf9dd9e2889b6757";
//   const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

//   const [playing, setPlaying] = useState(false);
//   const [searchKey, setSearchKey] = useState("");
//   const [trailer, setTrailer] = useState(null);
//   const [movies, setMovies] = useState([]);
//   const [movie, setMovie] = useState({ title: "Loading Movies" });

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async (event) => {
//     if (event) {
//       event.preventDefault();
//     }

//     const { data } = await axios.get(
//       `${searchKey ? SEARCH_API : DISCOVER_API}`,
//       {
//         params: {
//           api_key: API_KEY,
//           query: searchKey,
//         },
//       }
//     );

//     console.log(data.results[0]);
//     setMovies(data.results);
//     setMovie(data.results[0]);

//     if (data.results.length) {
//       await fetchMovie(data.results[0].id);
//     }
//   };

//   const fetchMovie = async (id) => {
//     const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
//       params: {
//         api_key: API_KEY,
//         append_to_response: "videos",
//       },
//     });

//     if (data.videos && data.videos.results) {
//       const trailer = data.videos.results.find(
//         (vid) => vid.name === "Official Trailer"
//       );
//       setTrailer(trailer ? trailer : data.videos.results[0]);
//     }

//     setMovie(data);
//   };

//   const selectMovie = (movie) => {
//     fetchMovie(movie.id);
//     setPlaying(false);
//     setMovie(movie);
//     window.scrollTo(0, 0);
//   };

//   const renderMovies = () =>
//     movies.map((movie) => (
//       <Movie selectMovie={selectMovie} key={movie.id} movie={movie} />
//     ));

//   return (
//     <div className="App">
//       <Navbar />
//       {movies.length ? (
//         <main>
//           {movie ? (
//             <div
//               className="poster"
//               style={{
//                 backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,
//               }}
//             >
//               {playing ? (
//                 <>
//                   <Youtube
//                     videoId={trailer.key}
//                     className={"youtube amru"}
//                     containerClassName="youtube-container-amru"
//                     opts={{
//                       width: "100%",
//                       height: "100%",
//                       playerVars: {
//                         autoplay: 1,
//                         controls: 0,
//                         cc_load_policy: 0,
//                         fs: 0,
//                         iv_load_policy: 0,
//                         modestbranding: 0,
//                         rel: 0,
//                         showinfo: 0,
//                       },
//                     }}
//                   />
//                   <button
//                     onClick={() => setPlaying(false)}
//                     className={"button close-video"}
//                   >
//                     Close
//                   </button>
//                 </>
//               ) : (
//                 <div className="center-max-size">
//                   <div className="poster-content">
//                     {trailer ? (
//                       <button
//                         className={"button play-video"}
//                         onClick={() => setPlaying(true)}
//                         type="button"
//                       >
//                         Play Trailer
//                       </button>
//                     ) : (
//                       "Sorry, no trailer available"
//                     )}
//                     <h1>{movie.title}</h1>
//                     <p>{movie.overview}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : null}

//           <div className={"center-max-size container"}>{renderMovies()}</div>
//         </main>
//       ) : (
//         "Sorry, no movies found"
//       )}
//     </div>
//   );
