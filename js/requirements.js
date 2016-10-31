//stores the engineering classes computer engineers are required to take for graduation
var engr_classes = [
   {class:"ENGR 1", units:1},
   {class:"ELEN 50", units:4},{class:"ELEN 50L", units:1},
   {class:"ELEN 153", units:4},{class:"ELEN 153L", units:1},
   {class:"COEN 10", units:4},{class:"COEN 10L", units:1},
   {class:"COEN 11", units:4},{class:"COEN 11L", units:1},
   {class:"COEN 12", units:4},{class:"COEN 12L", units:1},
   {class:"COEN 19", units:4},
   {class:"COEN 20", units:4},{class:"COEN 20L", units:1},
   {class:"COEN 21", units:4},{class:"COEN 21L", units:1},
   {class:"COEN 70", units:4},{class:"COEN 70L", units:1},
   {class:"COEN 122", units:4},{class:"COEN 122L", units:1},
   {class:"COEN 146", units:4},{class:"COEN 146L", units:1},
   {class:"COEN 171", units:4},
   {class:"COEN 174", units:4},{class:"COEN 174L", units:1},
   {class:"COEN 175", units:4},{class:"COEN 175L", units:1},
   {class:"COEN 177", units:4},{class:"COEN 177L", units:1},
   {class:"COEN 179", units:4},
   {class:"COEN 194", units:2},
   {class:"COEN 195", units:2},
   {class:"COEN 196", units:2},
   {class:"ENGL 181", units:4}
   //also need to add 3 upper div coen elective classes as well

];

//stores the math classes computer engineers are required to take for graduation
var math_classes = [
   {class:"MATH 11", units:4},
   {class:"MATH 12", units:4},
   {class:"MATH 13", units:4},
   {class:"MATH 14", units:4},
   {class:"AMTH 106", units:4},{class:"MATH 22", units:4},/*both classes fulfill same requirement*/
   {class:"AMTH 108", units:4},{class:"MATH 122", units:4},/*both classes fulfill same requirement*/
   {class:"MATH 53", units:4},{class:"MATH 166", units:4},{class:"AMTH 118", units:4},/*all 3 classes fulfill same requirement*/
   {class:"CHEM 11", units:4},{class:"CHEM 11L", units:1},
   {class:"PHYS 31", units:4},{class:"PHYS 31L", units:1},
   {class:"PHYS 32", units:4},{class:"PHYS 32L", units:1},
   {class:"PHYS 33", units:4},{class:"PHYS 33L", units:1}
];

