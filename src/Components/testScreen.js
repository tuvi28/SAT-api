import React from 'react'
import styles from "./testScreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
import ProgressNum from './progressNum'
import {Progress} from 'reactstrap'
import MathComponent from './mathComponent'
export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTestSubmitted: false,
            currentSection: 0,
            currentSubject:0, 
            NumeberOfCorrectAnswersOfEachSubject: [], 
            readingScore: 0, 
            writingScore: 0, 
            mathScore: 0,
            mathNoCal:0, 
            mathWithCal:0, 
            correctReading: 0, 
            correctWriting: 0,
            correctmathNoCal:0, 
            correctmathWithCal:0, 
            verbal: 0, 
            total:0, 
            sections: [
                {
                    id:1, 
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "This passage is from James Joyce, The Dubliners originally published in 1914",
                    passage: [
                        {
                            id:1, 
                            content: 'Mr Holohan, assistant secretary of the Eire Abu Society, had been walking up and down Dublin for nearly a month, with his hands and pockets full of dirty pieces of paper, arranging about the series of concerts. He had a game leg and for this his friends called him Hoppy Holohan. He walked up and down constantly, stood by the hour at street corners arguing the point and made notes; but in the end it was Mrs Kearney who arranged everything.', 
                        }, 
                        {
                            id:2, 
                            content: ' Miss Devlin had become Mrs Kearney out of spite. She had been educated in a high-class convent, where she had learned French and music. As she was naturally pale and unbending in manner she made few friends at school. When she came to the age of marriage she was sent out to many houses where her playing and ivory manners were much admired. She sat amid the chilly circle of her  accomplishments, waiting for some suitor to brave it and offer her a brilliant life. But the young men whom she met were ordinary and she gave them no encouragement, trying to console her romantic desires by eating a great deal of Turkish Delight in secret. However, when she drew near the limit and her friends began to loosen their tongues about her, she silenced them by marrying Mr Kearney, who was a bootmaker on Ormond Quay.', 
                        }, 
                        {
                            id:3, 
                            content: 'He was much older than she. His conversation, which was serious, took place at intervals in his great brown beard. After the first year of married life, Mrs Kearney perceived that such a man would wear better than a romantic person, but she never put her own romantic ideas away. He was sober, thrifty and pious; he went to the altar every first Friday, sometimes with her, oftener by himself. But she never weakened in her religion and was a good wife to him. At some party in a strange house when she lifted her eyebrow ever so slightly he stood up to take his leave and, when his cough troubled him, she put the eider-down quilt over his feet and made a strong rum punch. For his part, he was a model father. By paying a small sum every week into a society, he ensured for both his daughters a dowry of one hundred pounds each when they came to the age of twenty-four. He sent the elder daughter, Kathleen, to a good convent, where she learned French and music, and afterward paid her fees at the Academy. Every year in the month of July Mrs Kearney found occasion to say to some friend:', 
                        }, 
                        {
                            id:4, 
                            content: '"My good man is packing us off to Skerries for a few weeks.” If it was not Skerries it was Howth or Greystones.', 
                        }, 
                        {
                            id:5, 
                            content: 'When the Irish Revival began to be appreciable Mrs Kearney determined to take advantage of her daughter\'s name and brought an Irish teacher to the house. Kathleen and her sister sent Irish picture postcards to their friends and these friends sent back other Irish picture postcards. On special Sundays, when Mr Kearney went with his family to the pro-cathedral, a little crowd of people would assemble after mass at the corner of Cathedral Street. They were all friends of the Kearneys—musical friends or Nationalist friends; and, when they had played every little counter of gossip, they shook hands with one another all together, laughing at the crossing of so many hands, and said good-bye to one another in Irish. Soon the name of Miss Kathleen Kearney began to be heard often on people\'s lips. People said that she was very clever at music and a very nice girl and, moreover, that she was a believer in the language movement. Mrs Kearney was well content at this.', 
                        }, 

                    ], 
                    IsLastSectionType: false, 
                    IsFirstSectionType: true, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1. As presented in the passage, Mr. Kearney is best described as",  
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
                            "2. It can be inferred from the passage that Miss Devlin married Mr. Kearney because",  
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
                                    text:"she had no other marriage offers.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "other men were too ordinary.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "her friends were irritating her.",  
                                    check: true, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                        {
                            id: 3,
                            question: 
                            "3. Which choice provides the best evidence for the answer to the previous question?",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'Lines 9-10 (“Miss...spite.”)', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"Lines 22-26 (“But the...secret.”)",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "Lines 26-30 (“However...Quay.”)",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "Lines 33-37 (“After the...away.”)",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },

                        {
                            id: 4,
                            question: 
                            "4. In line 18, the word “ivory” most nearly means",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'proper', 
                                    check: true, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"gentle",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "sincere",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "renowned",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },

                        {
                            id: 5,
                            question: 
                            "5. Which choice best describes the main idea of the third paragraph (lines 31-56)?",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'The narrator details a choice that a character later regrets.', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"The author recounts the affectionate relationship between two characters.",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "One character describes how happy another character has made them.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "An event occurs that affects allff characters within the story.",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                        
                        {
                            id: 6,
                            question: 
                            "6. The narrator mentions the Irish Revival in line 60 in order to convey",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'A)	Mrs. Kearney’s attempts to manipulate her family.', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"B)	the national pride that the Kearney’s have.",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "C)	why Kathleen was sent away to study.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "an issue that Mr. and Mrs. Kearney disagreed on.",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                        {
                            id: 7,
                            question: 
                            "7. The passage indicates that Mrs. Kearney’s actions are often influence by",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'the opinions of other.', 
                                    check: true, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"a desire to give her family a good life.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "her religious beliefs.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "Irish tradition.",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },

                        {
                            id: 8,
                            question: 
                            "8. Which choice provides the best evidence for the answer",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'Lines 40-41 (“But she...him.”)', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"Lines 54-59 (“Every...Greystones.”)",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "Lines 60- 63(“When the...house.”)",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "Lines 60- 63(“When the...house.”)",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                        },
                        {
                            id: 9,
                            question: 
                            "9. How does Mrs. Kearny perceive her daughter Kathleen?",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'She wants Kathleen to have a bright future by pursuing music.', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"She believes that Kathleen will need more tutoring in order to do well.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "She is content on how others perceive Kathleen and her abilities.",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "She wants Kathleen to pursue her dreams as a linguist.",  
                                    check: false, 
        
                                } 
                            ],
                            selectedChoice: '',
                        },

                        {
                            id: 10,
                            question: 
                            "10. Which choice best describes the developmental pattern of the passage?",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:'a descriptive analysis of a chance encounter between two strangers', 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"a narrative about a woman with insights into her character and family",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "a discussion of a failed marriage and its effects on others",  
                                    check: true, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "an overview of the hardships endured by a character and the results",  
                                    check: false, 
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
                            IsLastSectionType: false, 
                            IsFirstSectionType: false, 
                            title: 'This passage and the figures are adapted from Whiten et. al Social Learning in the Real World © 2016', 
                            passage: [
                                {
                                    id:1, 
                                    content: 'The central aim of the current study was to eschew the experimental context traditionally used to study over-imitation, in order to determine whether visibly causally irrelevant actions would be copied in a naturalistic context in which the participants were unaware that they were taking part in an experiment, and therefore free from any social pressures. In order to achieve such a real-world context our child and adult participants viewed an individual, whom they believed to be another zoo visitor, retrieve a reward from inside a transparent puzzle box, using an action sequence which contained elements that were readily discernible as causally irrelevant.', 
                                }, 
        
                                {
                                    id:2, 
                                    content: 'The task demonstration involved the model performing a sequence of causally irrelevant actions towards a bolt ‘defense’ situated on the top of the box before ultimately withdrawing a reward from inside the box using a magnet tipped probe. The causally irrelevant elements of the demonstration were always performed first and comprised two stages: 1) the probe was used to slide out the bolt defense in order to uncover a hole on top of the box, and 2) the probe was inserted into the hole and struck multiple times against a false ceiling inside the box.', 
                                }, 
                                {
                                    id:3, 
                                    content: 'On completion of the irrelevant actions the model performed a two stage causally relevant sequence: 1) a second door defense on the front of the box was manually moved in order to uncover a hole on the face of the box, and 2) the probe was inserted into the hole behind to retrieve the reward from an opaque tunnel. Of interest was whether participants would copy all of the actions that were irrespective of their causal relevance (i.e., over-imitate), or perform only the actions necessary to obtain the goal.', 
                                }, 
                                {
                                    id:4, 
                                    content: 'Despite the fact that the model was unknown to the observer, performed the task only once, did not directly ‘teach’ the task to the observer, and physically moved away from the area in which the puzzle box was located before the participant attempted the task, the majority of participants, irrespective of their age, performed the causally irrelevant actions when they themselves attempted the task.', 
                                }, 
                                {
                                    id:5, 
                                    content: ' This capacity suggests that humans are opportunistic social learners from a very young age, capitalizing on even fleeting chances to learn fine grained details of action techniques intentionally performed by other individuals on novel artefacts. Perhaps most surprisingly, even the adult participants were subject to this effect despite the causal irrelevance of the actions witnessed being so visible.', 
                                }, 
                                {
                                    id:5, 
                                    content: ' The principal question raised by our results is why such a minimal learning context should lead both adults and children alike to abandon their own causal knowledge relevant to the task (displayed in the control condition) and instead adopt the inefficient technique used by the person they had just observed. One important influence which  may result in the reproduction of causally irrelevant actions in experimental studies of over-imitation is the social influence of the model.', 
                                }, 
                                {
                                    id:6, 
                                    content: ' Of course participants are not invited to imitate, but such experimental contexts likely contain a number of social influences which may impact on the likelihood that the observers will over-imitate. First, these influences may elicit a motivation on the part of the observer to affiliate with the model by acting like them; second, they may place social pressure on the observer to conform to performing the task in the same way as the model; or third, they may provide an opportunity for the observer to engage in a shared experience with the model.', 
                                }, 
                                {
                                    id:7, 
                                    content: ' Of course participants are not invited to imitate, but such experimental contexts likely contain a number of social influences which may impact on the likelihood that the observers will over-imitate. First, these influences may elicit a motivation on the part of the observer to affiliate with the model by acting like them; second, they may place social pressure on the observer to conform to performing the task in the same way as the model; or third, they may provide an opportunity for the observer to engage in a shared experience with the model.', 
                                }, 
                            ],                            
                            questions: [
                                {
                                    id: 11,
                                    question: 
                                    "11. The authors most likely notes that the participants in the study were “unaware that they were taking part in an experiment” (lines 7-8) to highlight that",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:'ocial pressure was not a factor in the experiment.', 
                                            check: true, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"the study was ethically conducted.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "the participants were randomly selected.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "none of the participants had agreed to the study.",  
                                            check: false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                                },
                                {
                                    id: 12,
                                    question: 
                                    "12. The passage indicates which of the following actions were irrelevant to the task at hand?",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"withdrawing a reward from the box with a magnet", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"inserting a probe into the box",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "uncovering a hole on the top of the box and finding a false ceiling",  
                                            check: true, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "opening a door.",  
                                            check: false, 
                
                                        } 
                                    ],
                                    selectedChoice: '',
                                }, 

                                {
                                    id: 13,
                                    question: 
                                    "13. Which choice provides the best evidence for the answer to the previous question?",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"Lines 16-22 (“The task...probe.”)", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"B)	Lines 22-30 (“The casually...box.”)",  
                                            check: true, 
                
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "Lines 38-42 (“Of interest...goal.”)",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "Lines 43-52 (“Despite...task.”)",  
                                            check: false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                                }, 

                                {
                                    id: 14,
                                    question: 
                                    "14. Which choice best summarizes the fifth paragraph of the passage (lines 53-62)?",  
                                    choices: [
                                        {
                                            opt: 'A',
                                            id: 1, 
                                            text:"Adults are less likely than children to follow the examples others set.", 
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'B',
                                            id:2, 
                                            text:"Social learning influences actions at any age.",  
                                            check: true, 
                                        },
                                        {
                                            opt: 'C',
                                            id:3, 
                                            text: "Humans choose which social norms they want to follow.",  
                                            check: false, 
                
                                        },
                                        {
                                            opt: 'D',
                                            id:4, 
                                            text: "Irrelevant tasks did not distract participants from achieving the goal.",  
                                            check: false, 
                                        } 
                                    ],
                                    selectedChoice: '',
                                }
                            ],
                }, 
                {
                    id:3, 
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "The passage is adapted from Boutilier et. al Water Filtration Using Plant Xylem © 2014",
                    passage: [
                        {
                            id:1, 
                            content: 'The scarcity of clean and safe drinking water is one of the major causes of human mortality in the developing world. Potable or drinking water is defined as having acceptable quality in terms of its physical, chemical, and bacteriological parameters so that it can be safely used for drinking and cooking. Among the water pollutants, the most deadly ones are of biological origin: infectious diseases caused by pathogenic bacteria, viruses, protozoa, or parasites are the most common and widespread health risk associated with drinking water. The most common water-borne pathogens are bacteria, viruses, and protoza.', 
                        }, 
                        {
                            id:2, 
                            content: 'The World Health Organization reports that 1.6 million people die every year from diarrheal diseases attributable to lack of access to safe drinking water and basic sanitation. 90% of these are children under the age of 5, mostly in developing countries. Multiple barriers including prevention of contamination, sanitation, and disinfection are necessary to effectively prevent the spread of waterborne diseases. However, if only one barrier is possible, it has to be disinfection unless evidence exists that chemical contaminants are more harmful than the risk from ingestion of microbial pathogens. Furthermore, controlling water quality at the point-of-use is ften most effective due to the issues of microbial regrowth, byproducts of disinfectants, pipeline corrosion, and contamination in the distribution system.', 
                        }, 
                        {
                            id:3, 
                            content: 'Common technologies for water disinfection include chlorination, filtration, UV-disinfection, pasteurization or boiling, and ozone treatment. Chlorine treatment is effective on a large scale, but becomes expensive for smaller towns and villages. Boiling is an effective method to disinfect water; however, the amount of fuel required to disinfect water by boiling is several times more than what a typical family will use for cooking. UV-disinfection is a promising point-of-use technology available, yet it does require access to electricity and some maintenance of the UV lamp, or sufficient sunlight.', 
                        }, 
                        {
                            id:4, 
                            content: '  While small and inexpensive filtration devices can potentially address the issue of point-of-use disinfection, an ideal technology does not currently exist. Inexpensive household carbon-based filters are not effective at removing pathogens and can be used only when the water is already biologically safe. Sand filters that can remove pathogens require large area and knowledge of how to maintain them, while membrane filters capable of removing pathogens suffer from high costs, fouling, and often require pumping power due to low flow rates that prevents their wide implementation in developing countries. In this context, new approaches that can improve upon current technologies are urgently needed. Specifically, membrane materials that are inexpensive, readily available, disposable, and effective at pathogen removal could greatly impact our ability to provide safe drinking water to the global population.', 
                        }, 
                        {
                            id:5, 
                            content: 'If we look to nature for inspiration, we find that a potential solution exists in the form of plant xylem – a porous material that conducts fluid in plants. Plants have evolved specialized xylem tissues to conduct sap from their roots to their shoots. Xylem has evolved under the competing pressures of offering minimal resistance to the ascent of sap while maintaining small nanoscale pores to prevent cavitation. The size distribution of these pores also happens to be ideal for filtering out pathogens, which raises the interesting question of whether plant xylem can be used to make inexpensive water filtration devices.', 
                        }, 
                        {
                            id: 6, 
                            content: 'Although scientists have extensively studied plant xylem and the ascent of sap, use of plant xylem in the context of water filtration remains to be explored. Measurements of sap flow in plants sugge that flow rates in the range of several liters per hour may be feasible with less than 10 cm-sized filters, using only gravitational pressure to drive the flow.', 
                        }

                    ], 
                    IsLastSectionType: false, 
                    IsFirstSectionType: false, 
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
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "Passage1is adapted from Richard Nixon’s book No More Vietnams ©1985. Nixon discusses his view on the publication of the Pentagon Papers in the New York Times during his presidency. Passage 2 is adapted from New York Times Editor A. M. Rosenthal What a Free Press is All About on hisopinion of the matter in 1972.",
                    passage: [
                        {
                            id:1, 
                            content: '<b>Passage 1<\/b>', 
                        }, 
                        {
                            id:2, 
                            content: 'My administration faced the difficult question of what to do about the most massive leak of classified documents in American history. We had only two options: We could either do nothing or move for a court injunction that would prevent the Times from continuing publication. Good policy argued for moving against the Times; safe politics argued against doing so.'
                        }, 
                        {
                            id:3, 
                            content: 'If the New York Times had acted with any degree of responsibility, we could have avoided the battle in the court. But it had not done so. Its editors admitted having had possession of the documents for more than three months before publishing them. Yet never once had they asked anyone in the government whether publication of any of the classified material might threaten national security or endanger the lives of our men in Vietnam.', 
                        }, 
                        {
                            id:4, 
                            content: 'The Supreme Court ruled against the government. But I still believe I acted responsibly in challenging the right of the New York Times to publish the Pentagon’s study. Its release was an illegal action. Its publication was a threat to our ability to conduct foreign policy. If we had done nothing, we would have been setting a dangerous precedent: Every disgruntled bureaucrat in Washington would have read our inaction as a signal that he could leak anything he pleased and that the government would simply stand by helplessly. In the thirteen years since the Supreme Court sanctioned the Times’s publication of the Pentagon Papers, that is exactly what has happened.', 
                        }, 
                        {
                            id:5, 
                            content: '<b>Passage 2<\/b>', 
                        }, 
                        {
                            id:6, 
                            content: 'The decisions were taken and two great issues immediately confronted the Government, the press, the courts and the public. There was, to begin with, the issue of the papers themselves and what they showed about the process of government, how decisions are made-or, sometimes more important, not made-and how the country went step by step into the most divisive foreign war in its history.', 
                        }, 
                        {
                            id:7, 
                            content: 'And there was the great constitutional issue of freedom of the press: Does it have limits, and, if so, what are they and who determines them and can they be imposed in advance of publication?', 
                        }, 
                        {
                            id:8, 
                            content: 'The decisions were not taken to change history or to try to affix blame or as an act of civil disobedience-quite the contrary, we were convinced we were acting totally within the law, and from the beginning agreed that if it did come to a court test, we would fight all the way through the judicial process but would not defy the courts.', 
                        }, 
                        {
                            id:9, 
                            content: 'The decisions were taken simply because we believed that this was what the national interest and the role of a free press were all about.', 
                        }, 
                        {
                            id:10, 
                            content: 'By far the most important was that for the first time, a Government of the United States asked for and courts granted an injunction against newspapers-and prior restraint, death to a free press, had a precedent.', 
                        }, 
                        {
                            id:11, 
                            content: 'That was a loss and it could only be redressed in the future by the determination of American society-the press, the public, the courts, the politicians-to fight to the end against any future attempts at prior restraint. No press ever remained free by bowing to censorship beforehand for fear of what might take place if it printed the truth.', 
                        }
                    ], 
                    IsLastSectionType: false, 
                    IsFirstSectionType: false, 
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
                    id:5, 
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "This passage and the figures are adapted from Shibuya et. al Toxic wavelength of blue light changes as insects grow © 2018",
                    passage: [
                        {
                            id:1, 
                            content: 'The responses of insects to light have been studied and applied to various pest control methods. In particular, phototaxis has been well studied in insects. By identifying the species of insects that are attracted to artificial light sources and counting the number of insects, it is possible to forecast pest outbreaks. Phototaxis is also used for physical pest control. For instance, insects are attracted to light sources and are then killed by electric shock. Another study found that the compound eyes of fruit-piercing moths are adapted to yellow light, which suppresses fruit-piercing behavior, with this information being used to control their behavior.', 
                        }, 
                        {
                            id:2, 
                            content: 'Furthermore, free-flying insects maintain their horizontal orientation by receiving sunlight on their dorsal side while flying, which is termed the dorsal light reaction. This response has also been used in pest control. Specifically, by covering the ground in reflective mulching films (or sheets), flying insects receive reflected sunlight on the ventral side, which inhibits normal flight and prevents pests entering crop fields.', 
                        }, 
                        {
                            id:3, 
                            content: 'However, while many methods use light to control pests, these methods target the behavior of insects. While the lethal effects of ultra-violet light on insects have been reported aver the last five decades, our previous study was the first, to our knowledge, to report the lethal effects of visible light on complex organisms, including insects. Ultraviolet or blue light are used to attract insects to insect traps; however, our previous report suggested that insects are killed by continuous irradiation with blue light that is more than a certain amount. Depending on how it is used, blue light could be used to both capture insects in traps and remove pests through continuous irradiation.', 
                        }, 
                        {
                            id:4, 
                            content: 'Perhaps, fluorescent lamps or LED, which are already used as light sources in insect traps, could be used as insecticidal devices. In our previous study, we irradiated the pupae of three species of insect with various wavelengths of blue light to determine the most harmful wavelength. However, out of all insect species, the photosensitivity of insects that completely change the structure of the body via metamorphosis might change, depending on the stage of development.', 
                        }, 
                        {
                            id:5, 
                            content: 'Therefore, it is necessary to clarify the most toxic wavelength ta each developmental (or growth) stage to establish new physical pest control techniques using blue light. In this study, we report how the effective wavelength of blue light changes with insect development.', 
                        }, 
                        {
                            id: 6, 
                            content: 'We selected the fruit fly, Drosophila melanogaster, as a model insect because of its short life cycle. Furthermore, because it is possible to rear large numbers of D. melanogaster with ease, the experiments of this study could be conducted efficiently. In addition, D. melanogaster is suitable for future research to clarify the mechanism that generates differences in the effective wavelength among developmental stages, because many mutants are produced and cell culture is straightforward.',
                        },
                        {
                            id: 7, 
                            contnet: ' This study confirmed that blue light is lethal to all growth stages of D. melanogaster. We showed that the most toxic wavelength differed at different developmental stages. Shorter wavelengths were more harmful to eggs. Eggs were assumed ta be damaged by light with a shorter wavelength because this wavelength contains more energy. The lethal effects of blue light were different on larvae compared to the eqgs. This finding is important toward providing baseline information for establishing pest control methods using light irradiation.'
                        }

                    ], 
                    IsLastSectionType: true, 
                    IsFirstSectionType: false, 
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
                    id:6, 
                    defaultTimer: 10,
                            sectionType: 'break', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: true, 
                            title:'', 
                            passage:[], 
                            questions:[], 
                            
                }, 

                {
                    id:7, 
                    defaultTimer: 35,
                            sectionType: 'writing and language', 
                            IsLastSectionType: false, 
                            IsFirstSectionType: true, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: [
                                {
                                    id:1, 
                                    content: 'Beauty of leaf and blossom is not the only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such ', 
                                }, 
                                {
                                    id:2, 
                                    content: '1. long', 
                                }, 
                                {
                                    id:3, 
                                    content: ' study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same.', 
                                }, 
                                {
                                    id:4, 
                                    content: 'was inserted into the hole and struck multiple times against a false ceiling inside the box.', 
                                }
        
                            ],   
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
                    id:8, 
                    defaultTimer: 35,
                            sectionType: 'writing and language', 
                            IsLastSectionType: false, 
                            IsFirstSectionType: false, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: [
                                {
                                    id:1, 
                                    content: 'Beauty of leaf and blossom is not the only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such [1. long] study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same.', 
                                }, 
        
                                {
                                    id:2, 
                                    content: 'was inserted into the hole and struck multiple times against a false ceiling inside the box.', 
                                }
        
                            ],   
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
                    id:9, 
                    defaultTimer: 35,
                            sectionType: 'writing and language', 
                            IsLastSectionType: false, 
                            IsFirstSectionType: false, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: [
                                {
                                    id:1, 
                                    content: 'Beauty of leaf and blossom is not the only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such [1. long] study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same.', 
                                }, 
        
                                {
                                    id:2, 
                                    content: 'was inserted into the hole and struck multiple times against a false ceiling inside the box.', 
                                }
        
                            ],   
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
                    id:10, 
                    defaultTimer: 35,
                            sectionType: 'writing and language', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: false, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: [
                                {
                                    id:1, 
                                    content: 'Beauty of leaf and blossom is not the only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such [1. long] study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same.', 
                                }, 
        
                                {
                                    id:2, 
                                    content: 'was inserted into the hole and struck multiple times against a false ceiling inside the box.', 
                                }
        
                            ],   
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
                    id:11, 
                    defaultTimer: 25,
                            sectionType: 'math (no calculator)', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: true, 
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
                                    correctAnswer: 'answer 1', 
                                    input:'', 
                                }, 
                                {
                                    id:2, 
                                    question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                                    text: "1.21", 
                                    correctAnswer: 'answer 2',
                                    input:'', 
                                }
                            ]
                }, 
                {
                    id:12, 
                    defaultTimer: 5,
                    sectionType: 'break', 
                    IsLastSectionType: true, 
                    IsFirstSectionType: true, 
                    title:'', 
                    passage:[], 
                    questions:[], 
                }, 
                {
                    id:13,
                    defaultTimer: 55,
                    sectionType: 'math (with calculator)', 
                    IsLastSectionType: true, 
                    IsFirstSectionType: true, 
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
                            correctAnswer: 'answer 3',
                            input:'',

                        }, 
                        {
                            id:2, 
                            question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                            text: "1.21", 
                            correctAnswer: 'answer 4',
                            input:'',

                        }
                    ]

                }, 
                
            ],
           
        };
 }
    renderAllQuestions() {
        const {sections, currentSection} = this.state; 
        const section = sections[currentSection];

        if (section.sectionType === 'reading' || section.sectionType === 'writing and language' ) {
            return (
                <div>
                    
                    <h4> Section: {section.sectionType}</h4>
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
        else if (section.sectionType === 'break' ) {
            return (
                <div>
                    <h4> Section: {section.sectionType}</h4>
                    <p>You can be back in {section.defaultTimer} minutes</p>
                </div>
            )  
        }
        else {
            return (
                <div>
                    
                    <h4> Section: {section.sectionType}</h4>
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
                        section.fillInQuestions.map((subfillInQuestion, index)=> {
                        return (
                            <MathComponent
                                key = {subfillInQuestion.id}
                                question={subfillInQuestion.question}
                                onChange={(text) => {
                                    subfillInQuestion.input = text;
                                    this.setState({
                                        fillInQuestions: [
                                            ...section.questions.slice(0, index), // questions array before updated question - stay exactly the same
                                            subfillInQuestion, // updated question - it's updated with the selectedChoice
                                            ...section.questions.slice(index+1, section.questions.length), // questions array after updated question - stays exactly the same
                                        ]
                                    });
                                }}
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

    addPassageOrNot() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        if (section.sectionType === 'reading' ||section.sectionType === 'writing and language' ) {
            return (

                <div className="passageSection">

                        <div className="passagename">
                            <div className= "title">
                                <b>{section.title}</b>
                            </div>

                        </div>

                        <div className= "passageToRead">
                                <Highlight displayP = {() => this.displayPassage()}/>
                                {this.addPic()}                

                        </div>
                </div>

            ) 
        }     
   
    }
    displayUnderline(word) {
            return {
        __html: `${word}`
        }; 
    }
    

    displayPassage() {
        const {
            currentSection, 
            sections, 
        } = this.state; 
        const section = sections[currentSection]; 
    return section.passage.map((para) => <div> {para.content}</div>); 

    }
    addPic() {
        const {
            currentSection, 
            sections, 
        } = this.state; 
        const section = sections[currentSection]; 
        if (section.sectionType === 'reading' && section.id === 2) {
            return (
                <div className="pic">
                <img src={require('./readingSection2a.png')} className="readingSection"></img>
                <div className="graphTitles"> Figure 1: Percentage number of participants in each age group who performed all (bolts plus insertions), part (bolts only), or none of the irrelevant action sequence.</div>
                <img src={require('./readingSection2b.png')} className="readingSection"></img>
                <div className="graphTitles"> Figure 2: Percentage number of participants in each age group who dragged or pushed the bolts as a function of technique witnessed.</div>
                </div>
            )
        }
        else if (section.sectionType === 'reading' && section.id === 5) {
            return (
                <div className="pic">
                <img src={require('./readingSection5a.png')} className="readingSection"></img>
                <div className="graphTitles"> Figure 1: Egg mortality at different wavelengths.</div>
                <img src={require('./readingSection5b.png')} className="readingSection"></img>
                <div className="graphTitles"> Figure 2: Larval mortality at different wavelengths.</div>
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
        else if (this.IsLastSection() && section.sectionType === 'writing and language') {
            buttonText = 'Go to Math (No Calculator)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'math (no calculator)') {
            buttonText = 'Go to Math (With Calculator)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'math (with calculator)') {
            buttonText = 'Submit'; 
        }

        return (<button className="btn btn-dark m-2" onClick={() => this.checkingAllQuestions()}>{buttonText}</button>);

    }
    
    checkingAllQuestions() {
        const {currentSection, sections, correctWriting, correctmathNoCal, correctmathWithCal} = this.state; 

            if  (this.IsLastElementOfSectionsArray() && this.IsLastSection()) {
                sections.map(section => {
                    section.questions.map((question) => {
                        const correctAnswer = question.choices.find((choice) => choice.check === true);
                        if (section.sectionType === 'reading' ) {
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        correctReading: currentState.correctReading + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        } //TODO: else  if(section.sectionType === 'writing' ) { Exactly the same logic as reading but for the others}
                    });
        
                    if(section.sectionType === 'writing and language' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        correctWriting: currentState.correctWriting + 1
                                    }
                                }, () => this.CalculateScores()); 
                            }
                        })
                    }
                    else if(section.sectionType === 'math (no calculator)' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        correctmathNoCal: currentState.correctmathNoCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })

                        section.fillInQuestions.map((fillInQuestion) => {
                            if (fillInQuestion.correctAnswer ===fillInQuestion.input ) {
                                this.setState(currentState => {
                                    return {
                                        correctmathNoCal: currentState.correctmathNoCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })
                    }
                    else if(section.sectionType === 'math (with calculator)' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        correctmathWithCal: currentState.correctmathWithCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })

                        section.fillInQuestions.map((fillInQuestion) => {
                            if (fillInQuestion.correctAnswer ===fillInQuestion.input ) {
                                this.setState(currentState => {
                                    return {
                                        correctmathWithCal: currentState.correctmathWithCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })
                    }
                });


            } else {
                const section = sections[currentSection];
                const nextSection = sections[currentSection + 1];
                if(section.sectionType !== nextSection.sectionType) {
                    if (window.confirm("Are you sure? By clicking OK, you'll be moving on to the next section and can't go back")) {
                        this.setState({
                            currentSection: currentSection + 1,
                        })
                    }
                    else {
                        this.setState({
                            currentSection: currentSection + 0,
                        });
                    }            
                }
                else {
                    this.setState({
                        currentSection: currentSection + 1,
                    });
                }

            }
    }

    CalculateScores() {

        const {isTestSubmitted, readingScore, writingScore, currentSection, mathScore,mathNoCal,mathWithCal, sections, correctReading, correctWriting, correctmathNoCal, correctmathWithCal} = this.state; 

        //READING
        if (correctReading >= 0 && correctReading <= 3) {
            this.setState({
                readingScore: 100
            }) 
        } 
        else if ( correctReading === 4 ) {
            this.setState({
                readingScore: 110
            })         
        }
        else if ( correctReading === 5) {
            this.setState({
                readingScore: 120
            })        
        }
        else if ( correctReading >= 6 && correctReading <= 7) {
            this.setState({
                readingScore: 130
            })
        }
        else if (correctReading === 8) {
            this.setState({
                readingScore: 140
            })        
        }
        else if (correctReading === 9) {
            this.setState({
                readingScore: 150
            }) 
        }
        else if (correctReading >= 10 && correctReading <= 11) {
            this.setState({
                readingScore: 160
            }) 
        }
        else if (correctReading >= 12 && correctReading <= 13) {
            this.setState({
                readingScore: 170
            }) 
        }
        else if (correctReading >= 14 && correctReading <= 15) {
            this.setState({
                readingScore: 180
            }) 
        }
        else if (correctReading >= 16 && correctReading <= 17) {
            this.setState({
                readingScore: 190
            }) 
        }
        else if (correctReading >= 18 && correctReading <= 19) {
            this.setState({
                readingScore: 200
            }) 
        }
        else if (correctReading >= 20 && correctReading <= 21) {
            this.setState({
                readingScore: 210
            }) 
        }
        else if (correctReading >= 22 && correctReading <= 23) {
            this.setState({
                readingScore: 220
            }) 
        }
        else if (correctReading >= 24 && correctReading <= 25) {
            this.setState({
                readingScore: 230
            }) 
        }
        else if (correctReading >= 26 && correctReading <= 27) {
            this.setState({
                readingScore: 240
            }) 
        }
        else if (correctReading >= 28 && correctReading <= 29) {
            this.setState({
                readingScore: 250
            }) 
        }
        else if (correctReading >= 30 && correctReading <= 31) {
            this.setState({
                readingScore: 260
            })  
        }
        else if (correctReading === 32) {
            this.setState({
                readingScore: 270
            })  
        }
        else if (correctReading >= 33 && correctReading <= 34) {
            this.setState({
                readingScore: 280
            })  
        }
        else if (correctReading >= 35 && correctReading <= 36) {
            this.setState({
                readingScore: 290
            })  
        }
        else if (correctReading >= 37 && correctReading <= 38) {
            this.setState({
                readingScore: 300
            })  
        }
        else if (correctReading >= 39 && correctReading <= 41) {
            this.setState({
                readingScore: 310
            })  
        }
        else if (correctReading >= 42 && correctReading <= 43) {
            this.setState({
                readingScore: 320
            })  
        }
        else if (correctReading >= 44 && correctReading <= 45) {
            this.setState({
                readingScore: 330
            })  
        }
        else if ( correctReading === 46) {
            this.setState({
                readingScore: 340
            })  
        }
        else if ( correctReading === 47) {
            this.setState({
                readingScore: 350
            })  
        }
        else if (correctReading >= 48 && correctReading <= 49) {
            this.setState({
                readingScore: 360
            })  
        }
        else if ( correctReading === 50) {
            this.setState({
                readingScore: 370
            })  
        }
        else if ( correctReading === 51) {
            this.setState({
                readingScore: 380
            })  
        }
        else if ( correctReading === 52) {
            this.setState({
                readingScore: 400
            })  
        }
        //WRITING SCORE
        if (correctWriting >= 0 && correctWriting <= 3) {
            this.setState({
                writingScore: 100
            })   
        } 
        else if ( correctWriting === 4 ) {
            this.setState({
                writingScore: 110
            }) 
        }
        else if ( correctWriting === 5) {
            this.setState({
                writingScore: 120
            }) 
        }
        else if ( correctWriting >= 6 && correctWriting <= 7) {
            this.setState({
                writingScore: 130
            }) 
        }
        else if (correctWriting === 8) {
            this.setState({
                writingScore: 140
            }) 
        }
        else if (correctWriting === 9) {
            this.setState({
                writingScore: 150
            }) 
        }
        else if (correctWriting >= 10 && correctWriting <= 11) {
            this.setState({
                writingScore: 160
            }) 
        }
        else if (correctWriting >= 12 && correctWriting <= 13) {
            this.setState({
                writingScore: 170
            }) 
        }
        else if (correctWriting >= 14 && correctWriting <= 16) {
            this.setState({
                writingScore: 180
            }) 
        }
        else if (correctWriting >= 17 && correctWriting <= 18) {
            this.setState({
                writingScore: 190
            }) 
        }
        else if (correctWriting >= 19 && correctWriting <= 20) {
            this.setState({
                writingScore: 200
            }) 
        }
        else if (correctWriting >= 21 && correctWriting <= 22) {
            this.setState({
                writingScore: 210
            }) 
        }
        else if (correctWriting === 23) {
            this.setState({
                writingScore: 220
            }) 
        }
        else if (correctWriting >= 24 && correctWriting <= 25) {
            this.setState({
                writingScore: 230
            }) 
        }
        else if (correctWriting >= 26 && correctWriting <= 27) {
            this.setState({
                writingScore: 240
            }) 
        }
        else if (correctWriting >= 28 && correctWriting <= 29) {
            this.setState({
                writingScore: 250
            }) 
        }
        else if (correctWriting === 30) {
            this.setState({
                writingScore: 260
            }) 
        }
        else if (correctWriting >= 31 && correctWriting <= 32) {
            this.setState({
                writingScore: 270
            }) 
        }
        else if (correctWriting === 33) {
            this.setState({
                writingScore: 280
            }) 
        }
        else if (correctWriting >= 34 && correctWriting <= 35) {
            this.setState({
                writingScore: 290
            }) 
        }
        else if (correctWriting <= 36) {
            this.setState({
                writingScore: 300
            }) 
        }
        else if (correctWriting >= 37 && correctWriting <= 38) {
            this.setState({
                writingScore: 310
            }) 
        }
        else if (  correctWriting === 39) {
            this.setState({
                writingScore: 320
            }) 
        }
        else if (correctWriting ===40) {
            this.setState({
                writingScore: 330
            }) 
        }
        else if ( correctWriting === 41) {
            this.setState({
                writingScore: 340
            }) 
        }
        else if ( correctWriting === 42) {
            this.setState({
                writingScore: 360
            }) 
        }
        else if (correctWriting === 43) {
            this.setState({
                writingScore: 380
            }) 
        }
        else if ( correctWriting === 44) {
            this.setState({
                writingScore: 400
            }) 
        }

        //MATH
        if ((correctmathNoCal + correctmathWithCal) >= 0 && (correctmathNoCal + correctmathWithCal)  <= 1) {
            this.setState({
                mathScore: 200
            }) 
        } 
        else if ( (correctmathWithCal + correctmathNoCal) === 2 ) {
            this.setState({
                mathScore: 210
            }) 
        }
        else if ( (correctmathWithCal + correctmathNoCal) === 3) {
            this.setState({
                mathScore: 220
            }) 
        }
        else if ( (correctmathWithCal + correctmathNoCal) === 4) {
            this.setState({
                mathScore: 230
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 5) {
            this.setState({
                mathScore: 250
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 6) {
            this.setState({
                mathScore: 270
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 7) {
            this.setState({
                mathScore: 280
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 8) {
            this.setState({
                mathScore: 300
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 9) {
            this.setState({
                mathScore: 310
            }) 
        }
        else if ((correctmathWithCal + correctmathNoCal) === 10) {
            this.setState({
                mathScore: 320
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 11) {
            this.setState({
                mathScore: 340
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 12) {
            this.setState({
                mathScore: 350
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 13) {
            this.setState({
                mathScore: 360
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 14) {
            this.setState({
                mathScore: 370
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 15) {
            this.setState({
                mathScore: 380
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 16) {
            this.setState({
                mathScore: 390
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 17) {
            this.setState({
                mathScore: 400
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 18) {
            this.setState({
                mathScore: 410
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 19) {
            this.setState({
                mathScore: 420
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 20) {
            this.setState({
                mathScore: 430
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 21) {
            this.setState({
                mathScore: 440
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 22) {
            this.setState({
                mathScore: 450
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 23) {
            this.setState({
                mathScore: 460
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 24) {
            this.setState({
                mathScore: 470
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 25) {
            this.setState({
                mathScore: 480
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 26) {
            this.setState({
                mathScore: 490
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 27) {
            this.setState({
                mathScore: 500
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 28) {
            this.setState({
                mathScore: 500
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 29) {
            this.setState({
                mathScore: 510
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 30) {
            this.setState({
                mathScore: 520
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 31) {
            this.setState({
                mathScore: 520
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 32) {
            this.setState({
                mathScore: 530
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 33) {
            this.setState({
                mathScore: 540
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 34) {
            this.setState({
                mathScore: 540
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 35) {
            this.setState({
                mathScore: 550
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 36) {
            this.setState({
                mathScore: 560
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 37) {
            this.setState({
                mathScore: 570
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 38) {
            this.setState({
                mathScore: 580
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 39) {
            this.setState({
                mathScore: 580
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 40) {
            this.setState({
                mathScore: 590
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 41) {
            this.setState({
                mathScore: 600
            })
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 42) {
            this.setState({
                mathScore: 610
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 43) {
            this.setState({
                mathScore: 610
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 44) {
            this.setState({
                mathScore: 620
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 45) {
            this.setState({
                mathScore: 630
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 46) {
            this.setState({
                mathScore: 640
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 47) {
            this.setState({
                mathScore: 650
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 48) {
            this.setState({
                mathScore: 660
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 49) {
            this.setState({
                mathScore: 670
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 50) {
            this.setState({
                mathScore: 680
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 51) {
            this.setState({
                mathScore: 690
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 52) {
            this.setState({
                mathScore: 700
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 53) {
            this.setState({
                mathScore: 710
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 54) {
            this.setState({
                mathScore: 730
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 55) {
            this.setState({
                mathScore: 750
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 56) {
            this.setState({
                mathScore: 770
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 57) {
            this.setState({
                mathScore: 790
            }) 
        }
        else if  ((correctmathWithCal + correctmathNoCal) === 58) {
            this.setState({
                mathScore: 800
            }) 
        }
        this.setState((state) => ({
            isTestSubmitted: true,
            verbal: state.readingScore + state.writingScore, 
            total: state.readingScore + state.writingScore + state.mathScore
        }))
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

        let allQuestions = [];
            sections.map((section) => {
                allQuestions = [...allQuestions, ...section.questions]; 
            })

        return (numberOfAnsweredQuestions * 100) / allQuestions.length;
    }

    NotAllQuestionsAnswered() {
        /*
         * Check if one of the questions of the current section is not answered
         */ 
        const {subjects} = this.state;
        return subjects.some((subject) => subject.sections.some((section) => section.questions.map((question) => question.selectedChoice === '' ))); 
    }  

    IsNotTheFirstPage() {
        const {currentSection} = this.state;
        return ((currentSection !== 0))
    }
    IsTheFirstSectionType() {
        const {sections, currentSection} = this.state; 

        const section = sections[currentSection];
        return (section.IsFirstSectionType === true); 
    }
    moveToAnotherSubject() {
        const {sections,currentSection } = this.state;
        let section1 = sections[currentSection];
        let section2 = sections[currentSection + 1];

        if (!section2) {
            this.setState({
                isTestSubmitted: true,
            });
            return;
        }
        
        let nextSection = currentSection;
        while (section1.sectionType === section2.sectionType) {
            nextSection = nextSection + 1;
            section1 = sections[nextSection];
            section2 = sections[nextSection + 1];
        }

        this.setState({
            currentSection: nextSection + 1,
        })
    }
    render() {
        const {
            isTestSubmitted,
            verbal,
            readingScore,
            writingScore,
            mathScore, 
            total,
            currentSection, sections, 
            correctReading, 
            correctWriting, 
            correctmathWithCal, 
            correctmathNoCal
        } = this.state;

        /*
         * 
         * check if the current section is the last one
         * 
         */

       if(isTestSubmitted) {
            
            return (
                <div className="appContainer">
                    <h1>results</h1>
                    <h2>Reading Score: {readingScore}</h2>
                    <h2>Writing and Language Score: {writingScore}</h2>
                    <h2>verbal Score: {verbal}</h2>
                    <h2>Math Score: {mathScore}</h2>
                    <h2>total Score: {total} </h2>
                    <h2>Number of correct Reading section: {correctReading} (out of 52)</h2>
                    <h2>Number of correct Writing and Language section: {correctWriting} (out of 44)</h2>
                    <h2>Number of correct Math (No Calculator) section: {correctmathNoCal} (out of 20)</h2>
                    <h2>Number of correct Math (With Calculator) section: {correctmathWithCal} (out of 38)</h2>

                    <button className="btn btn-dark"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Go Back To Review</button>
                </div>
            );
        }

        console.log(this.state.correctReading);
        console.log(this.state.correctWriting);
        console.log(this.state.correctmathNoCal);
        console.log(this.state.correctmathWithCal);
        const currentSectionObject = sections[currentSection];

        return <div className="appContainer">
            <div className= "header">
                <Timer 
                    initialTimer={currentSectionObject.defaultTimer} 
                    sectionType={currentSectionObject.sectionType}
                    onTimeEnd={() => this.moveToAnotherSubject()}
                />            
            </div>
            <div className="testContainer">

                {this.addPassageOrNot()}

                <div className="questionSection">
                    <div className="article2">
                    {this.renderAllQuestions()}
                    {!this.IsTheFirstSectionType() ?  <button className="btn btn-dark"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Back</button> : '' }
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
                    <Progress animated color="warning" value={this.calculatePercentageOfAnsweredQuestions()} />
                </div>
            </div>
        </div>
        
    }
}