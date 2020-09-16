let movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
  ];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
      id: `${movies.length + 1}`,
      name,
      score
    };
    movies.push(newMovie);
    return newMovie;
  };

// export const people = [ 
//     {
//       id: "0",
//       name: "junker",
//       age: 20, 
//       gender: "female"
//     }, 
//     {
//       id: "1",
//       name: "Jisu",
//       age: 18,
//       gender: "female"
//     },
//     {
//       id: "2",
//       name: "Japan Guy",
//       age: 18,
//       gender: "male"
//     },
//     {
//       id: "3",
//       name: "Daal",
//       age: 18,
//       gender: "male"
//     },
//     {
//       id: "4",
//       name: "JD",
//       age: 18,
//       gender: "male"
//     },
//     {
//       id: "5",
//       name: "moondaddi",
//       age: 18,
//       gender: "male"
//     },
//     {
//       id: "6",
//       name: "flynn",
//       age: 18,
//       gender: "male"
//     },
//     {
//       id: "7",
//       name: "Nicolas",
//       age: 18,
//       gender: "female"
//     }
  
//   ];
  
// //    id를 부여해서 id가 people 배열 안에 있는 모든 object를 확인
// //    filter는 모든 대상을 거친뒤 해당 조건에 맞는것을 리턴함 
//   export const getById = id => {   
//       const filteredPeople = people.filter(person => person.id === String(id));   
//       return filteredPeople[0]
//   }