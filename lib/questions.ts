
type questionType = {
    ques : String,
    choice : {
        1: String,
        2: String,
        3: String,
        4: String,
    }
    hasMultipleAns : Boolean,
    answer : Number[],
    difficultyLevel : Number
}


export const questionSet:questionType[] = [
    {
        ques : "Which of the following is an odd number ?",
        choice : {
            1 : "2",
            2: "4",
            3 : "6",
            4 : "7"
        },
        hasMultipleAns : false,
        answer : [4],
        difficultyLevel : 1
    },
    {
        ques : "Tick the even number ?",
        choice : {
            1 : "2",
            2: "4",
            3 : "9",
            4 : "7"
        },
        hasMultipleAns : true,
        answer : [1,2],
        difficultyLevel : 2

    },
    {
        ques : "Which of the following is an Alphabet?",
        choice : {
            1 : "A",
            2: "4",
            3 : "6",
            4 : "7"
        },
        hasMultipleAns : false,
        answer : [1] ,
        difficultyLevel : 3

    },
    {
        ques : "which of the below are numbers",
        choice : {
            1 : "A",
            2: "4",
            3 : "B",
            4 : "c"
        },
        hasMultipleAns : true,
        answer : [1,3,4],
        difficultyLevel : 4

    },
    {
        ques : "which of the below are Animals",
        choice : {
            1 : "Cat",
            2: "Dog",
            3 : "Squirel",
            4 : "shark"
        },
        hasMultipleAns : true,
        answer : [1,2,3,4],
        difficultyLevel : 5

    },
    {
        ques : "Which of the following is a vegetable?",
        choice : {
            1 : "Pen",
            2: "Pencil",
            3 : "Tomato",
            4 : "Scooter"
        },
        hasMultipleAns : false,
        answer : [3] ,
        difficultyLevel : 6

    },
    {
        ques : "Tick the odd out",
        choice : {
            1 : "Book",
            2: "Newspaper",
            3 : "Blog",
            4 : "Clouds"
        },
        hasMultipleAns : false,
        answer : [4] ,
        difficultyLevel : 7

    },
    {
        ques : "Tick correct statement",
        choice : {
            1 : "1+1 = 2",
            2: "2+2 = 4",
            3 : "3+3 = 6",
            4 : "2+1 = 78"
        },
        hasMultipleAns : true,
        answer : [1,2,3],
        difficultyLevel : 8

    },
    {
        ques : "Which of the below are colours",
        choice : {
            1 : "Red",
            2: "Green",
            3 : "Mogambo",
            4 : "green"
        },
        hasMultipleAns : false,
        answer : [3] ,
        difficultyLevel : 9

    },
    {
        ques : "Pick the correct ones",
        choice : {
            1 : "Earth is flat",
            2: "Sun is hot",
            3 : "Ice is cold",
            4 : "Sugar is sweet"
        },
        hasMultipleAns : true,
        answer : [2,3,4],
        difficultyLevel : 10

    },

]