import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
import ProgressNum from './progressNum'
import {Progress} from 'reactstrap'
import MathComponent from './MathComponent'
export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTestSubmitted: false,
            currentSection: 0,
            currentSubject:0, 
            NumeberOfCorrectAnswersOfEachSubject: [], 
            ReadingScore: 0, 
            WritingScore: 0, 
            MathScore: 0,
            sections: [
                {
                    id:1, 
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "This passage is from James Joyce, The Dubliners originally published in 1914",
                    passage: '1914 Mr Holohan, assistant secretary of the Eire Abu Society, had been walking up and down Dublin for nearly a month, with his hands and pockets full of dirty pieces of paper, arranging about the series of concerts. He had a game leg and for this his friends called him Hoppy Holohan. He walked up and down constantly, stood by the hour at street corners arguing the point and made notes; but in the end it was Mrs Kearney who arranged every Miss Devlin had become Mrs Kearney out of spite. She had been educated in a', 
                    IsLastSectionType: false, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1.1 As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"independent and strong willed.", 
                                    check: false, 
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"paternal and affectionate.",  
                                    check:false, 
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "serious and family oriented.",  
                                    check:true, 
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "boring and simple minded.",  
                                    check:false, 
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                        {
                            id: 2,
                            question: 
                            "1.2 As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"2independent and strong willed.", 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"2paternal and affectionate.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "2serious and family oriented.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "2boring and simple minded.",  
                                    check: true, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                    ] 
                }, 

                {
                    id:2, 
                    defaultTimer: 65,
                            sectionType: 'reading', 
                            IsLastSectionType: true, 
                            title: 'Questions 11-20 are based on the following passage and supplementary material.', 
                            passage: 'The central aim of the current study was to eschew the experimental context traditionally used to study over-imitation, in order to determine whether visibly causally irrelevant actions would be copied in a naturalistic context in which the participants were unaware that they were taking part in an experiment, and therefore free from any social pressures. In order to achieve such a real-world context our child and adult participants viewed an individual, whom they believed to be another zoo visitor, retrieve a reward from inside a transparent puzzle box, using an action sequence which contained elements that were readily discernible as causally irrelevant. The task demonstration involved the model performing a sequence of causally',
                            questions: [
                                {
                                    id: 3,
                                    question: 
                                    "2.1 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"independent and strong willed.", 
                                            check: false, 
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"paternal and affectionate.",  
                                            check:false, 
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "serious and family oriented.",  
                                            check:true, 
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "boring and simple minded.",  
                                            check:false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                            
                                },
                                {
                                    id: 4,
                                    question: 
                                    "2.2 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"2independent and strong willed.", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"2paternal and affectionate.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "2serious and family oriented.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "2boring and simple minded.",  
                                            check: true, 
                
                                        } 
                                    ],
                                    selectedChoice: '',
                                }
                            ],
                }, 
                
                {
                    id:3, 
                    defaultTimer: 15,
                            sectionType: 'writing', 
                            IsLastSectionType: false, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: 'only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such         1 long study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same',
                            questions: [
                                {
                                    id: 1,
                                    question: 
                                    "1.1 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"independent and strong willed.", 
                                            check: false, 
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"paternal and affectionate.",  
                                            check:false, 
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "serious and family oriented.",  
                                            check:true, 
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "boring and simple minded.",  
                                            check:false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                               
                                },
                                {
                                    id: 2,
                                    question: 
                                    "1.2 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"2independent and strong willed.", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"2paternal and affectionate.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "2serious and family oriented.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "2boring and simple minded.",  
                                            check: true, 
                
                                        } 
                                    ],
                                    selectedChoice: '',
                               
                                },
                            ]
                }, 

                {
                    id:4, 
                    defaultTimer: 15,
                            sectionType: 'writing', 
                            IsLastSectionType: true, 
                            title:' Violet Wood Sorrel Plant 2', 

                            passage: 'The first Ohio stories are part of the common story of the wonderful Ice Age, when a frozen deluge pushed down from the north and covered a vast part of the earth’s surface with slowly moving glaciers',
                            questions: [
                                {
                                    id: 3,
                                    question: 
                                    "2.1 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"independent and strong willed.", 
                                            check: false, 
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"paternal and affectionate.",  
                                            check:false, 
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "serious and family oriented.",  
                                            check:true, 
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "boring and simple minded.",  
                                            check:false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                            
                                },
                                {
                                    id: 4,
                                    question: 
                                    "2.2 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"2independent and strong willed.", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"2paternal and affectionate.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "2serious and family oriented.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "2boring and simple minded.",  
                                            check: true, 
                
                                        } 
                                    ],
                                    selectedChoice: '',
                                }
                            ]
                }, 
                
                {
                    id:5, 
                    defaultTimer: 20,
                            sectionType: 'mathNoCal', 
                            IsLastSectionType: true, 

                            questions: [
                                {
                                    id: 1,
                                    question: 
                                    "1.1 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"independent and strong willed.", 
                                            check: false, 
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"paternal and affectionate.",  
                                            check:false, 
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "serious and family oriented.",  
                                            check:true, 
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "boring and simple minded.",  
                                            check:false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                               
                                },
                                {
                                    id: 2,
                                    question: 
                                    "1.2 As presented in the passage, Mr. Kearney is best described as",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"2independent and strong willed.", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"2paternal and affectionate.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "2serious and family oriented.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "2boring and simple minded.",  
                                            check: true, 
                
                                        } 
                                    ],
                                    selectedChoice: '',
                               
                                },
                            ], 
                            fillInQuestions: [
                                {
                                    id:1, 
                                    question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                                    text: "1.21", 
                                    check: true, 
                                }, 
                                {
                                    id:2, 
                                    question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                                    text: "1.21", 
                                    check: true, 
                                }
                            ]
                }, 

                {
                    id:6,
                    defaultTimer: 20,
                    sectionType: 'mathWithCal', 
                    IsLastSectionType: true, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1.1 As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"independent and strong willed.", 
                                    check: false, 
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"paternal and affectionate.",  
                                    check:false, 
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "serious and family oriented.",  
                                    check:true, 
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "boring and simple minded.",  
                                    check:false, 
                                } 
                            ], 
                            selectedChoice: '',
                        }, 
                        {
                            id: 2,
                            question: 
                            "1.2 As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"2independent and strong willed.", 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"2paternal and affectionate.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "2serious and family oriented.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "2boring and simple minded.",  
                                    check: true, 
        
                                } 
                            ],
                            selectedChoice: '',
                        }
                    ], 
                    fillInQuestions: [
                        {
                            id:1, 
                            question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                            text: "1.21", 
                            check: true, 
                        }, 
                        {
                            id:2, 
                            question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                            text: "1.21", 
                            check: true, 
                        }
                    ]

                }, 
                
            ],
           
        };
 }
    renderAllQuestions() {
        const {sections, currentSection} = this.state; 
        const section = sections[currentSection];

        if (section.sectionType === 'reading' || section.sectionType === 'writing' ) {
            return (
                <div>
                    
                    <h4> SECTION {section.sectionType}</h4>
                    {

                        section.questions.map((subquestion, index2) => {
                            return (
                                    <ButtonComponent
                                    key={subquestion.id}
                                    onClick={(selectedId) => {
                                        subquestion.selectedChoice = subquestion.selectedChoice != selectedId? selectedId : ''; // update the selectedChoice of this question with the clicked choice
                                        this.setState({
                                            questions: [
                                                ...section.questions.slice(0, index2), // questions array before updated question - stay exactly the same
                                                subquestion, // updated question - it's updated with the selectedChoice
                                                ...section.questions.slice(index2+1, section.questions.length), // questions array after updated question - stays exactly the same
                                            ]
                                        });
                                    }}
                                    selectedChoice={subquestion.selectedChoice}
                                    question={subquestion.question}
                                    choices={subquestion.choices}
                            />
                            )

                        })
                    }
                </div>
            )                
        }
        else {
            return (
                <div>
                    
                    <h4> SECTION {section.sectionType}</h4>
                    {

                        section.questions.map((subquestion, index2) => {
                            return (
                                <ButtonComponent
                                key={subquestion.id}
                                onClick={(selectedId) => {
                                    subquestion.selectedChoice = subquestion.selectedChoice != selectedId? selectedId : ''; // update the selectedChoice of this question with the clicked choice
                                    this.setState({
                                        questions: [
                                            ...section.questions.slice(0, index2), // questions array before updated question - stay exactly the same
                                            subquestion, // updated question - it's updated with the selectedChoice
                                            ...section.questions.slice(index2+1, section.questions.length), // questions array after updated question - stays exactly the same
                                        ]
                                    });
                                }}
                                selectedChoice={subquestion.selectedChoice}
                                question={subquestion.question}
                                choices={subquestion.choices}
                                />           
                            )
                        })
                    }

                    {
                        section.fillInQuestions.map((subfillInQuestion)=> {
                        return (
                            <MathComponent
                            key = {subfillInQuestion.id}
                            question={subfillInQuestion.question}
                            />
                        )
                        })
                    }
                    
                </div>
            )  
        }

    }
    IsLastElementOfSectionsArray() {
        const {currentSection, sections} = this.state;
        /*  if id of the current subject = the size of the subjects then return true */
        return (currentSection === sections.length-1);
   }

    IsLastSection() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        if (section.IsLastSectionType === true) {
            return section.id; 
        }
    }
   // checkingFillInQuestions() {