//stores the core classes computer engineers are required to take for graduation
var core_classes = [
  /* Religion, Theology & culture 1,2 & 3
   * Ethics
   * Diversity: US Perspectives
   * Social Science
   * Experiential Learning for Social Justice (ELSJ)
   * Cultures & Ideas 1, 2 & 3
   * Critical Thinking & Writing 1 & 2
   * Pathways - 12 units for desired pathway
   */

    //classes that fulfill religion 1 requirement
   {core:"Religion1",
    classes: [{class:"TESP 2", units:4},{class:"TESP 4", units:4},{class:"RSOC 9H", units:4},{class:"RSOC 9", units:4},{class:"RSOC 10", units:4},{class:"RSOC 12", units:4},{class:"SCTR 19", units:4},{class:"SCTR 19", units:4}]
   },
   //classes that fulfill religion 2 requirement
   {core:"Religion2",
    classes: [{class:"SCTR 26", units:4},{class:"RSOC 27", units:4},{class:"RSOC 33", units:4},{class:"RSOC 38", units:4},{class:"TESP 46", units:4},{class:"WGST 46", units:4},{class:"WGST 48", units:4},{class:"SCTR 48", units:4},{class:"RSOC 51", units:4},{class:"CLAS 65", units:4},{class:"TESP 65", units:4},{class:"TESP 71", units:4},{class:"TESP 79", units:4},{class:"TESP 88", units:4},{class:"POLI 139", units:4},{class:"ANTH 150", units:4},{class:"ENGL 161", units:4},{class:"ARAB 171", units:4},{class:"MUSC 189", units:4}]
   },
   //classes that fulfill religion 3 requirement
   {core:"Religion3",
    classes: [{class:"RSOC 119", units:4},{class:"TESP 119", units:4},{class:"RSOC 121", units:4},{class:"TESP 124", units:4},{class:"RSOC 135", units:4},{class:"RSOC 140", units:4},{class:"RSOC 154", units:4},{class:"TESP 157", units:4},{class:"TESP 164", units:4},{class:"TESP 165", units:4},{class:"RSOC 170", units:4},{class:"SCTR 175R", units:4},{class:"TESP 176", units:4},{class:"TESP 183", units:4},{class:"TESP 184", units:4},{class:"RSOC 188", units:4}]
   },
   //classes that fulfill ethics requirement
   {core:"Ethics",
    classes: [{class:"ENGR 19", units:4},{class:"MGMT 6", units:4},{class:"MGMT 6H", units:4},{class:"PHIL 2", units:4},{class:"PHIL 3H", units:4},{class:"PHIL 4B", units:4},{class:"PHIL 5", units:4},{class:"PHIL 6", units:4},{class:"PHIL 9", units:4},{class:"PHIL 111", units:4},{class:"PHIL 122B", units:4},{class:"PHSC 7", units:4}]
   },
   //classes that fulfill diversity requirement
   {core:"Diversity",
    classes: [{class:"COMM 121A", units:4},{class:"DANC 62", units:4},{class:"DANC 162", units:4},{class:"ENGL 35", units:4},{class:"ENGL 122AW", units:4},{class:"ENGL 129", units:4},{class:"ENGL 138", units:4},{class:"ETHN 5", units:4},{class:"ETHN 20", units:4},{class:"ETHN 30", units:4},{class:"ETHN 36", units:4},{class:"ETHN 120", units:4},{class:"ETHN 144", units:4},{class:"ETHN 145", units:4},{class:"ETHN 164", units:4},{class:"ETHN 165", units:4},{class:"ETHN 167", units:4},{class:"HIST 174", units:4},{class:"HIST 188S", units:4},{class:"ITAL 185", units:4},{class:"LBST 106", units:4},{class:"LEAD 10", units:4},{class:"MUSC 134", units:4},{class:"MUSC 196", units:4},{class:"POLI 153", units:4},{class:"PSYC 196", units:4},{class:"SOCI 33", units:4},{class:"SOCI 150", units:4},{class:"SOCI 175", units:4},{class:"TESP 65", units:4},{class:"THTR 151", units:4},{class:"THTR 161", units:4},{class:"WGST 50", units:4},{class:"WGST 134AW", units:4}]
   },
   //classes that fulfill social science requirement
   {core:"SocialScience",
    classes: [{class:"ANTH 2", units:4},{class:"ANTH 3", units:4},{class:"ECON 1", units:4},{class:"ECON 2", units:4},{class:"POLI 2", units:4},{class:"POLI 99", units:4},{class:"PSYC 1", units:4},{class:"PSYC 2", units:4},{class:"PSYC 2H", units:4},{class:"SOCI 1", units:4}]
   },
   //classes that fulfill ELSJ requirement
   {core:"ELSJ",
    classes: [{class:"ANTH 3", units:4},{class:"LEAD 10", units:4},{class:"LEAD 17", units:4},{class:"SPAN 22EL", units:4},{class:"SOCI 30", units:4},{class:"TESP 46", units:4},{class:"DANC 59", units:4},{class:"LBST 106", units:4},{class:"ENGR 111", units:4},{class:"PSYC 115EL", units:4},{class:"RSOC 135", units:4},{class:"ARTS 151", units:4},{class:"ENVS 155", units:4},{class:"TESP 157", units:4},{class:"DANC 159", units:4},{class:"SOCI 165", units:4},{class:"ENGL 176", units:4},{class:"TESP 183", units:4},{class:"PSYC 185EL", units:4},{class:"BUSN 195EL", units:4},{class:"PSYC 196", units:4}]
   },
   //classes that fulfill C&I 1 requirement
   {core:"CI1",
    classes: [{class:"CLAS 11A", units:4},{class:"HIST 11A", units:4},{class:"PHIL 11A", units:4},{class:"ENGL 11A", units:4},{class:"ARTH 11A", units:4},{class:"ANTH 11A", units:4},{class:"GERM 11A", units:4},{class:"HIST 11H", units:4},{class:"PHIL 11H", units:4},{class:"SOCI 11A", units:4},{class:"THTR 11A", units:4}]
   },
   //classes that fulfill C&I 2 requirement
   {core:"CI2",
    classes: [{class:"ENVS 12A", units:4},{class:"HIST 12A", units:4},{class:"MUSC 12A", units:4},{class:"ENGL 12A", units:4},{class:"ANTH 12A", units:4},{class:"ARTH 12A", units:4},{class:"ARTH 12H", units:4},{class:"CLAS 12A", units:4},{class:"HIST 12H", units:4},{class:"ITAL 12A", units:4},{class:"PHIL 12A", units:4},{class:"SOCI 12A", units:4},{class:"THTR 12A", units:4},{class:"WGST 12A", units:4}]
   },
   //classes that fulfill C&I 3 requirement
   {core:"CI3",
    classes: [{class:"POLI 2", units:4},{class:"POLI 50", units:4},{class:"ARTH 26", units:4},{class:"ANTH 50", units:4},{class:"ENVS 50", units:4},{class:"MGMT 80", units:4},{class:"HIST 91", units:4},{class:"POLI 126", units:4},{class:"SOCI 135", units:4},{class:"HIST 136", units:4},{class:"MUSC 136", units:4},{class:"HIST 147A", units:4},{class:"HIST 151", units:4},{class:"ARTH 152", units:4},{class:"ENGL 156", units:4},{class:"HIST 166", units:4},{class:"WGST 172", units:4},{class:"FREN 174", units:4},{class:"ANTH 186", units:4},{class:"COMM 187A", units:4},{class:"COMM 189A", units:4},]
   },
   //classes that fulfill CTW 1 requirement
   {core:"CTW1",
    classes: [{class:"ENGL 1A", units:4},{class:"PHIL 1A", units:4},{class:"WGST 1A", units:4}]
   },
   //classes that fulfill CTW 2 requirement
   {core:"CTW2",
    classes: [{class:"ENGL 2A", units:4},{class:"PHIL 2A", units:4},{class:"WGST 2A", units:4}]
   }
];

var clas_codes = [
    "AMTH", "COEN", "MATH", "PHYS", "CHEM"
];