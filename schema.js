import { buildSchema } from 'graphql';

// We here define Structure of the object

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachAssists: [TeachAssist] 
    }
    type TeachAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput{
        id: ID
        courseName: String!
        category: String!
        price: Int!
        language: String
        email: String
        stack: Stack
        teachAssists: [TeachAssistInput] 
    }

    input TeachAssistInput {
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`);

export default schema;