//
  //  }
    addPassageOrNot() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        if (section.sectionType === 'reading' ||section.sectionType === 'writing' ) {
            return (

                <div className="passageSection">
                <div className="passagename">
                <b>{section.title}</b>
                </div>
                <Highlight passage = {section.passage}/>
                </div>
            ) 
        }        
    }

    renderRightButton() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        let buttonText = 'Next'; 
        if (this.IsLastSection() && section.sectionType === 'reading') {
            buttonText = 'Go to Writing and Language'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'writing') {
            buttonText = 'Go to Math (No Calculators)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'mathNoCal') {
            buttonText = 'Go to Math (With Calculators)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'mathWithCal') {
            buttonText = 'Submit'; 
        }
    return (<button className="btn btn-primary m-2" onClick={() => this.checkingAllQuestions()}>{buttonText}</button>);
    }
    checkingAllQuestions() {
        const {currentSection, NumeberOfCorrectAnswersOfEachSubject, sections, currentSubject} = this.state; 
        let numberOfCorrectAnswers = 0;
        if (this.IsLastElementOfSectionsArray() && this.IsLastSection()) {
            sections.map((section)=> {
                section.questions.map((question) => {
                    const correctAnswer = question.choices.find((choice) => {
                        if (choice.check === true) {
                            return choice.id;    
                        }
                    })
                    if(correctAnswer.id === question.selectedChoice) {
                        numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
                    };
                })
            })
            NumeberOfCorrectAnswersOfEachSubject[currentSubject] = numberOfCorrectAnswers; 
            this.setState({
                isTestSubmitted: true,
                numberOfCorrectAnswers: numberOfCorrectAnswers,
            });
        } else {
            const section = sections[currentSection];
            const nextSection = sections[currentSection + 1];
            if(section.sectionType !== nextSection.sectionType) {
                if (window.confirm("Are you sure? By clicking OK, you'll be moving on to the next section and can't go back")) {
                    this.setState({
                        currentSection: currentSection + 1,
                    })
                }            }
            this.setState({
                currentSection: currentSection + 1,
            });
        }

    }
    ReadingScore() {
        const {ReadingScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 

        if (0 <= NumeberOfCorrectAnswersOfEachSubject[1] <=3) {
            ReadingScore = 100; 

        } 
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 4 ) {
            ReadingScore = 110; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 5) {
            ReadingScore = 120; 
        }
        else if ( 6 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 7) {
            ReadingScore = 130; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 8) {
            ReadingScore = 140; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 9) {
            ReadingScore = 150; 
        }
        else if (10 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 11) {
            ReadingScore = 160; 
        }
        else if (12 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 13) {
            ReadingScore = 170; 
        }
        else if (14 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 15) {
            ReadingScore = 180; 
        }
        else if (16 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 17) {
            ReadingScore = 190; 
        }
        else if (18 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 19) {
            ReadingScore = 200; 
        }
        else if (20 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 21) {
            ReadingScore = 210; 
        }
        else if (22 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 23) {
            ReadingScore = 220; 
        }
        else if (24 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 25) {
            ReadingScore = 230; 
        }
        else if (26 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 27) {
            ReadingScore = 240; 
        }
        else if (28 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 29) {
            ReadingScore = 250; 
        }
        else if (30 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 31) {
            ReadingScore = 260; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 32) {
            ReadingScore = 270; 
        }
        else if (33 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 34) {
            ReadingScore = 280; 
        }
        else if (35 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 36) {
            ReadingScore = 290; 
        }
        else if (37 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 38) {
            ReadingScore = 300; 
        }
        else if (39 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 41) {
            ReadingScore = 310; 
        }
        else if ( 42 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 43) {
            ReadingScore = 320; 
        }
        else if (44 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 45) {
            ReadingScore = 330; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 46) {
            ReadingScore = 340; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 47) {
            ReadingScore = 350; 
        }
        else if (48 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 49) {
            ReadingScore = 360; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 50) {
            ReadingScore = 370; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 51) {
            ReadingScore = 380; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 52) {
            ReadingScore = 400; 
        }
        return (ReadingScore); 
    }
    WritingScore() {
        const {WritingScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        if (0 <= NumeberOfCorrectAnswersOfEachSubject[2] <=3) {
            WritingScore = 100; 
        } 
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 4 ) {
            WritingScore = 110; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 5) {
            WritingScore = 120; 
        }
        else if ( 6 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 7) {
            WritingScore = 130; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 8) {
            WritingScore = 140; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 9) {
            WritingScore = 150; 
        }
        else if (10 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 11) {
            WritingScore = 160; 
        }
        else if (12 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 13) {
            WritingScore = 170; 
        }
        else if (14 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 16) {
            WritingScore = 180; 
        }
        else if (17 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 18) {
            WritingScore = 190; 
        }
        else if (19 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 20) {
            WritingScore = 200; 
        }
        else if (21 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 22) {
            WritingScore = 210; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 23) {
            WritingScore = 220; 
        }
        else if (24 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 25) {
            WritingScore = 230; 
        }
        else if (26 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 27) {
            WritingScore = 240; 
        }
        else if (28 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 29) {
            WritingScore = 250; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 30) {
            WritingScore = 260; 
        }
        else if (31 <=NumeberOfCorrectAnswersOfEachSubject[2] === 32) {
            WritingScore = 270; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 33) {
            WritingScore = 280; 
        }
        else if (34 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 35) {
            WritingScore = 290; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] <= 36) {
            WritingScore = 300; 
        }
        else if (37 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 38) {
            WritingScore = 310; 
        }
        else if (  NumeberOfCorrectAnswersOfEachSubject[2] === 39) {
            WritingScore = 320; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] ===40) {
            WritingScore = 330; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 41) {
            WritingScore = 340; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 42) {
            WritingScore = 360; 
        }
        else if (48 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 43) {
            WritingScore = 380; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 44) {
            WritingScore = 400; 
        }
      
        return (WritingScore); 
    }
    MathScore() {
        const {MathScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        let ScoreOfTwoMathTests = NumeberOfCorrectAnswersOfEachSubject[3] +  NumeberOfCorrectAnswersOfEachSubject[4]; 
        if (0 <=ScoreOfTwoMathTests <=1) {
            MathScore = 200; 
        } 
        else if ( ScoreOfTwoMathTests === 2 ) {
            MathScore = 210; 
        }
        else if ( ScoreOfTwoMathTests === 3) {
            MathScore = 220; 
        }
        else if ( ScoreOfTwoMathTests === 4) {
            MathScore = 230; 
        }
        else if (ScoreOfTwoMathTests === 5) {
            MathScore = 250; 
        }
        else if (ScoreOfTwoMathTests === 6) {
            MathScore = 270; 
        }
        else if (ScoreOfTwoMathTests === 7) {
            MathScore = 280; 
        }
        else if (ScoreOfTwoMathTests === 8) {
            MathScore = 300; 
        }
        else if (ScoreOfTwoMathTests === 9) {
            MathScore = 310; 
        }
        else if (ScoreOfTwoMathTests === 10) {
            MathScore = 320; 
        }
        else if  (ScoreOfTwoMathTests === 11) {
            MathScore = 340; 
        }
        else if  (ScoreOfTwoMathTests === 12) {
            MathScore = 350; 
        }
        else if  (ScoreOfTwoMathTests === 13) {
            MathScore = 360; 
        }
        else if  (ScoreOfTwoMathTests === 14) {
            MathScore = 370; 
        }
        else if  (ScoreOfTwoMathTests === 15) {
            MathScore = 380; 
        }
        else if  (ScoreOfTwoMathTests === 16) {
            MathScore = 390; 
        }
        else if  (ScoreOfTwoMathTests === 17) {
            MathScore = 400; 
        }
        else if  (ScoreOfTwoMathTests === 18) {
            MathScore = 410; 
        }
        else if  (ScoreOfTwoMathTests === 19) {
            MathScore = 420; 
        }
        else if  (ScoreOfTwoMathTests === 20) {
            MathScore = 430; 
        }
        else if  (ScoreOfTwoMathTests === 21) {
            MathScore = 440; 
        }
        else if  (ScoreOfTwoMathTests === 22) {
            MathScore = 450; 
        }
        else if  (ScoreOfTwoMathTests === 23) {
            MathScore = 460; 
        }
        else if  (ScoreOfTwoMathTests === 24) {
            MathScore = 470; 
        }
        else if  (ScoreOfTwoMathTests === 25) {
            MathScore = 480; 
        }
        else if  (ScoreOfTwoMathTests === 26) {
            MathScore = 490; 
        }
        else if  (ScoreOfTwoMathTests === 27) {
            MathScore = 500; 
        }
        else if  (ScoreOfTwoMathTests === 28) {
            MathScore = 500; 
        }
        else if  (ScoreOfTwoMathTests === 29) {
            MathScore = 510; 
        }
        else if  (ScoreOfTwoMathTests === 30) {
            MathScore = 520; 
        }
        else if  (ScoreOfTwoMathTests === 31) {
            MathScore = 520; 
        }
        else if  (ScoreOfTwoMathTests === 32) {
            MathScore = 530; 
        }
        else if  (ScoreOfTwoMathTests === 33) {
            MathScore = 540; 
        }
        else if  (ScoreOfTwoMathTests === 34) {
            MathScore = 540; 
        }
        else if  (ScoreOfTwoMathTests === 35) {
            MathScore = 550; 
        }
        else if  (ScoreOfTwoMathTests === 36) {
            MathScore = 560; 
        }
        else if  (ScoreOfTwoMathTests === 37) {
            MathScore = 570; 
        }
        else if  (ScoreOfTwoMathTests === 38) {
            MathScore = 580; 
        }
        else if  (ScoreOfTwoMathTests === 39) {
            MathScore = 580; 
        }
        else if  (ScoreOfTwoMathTests === 40) {
            MathScore = 590; 
        }
        else if  (ScoreOfTwoMathTests === 41) {
            MathScore = 600; 
        }
        else if  (ScoreOfTwoMathTests === 42) {
            MathScore = 610; 
        }
        else if  (ScoreOfTwoMathTests === 43) {
            MathScore = 610; 
        }
        else if  (ScoreOfTwoMathTests === 44) {
            MathScore = 620; 
        }
        else if  (ScoreOfTwoMathTests === 45) {
            MathScore = 630; 
        }
        else if  (ScoreOfTwoMathTests === 46) {
            MathScore = 640; 
        }
        else if  (ScoreOfTwoMathTests === 47) {
            MathScore = 650; 
        }
        else if  (ScoreOfTwoMathTests === 48) {
            MathScore = 660; 
        }
        else if  (ScoreOfTwoMathTests === 49) {
            MathScore = 670; 
        }
        else if  (ScoreOfTwoMathTests === 50) {
            MathScore = 680; 
        }
        else if  (ScoreOfTwoMathTests === 51) {
            MathScore = 690; 
        }
        else if  (ScoreOfTwoMathTests === 52) {
            MathScore = 700; 
        }
        else if  (ScoreOfTwoMathTests === 53) {
            MathScore = 710; 
        }
        else if  (ScoreOfTwoMathTests === 54) {
            MathScore = 730; 
        }
        else if  (ScoreOfTwoMathTests === 55) {
            MathScore = 750; 
        }
        else if  (ScoreOfTwoMathTests === 56) {
            MathScore = 770; 
        }
        else if  (ScoreOfTwoMathTests === 57) {
            MathScore = 790; 
        }
        else if  (ScoreOfTwoMathTests === 58) {
            MathScore = 800; 
        }
        return (MathScore); 
    }

    calculatePercentageOfAnsweredQuestions() {
        const {sections} = this.state; 
        let numberOfAnsweredQuestions = 0;
            sections.map((section) => {
                section.questions.map((question) => {
                    if (question.selectedChoice != '') {
                        numberOfAnsweredQuestions = numberOfAnsweredQuestions + 1;
                      };
                })
            })
       // sections.map((section) => {
       //     section.questions.map((question) => {
       //         if (question.selectedChoice != '') {
       //           numberOfAnsweredQuestions = numberOfAnsweredQuestions + 1;
       //         };
       //     })
       // });

        let allQuestions = [];
            sections.map((section) => {
                allQuestions = [...allQuestions, ...section.questions]; 
            })
      //  sections.map((section) => {
       //   allQuestions = [...allQuestions, ...section.questions]; 
       // });

        return (numberOfAnsweredQuestions * 100) / allQuestions.length;
    }

    NotAllQuestionsAnswered() {
        /*
         * Check if one of the questions of the current section is not answered
         */ 
        const {subjects} = this.state;
        return subjects.some((subject) => subject.sections.some((section) => section.questions.map((question) => question.selectedChoice === '' ))); 
  //  return sections.some((section) => section.questions.some((question) => question.selectedChoice === ''));
    }

  //  IsTheLastPage() {
    //    const {sections, currentSection} = this.state;
        /*  if id of the current section = the size of the sections then return true */
   //     return ((currentSection === sections.length-1))

    //}    

    IsNotTheFirstPage() {
        const {currentSection} = this.state;
        return ((currentSection !== 0))
    }

    render() {
        const {
            isTestSubmitted,
            ReadingScore,
            WritingScore,
            MathScore, 
            currentSection, sections,
        } = this.state;

        /*
         * 
         * check if the current section is the last one
         * 
         */

    //    let allQuestions = [];
      //  sections.map((section) => {
      //    allQuestions = [...allQuestions, ...section.questions]; 
       // });
        let TotalScore = ReadingScore + WritingScore + MathScore; 
        //const percentageOfCorrectAnswers = (numberOfCorrectAnswers*100)/sections.questions.length;
        if(isTestSubmitted) {
            
            return (
                <div className="appContainer">
                    <h1>Result:!</h1>
                    <h2>Reading Score: {ReadingScore}</h2>
                    <h2>Writing and Language Score: {WritingScore}</h2>
                    <h2>Math Score: {MathScore}</h2>
                    <h2>Total Score: {TotalScore} </h2>

                </div>
            );
        }

        const currentSectionObject = sections[currentSection];

        return <div className="appContainer">
            <div className= "header">
                <Timer initialTimer={currentSectionObject.defaultTimer} sectionType={currentSectionObject.sectionType}/>            
            </div>
            <div className="testContainer">

                {this.addPassageOrNot()}

                <div className="questionSection">
                    <div className="article2">
                    {this.renderAllQuestions()}
                    {this.IsNotTheFirstPage() ?  <button className="btn btn-primary"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Back</button> : '' }
                    {this.renderRightButton()}
                    </div>
                </div>
            </div>
            <div className = "progressNum">
                <div>
                    <ProgressNum currentSection={currentSection} sections={sections}/>
                </div>
            </div>
            <div className = "progressbar">
                <div> 
                    <Progress animated color="info" value={this.calculatePercentageOfAnsweredQuestions()} />
                </div>
            </div>
        </div>
        
    }
}

