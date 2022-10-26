export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            const { prev, curr } = action;
            //const prev = action.prev;
            //const curr = action.curr;
            return {
            ...person, mentors: person.mentors.map((mentor) => {
            if(mentor.name === prev) {
                return {...mentor, name: curr};
            }
            return mentor;
            }),
          };
        }
    case 'added': {
        const { name, title } = action;
        return {
            ...person, mentors: [...person.mentors, { name, title }],  
        };
    }
    case 'deleted': {
        return {
            ...person, mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
        };
    }
    default: {
        throw Error(`알수없는 액션 타입이다: ${action.type}`);
    } 
  }
}