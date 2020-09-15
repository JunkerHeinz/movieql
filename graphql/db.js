export const people = [ 
    {
      id: "0",
      name: "junker",
      age: 20, 
      gender: "female"
    }, 
    {
      id: "1",
      name: "Jisu",
      age: 18,
      gender: "female"
    },
    {
      id: "2",
      name: "Japan Guy",
      age: 18,
      gender: "male"
    },
    {
      id: "3",
      name: "Daal",
      age: 18,
      gender: "male"
    },
    {
      id: "4",
      name: "JD",
      age: 18,
      gender: "male"
    },
    {
      id: "5",
      name: "moondaddi",
      age: 18,
      gender: "male"
    },
    {
      id: "6",
      name: "flynn",
      age: 18,
      gender: "male"
    },
    {
      id: "7",
      name: "Nicolas",
      age: 18,
      gender: "female"
    }
  
  ];
  
  export const getById = id => {   // id를 부여해서 id가 people 배열 안에 있는 모든 object를 확인
      const filteredPeople = people.filter(person => people.id === id);   // filter는 모든 대상을 거친뒤 해당 조건에 맞는것을 리턴함 
      return filteredPeople[0]
  }