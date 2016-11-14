//stores the engineering classes computer engineers are required to take for graduation
var engr_classes = [
   {class:"ENGR 1", units:1},{class:"ENGR 1L", units:1},
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
   {class:"CHEM 11", units:5},
   {class:"PHYS 31", units:5},
   {class:"PHYS 32", units:5},
   {class:"PHYS 33", units:5},
   {class:"AMTH 106", units:4},{class:"MATH 22", units:4},/*both classes fulfill same requirement*/
   {class:"AMTH 108", units:4},{class:"MATH 122", units:4},/*both classes fulfill same requirement*/
   {class:"MATH 53", units:4},{class:"MATH 166", units:4},{class:"AMTH 118", units:4},/*all 3 classes fulfill same requirement*/
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
   {core:"Religion 1",
    classes: [{class:"RSOC 7", units:4},{class:"RSOC 9", units:4},{class:"RSOC 10", units:4},{class:"RSOC 12", units:4},{class:"RSOC 19", units:4},{class:"SCTR 11", units:4},{class:"SCTR 15", units:4},{class:"SCTR 19", units:4},{class:"TESP 2", units:4},{class:"TESP 4", units:4}]
   },
   //classes that fulfill religion 2 requirement
   {core:"Religion 2",
    classes: [{class:"ANTH 150", units:4},{class:"ARAB 171", units:4},{class:"CLAS 12A", units:4},{class:"CLAS 63", units:4},{class:"CLAS 65", units:4},{class:"CLAS 67", units:4},{class:"CLAS 68", units:4},{class:"CLAS 69", units:4},{class:"COMM 175A", units:4},{class:"COMM 179A", units:4},{class:"ENGL 161", units:4},{class:"ENGL 162", units:4},{class:"ENGR 143", units:4},{class:"ENVS 84", units:4},{class:"HIST 16", units:4},{class:"HIST 17", units:4},{class:"HIST 103", units:4},{class:"HIST 117", units:4},{class:"HIST 120", units:4},{class:"HIST 126", units:4},{class:"HIST 129", units:4},{class:"HIST 152", units:4},{class:"MUSC 189", units:4},{class:"PHIL 60", units:4},{class:"POLI 139", units:4},{class:"PSYC 193", units:4},{class:"RSOC 27", units:4},{class:"RSOC 33", units:4},{class:"RSOC 38", units:4},{class:"RSOC 46", units:4},{class:"RSOC 51", units:4},{class:"RSOC 54", units:4},{class:"RSOC 64", units:4},{class:"RSOC 67", units:4},{class:"RSOC 81", units:4},{class:"RSOC 85", units:4},{class:"RSOC 86", units:4},{class:"RSOC 87", units:4},{class:"RSOC 88", units:4},{class:"RSOC 90", units:4},{class:"RSOC 91", units:4},{class:"RSOC 96", units:4},{class:"RSOC 99", units:4},{class:"SCTR 26", units:4},{class:"SCTR 27", units:4},{class:"SCTR 28", units:4},{class:"SCTR 30", units:4},{class:"SCTR 33", units:4},{class:"SCTR 35", units:4},{class:"SCTR 39", units:4},{class:"SCTR 45", units:4},{class:"SCTR 48", units:4},{class:"SCTR 58", units:4},{class:"SCTR 65", units:4},{class:"TESP 45", units:4},{class:"TESP 46", units:4},{class:"TESP 50", units:4},{class:"TESP 60", units:4},{class:"TESP 65", units:4},{class:"TESP 71", units:4},{class:"TESP 72", units:4},{class:"TESP 77", units:4},{class:"TESP 79", units:4},{class:"TESP 82", units:4},{class:"TESP 86", units:4},{class:"TESP 88", units:4},{class:"WGST 46", units:4},{class:"WGST 47", units:4},{class:"WGST 48", units:4}]
   },
   //classes that fulfill religion 3 requirement
   {core:"Religion 3",
    classes: [{class:"BIOL 171", units:4},{class:"ELEN 160", units:4},{class:"ENVS 152", units:4},{class:"ETHN 129", units:4},{class:"RSOC 106", units:4},{class:"RSOC 111", units:4},{class:"RSOC 113", units:4},{class:"RSOC 115", units:4},{class:"RSOC 119", units:4},{class:"RSOC 121", units:4},{class:"RSOC 123", units:4},{class:"RSOC 130", units:4},{class:"RSOC 131", units:4},{class:"RSOC 134", units:4},{class:"RSOC 135", units:4},{class:"RSOC 136", units:4},{class:"RSOC 139", units:4},{class:"RSOC 140", units:4},{class:"RSOC 154", units:4},{class:"RSOC 157", units:4},{class:"RSOC 159", units:4},{class:"RSOC 168", units:4},{class:"RSOC 170", units:4},{class:"RSOC 174", units:4},{class:"RSOC 182", units:4},{class:"RSOC 184", units:4},{class:"RSOC 188", units:4},{class:"RSOC 190", units:4},{class:"RSOC 191", units:4},{class:"RSOC 194", units:4},{class:"SCTR 100", units:4},{class:"SCTR 110", units:4},{class:"SCTR 128", units:4},{class:"SCTR 132", units:4},{class:"SCTR 139", units:4},{class:"SCTR 157", units:4},{class:"SCTR 158", units:4},{class:"SCTR 165R", units:4},{class:"SCTR 170", units:4},{class:"SCTR 175", units:4},{class:"TESP 106", units:4},{class:"TESP 108", units:4},{class:"TESP 109", units:4},{class:"TESP 118", units:4},{class:"TESP 119", units:4},{class:"TESP 121", units:4},{class:"TESP 124", units:4},{class:"TESP 131", units:4},{class:"TESP 137", units:4},{class:"TESP 138", units:4},{class:"TESP 143", units:4},{class:"TESP 153", units:4},{class:"TESP 157", units:4},{class:"TESP 159", units:4},{class:"TESP 163", units:4},{class:"TESP 164", units:4},{class:"TESP 165", units:4},{class:"TESP 175", units:4},{class:"TESP 176", units:4},{class:"TESP 183", units:4},{class:"TESP 184", units:4},{class:"TESP 185", units:4},{class:"TESP 187", units:4},{class:"WGST 145", units:4},{class:"WGST 148", units:4},{class:"WGST 149", units:4},{class:"WGST 151", units:4},{class:"WGST 152", units:4}]
   },
   //classes that fulfill ethics requirement
   {core:"Ethics",
    classes: [{class:"ENGR 19", units:4},{class:"MGMT 6", units:4},{class:"PHIL 2", units:4},{class:"PHIL 3A", units:4},{class:"PHIL 4A", units:4},{class:"PHIL 5", units:4},{class:"PHIL 5A", units:4},{class:"PHIL 6", units:4},{class:"PHIL 7", units:4},{class:"PHIL 7B", units:4},{class:"PHIL 8", units:4},{class:"PHIL 9", units:4},{class:"PHIL 10", units:4},{class:"PHIL 111", units:4},{class:"PHIL 113", units:4},{class:"PHIL 115", units:4},{class:"PHIL 116", units:4},{class:"PHIL 121", units:4},{class:"PHIL 122A", units:4},{class:"PHIL 122B", units:4},{class:"PHIL 123", units:4},{class:"PSYC 114", units:4},{class:"PHSC 7", units:4},{class:"TESP 159", units:4},{class:"WGST 58", units:4},{class:"WGST 184", units:4},{class:"WGST 189", units:4}]
   },
   //classes that fulfill diversity requirement
   {core:"Diversity",
    classes: [{class:"ANTH 146", units:4},{class:"ANTH 148", units:4},{class:"ANTH 149", units:4},{class:"ANTH 157", units:4},{class:"ANTH 170", units:4},{class:"ARTH 140", units:4},{class:"ARTH 143", units:4},{class:"ARTH 146", units:4},{class:"ARTH 185", units:4},{class:"COMM 107A", units:4},{class:"COMM 121A", units:4},{class:"COMM 164A", units:4},{class:"COMM 168A", units:4},{class:"DANC 62", units:4},{class:"DANC 162", units:4},{class:"DANC 66", units:4},{class:"DANC 166", units:4},{class:"ECON 166", units:4},{class:"ENGL 31G", units:4},{class:"ENGL 35", units:4},{class:"ENGL 35G", units:4},{class:"ENGL 36", units:4},{class:"ENGL 38", units:4},{class:"ENGL 39", units:4},{class:"ENGL 67", units:4},{class:"ENGL 68", units:4},{class:"ENGL 69", units:4},{class:"ENGL 79G", units:4},{class:"ENGL 122", units:4},{class:"ENGL 122AW", units:4},{class:"ENGL 125", units:4},{class:"ENGL 129", units:4},{class:"ENGL 132G", units:4},{class:"ENGL 135", units:4},{class:"ENGL 136", units:4},{class:"ENGL 138", units:4},{class:"ENGL 152", units:4},{class:"ETHN 5", units:4},{class:"ETHN 10", units:4},{class:"ETHN 20", units:4},{class:"ETHN 30", units:4},{class:"ETHN 35", units:4},{class:"ETHN 36", units:4},{class:"ETHN 40", units:4},{class:"ETHN 41", units:4},{class:"ETHN 50", units:4},{class:"ETHN 51", units:4},{class:"ETHN 65", units:4},{class:"ETHN 70", units:4},{class:"ETHN 95", units:4},{class:"ETHN 96", units:4},{class:"ETHN 120", units:4},{class:"ETHN 123", units:4},{class:"ETHN 125", units:4},{class:"ETHN 130", units:4},{class:"ETHN 132", units:4},{class:"ETHN 134", units:4},{class:"ETHN 135", units:4},{class:"ETHN 139", units:4},{class:"ETHN 141", units:4},{class:"ETHN 142", units:4},{class:"ETHN 144", units:4},{class:"ETHN 145", units:4},{class:"ETHN 149", units:4},{class:"ETHN 152", units:4},{class:"ETHN 153", units:4},{class:"ETHN 154", units:4},{class:"ETHN 155", units:4},{class:"ETHN 156", units:4},{class:"ETHN 157", units:4},{class:"ETHN 160", units:4},{class:"ETHN 161", units:4},{class:"ETHN 162", units:4},{class:"ETHN 163", units:4},{class:"ETHN 165", units:4},{class:"ETHN 178", units:4},{class:"HIST 84", units:4},{class:"HIST 153", units:4},{class:"HIST 156A", units:4},{class:"HIST 156B", units:4},{class:"HIST 158", units:4},{class:"HIST 172", units:4},{class:"HIST 174", units:4},{class:"HIST 177", units:4},{class:"HIST 178", units:4},{class:"HIST 180", units:4},{class:"HIST 181", units:4},{class:"HIST 182", units:4},{class:"HIST 183", units:4},{class:"HIST 185", units:4},{class:"HIST 187", units:4},{class:"HIST 188S", units:4},{class:"ITAL 185", units:4},{class:"LEAD 10", units:4},{class:"LBST 106", units:4},{class:"MUSC 20", units:4},{class:"MUSC 132", units:4},{class:"MUSC 134", units:4},{class:"MUSC 196", units:4},{class:"PHIL 70", units:4},{class:"PHIL 156", units:4},{class:"POLI 134", units:4},{class:"POLI 153", units:4},{class:"POLI 154", units:4},{class:"POLI 171", units:4},{class:"POLI 195DW", units:4},{class:"PSYC 156", units:4},{class:"PSYC 182", units:4},{class:"PSYC 189", units:4},{class:"PSYC 196", units:4},{class:"SOCI 33", units:4},{class:"SOCI 150", units:4},{class:"SOCI 153", units:4},{class:"SOCI 162", units:4},{class:"SOCI 175", units:4},{class:"SOCI 180", units:4},{class:"SPAN 176", units:4},{class:"THTR 65", units:4},{class:"THTR 151", units:4},{class:"THTR 161", units:4},{class:"TESP 65", units:4},{class:"WGST 14", units:4},{class:"WGST 15", units:4},{class:"WGST 34", units:4},{class:"WGST 50", units:4},{class:"WGST 51", units:4},{class:"WGST 56", units:4},{class:"WGST 57", units:4},{class:"WGST 101", units:4},{class:"WGST 110", units:4},{class:"WGST 111", units:4},{class:"WGST 112", units:4},{class:"WGST 113", units:4},{class:"WGST 114", units:4},{class:"WGST 115", units:4},{class:"WGST 116", units:4},{class:"WGST 117", units:4},{class:"WGST 118", units:4},{class:"WGST 134", units:4},{class:"WGST 134AW", units:4},{class:"WGST 136", units:4},{class:"WGST 138", units:4},{class:"WGST 144", units:4},{class:"WGST 155", units:4},{class:"WGST 156", units:4},{class:"WGST 163", units:4},{class:"WGST 164", units:4},{class:"WGST 173", units:4},{class:"WGST 180", units:4},{class:"WGST 188", units:4}]
   },
   //classes that fulfill social science requirement
   {core:"Social Science",
    classes: [{class:"ANTH 2", units:4},{class:"ANTH 3", units:4},{class:"ANTH 196", units:4},{class:"CLAS 172", units:4},{class:"ECON 1", units:4},{class:"ECON 1E", units:4},{class:"ECON 2", units:4},{class:"ECON 129BF", units:4},{class:"HIST 107", units:4},{class:"LBST 100", units:4},{class:"POLI 2", units:4},{class:"POLI 40", units:4},{class:"POLI 99", units:4},{class:"POLI 134", units:4},{class:"POLI 140", units:4},{class:"POLI 143", units:4},{class:"POLI 145", units:4},{class:"PSYC 1", units:4},{class:"PSYC 2", units:4},{class:"SOCI 1", units:4}]
   },
   //classes that fulfill ELSJ requirement
   {core:"ELSJ",
    classes: [{class:"ANTH 3", units:4},{class:"BIOL 188", units:4},{class:"BUSN 151B", units:4},{class:"BUSN 188", units:4},{class:"BUSN 189", units:4},{class:"BUSN 195EL", units:4},{class:"COMM 40EL", units:4},{class:"COMM 107A", units:4},{class:"COMM 141B", units:4},{class:"DANC 59", units:4},{class:"DANC 159", units:4},{class:"DANC 69", units:4},{class:"DANC 169", units:4},{class:"DANC 189", units:4},{class:"ENGL 106EL", units:4},{class:"ENGL 111", units:4},{class:"ENGL 145EL", units:4},{class:"ENGL 150EL", units:4},{class:"ENGL 176", units:4},{class:"ENGR 111", units:4},{class:"ENVS 131", units:4},{class:"ENVS 155", units:4},{class:"ETHN 60", units:4},{class:"ETHN 160", units:4},{class:"ETHN 161", units:4},{class:"ELSJ 22", units:4},{class:"ELSJ 23", units:4},{class:"ELSJ 30", units:4},{class:"ELSJ 50", units:4},{class:"ELSJ 135", units:4},{class:"ELSJ 197", units:4},{class:"ELSJ 198", units:4},{class:"ELSJ 199", units:4},{class:"INTL 139", units:4},{class:"INTL 139BF", units:4},{class:"LEAD 10", units:4},{class:"LBST 106", units:4},{class:"MGMT 8", units:4},{class:"PHIL 5A", units:4},{class:"PHIL 70", units:4},{class:"POLI 3", units:4},{class:"POLI 158", units:4},{class:"POLI 198EL", units:4},{class:"PSYC 113EL", units:4},{class:"PSYC 114EL", units:4},{class:"PSYC 115EL", units:4},{class:"PSYC 117EL", units:4},{class:"PSYC 185EL", units:4},{class:"PSYC 190EL", units:4},{class:"PSYC 196", units:4},{class:"PHSC 31", units:4},{class:"PHSC 131", units:4},{class:"PHSC 170", units:4},{class:"RSOC 99", units:4},{class:"RSOC 135", units:4},{class:"SCTR 128", units:4},{class:"SOCI 30", units:4},{class:"SOCI 148", units:4},{class:"SOCI 165", units:4},{class:"SPAN 21EL", units:4},{class:"SPAN 22EL", units:4},{class:"SPAN 23EL", units:4},{class:"ARTS 151", units:4},{class:"TESP 43", units:4},{class:"TESP 45", units:4},{class:"TESP 46", units:4},{class:"TESP 129", units:4},{class:"TESP 157", units:4},{class:"TESP 158", units:4},{class:"TESP 183", units:4}]
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
    classes: [{class:"ANTH 50", units:4},{class:"ANTH 152", units:4},{class:"ANTH 156", units:4},{class:"ANTH 159", units:4},{class:"ANTH 172", units:4},{class:"ANTH 181", units:4},{class:"ANTH 184", units:4},{class:"ANTH 185", units:4},{class:"ANTH 186", units:4},{class:"ANTH 187", units:4},{class:"ANTH 188", units:4},{class:"ARAB 137", units:4},{class:"ARTH 24", units:4},{class:"ARTH 25", units:4},{class:"ARTH 26", units:4},{class:"ARTH 27", units:4},{class:"ARTH 152", units:4},{class:"ARTH 160", units:4},{class:"ARTH 161", units:4},{class:"ARTH 162", units:4},{class:"ARTH 163", units:4},{class:"ARTH 164", units:4},{class:"ARTH 170", units:4},{class:"CLAS 60", units:4},{class:"COMM 105A", units:4},{class:"COMM 183A", units:4},{class:"COMM 184A", units:4},{class:"COMM 187A", units:4},{class:"COMM 188A", units:4},{class:"COMM 189A", units:4},{class:"DANC 68", units:4},{class:"ECON 134", units:4},{class:"ENGR 177", units:4},{class:"ENGL 56", units:4},{class:"ENGL 66", units:4},{class:"ENGL 31A", units:4},{class:"ENGL 120", units:4},{class:"ENGL 153", units:4},{class:"ENGL 156", units:4},{class:"ENGL 157", units:4},{class:"FREN 111", units:4},{class:"FREN 112", units:4},{class:"FREN 113", units:4},{class:"FREN 114", units:4},{class:"FREN 174", units:4},{class:"HIST 64", units:4},{class:"HIST 91", units:4},{class:"HIST 92", units:4},{class:"HIST 95", units:4},{class:"HIST 102S", units:4},{class:"HIST 104", units:4},{class:"HIST 107", units:4},{class:"HIST 112", units:4},{class:"HIST 116S", units:4},{class:"HIST 122", units:4},{class:"HIST 136", units:4},{class:"HIST 137", units:4},{class:"HIST 140S", units:4},{class:"HIST 141", units:4},{class:"HIST 142", units:4},{class:"HIST 143S", units:4},{class:"HIST 144S", units:4},{class:"HIST 145", units:4},{class:"HIST 146A", units:4},{class:"HIST 146B", units:4},{class:"HIST 147A", units:4},{class:"HIST 147B", units:4},{class:"HIST 150", units:4},{class:"HIST 151", units:4},{class:"HIST 152", units:4},{class:"HIST 154B", units:4},{class:"HIST 157", units:4},{class:"HIST 161", units:4},{class:"HIST 162", units:4},{class:"HIST 163", units:4},{class:"HIST 164S", units:4},{class:"HIST 166", units:4},{class:"MGMT 80", units:4},{class:"MUSC 130", units:4},{class:"MUSC 136", units:4},{class:"POLI 2", units:4},{class:"POLI 3", units:4},{class:"POLI 50", units:4},{class:"POLI 126", units:4},{class:"POLI 136", units:4},{class:"POLI 137", units:4},{class:"POLI 140", units:4},{class:"POLI 145", units:4},{class:"POLI 148", units:4},{class:"RSOC 136", units:4},{class:"SOCI 134", units:4},{class:"SOCI 135", units:4},{class:"SOCI 138", units:4},{class:"SPAN 112", units:4},{class:"SPAN 137", units:4},{class:"SPAN 147", units:4},{class:"SPAN 149", units:4},{class:"WGST 104", units:4},{class:"WGST 120", units:4},{class:"WGST 122", units:4},{class:"WGST 123", units:4},{class:"WGST 124", units:4},{class:"WGST 125", units:4},{class:"WGST 126", units:4},{class:"WGST 128", units:4},{class:"WGST 172", units:4},{class:"WGST 175", units:4}]
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
