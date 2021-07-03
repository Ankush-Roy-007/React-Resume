import Heading from "./heading";
import Card from "./aboutsmallcard";
import "./index.css";
import SkillBar from "./skill_bar";
import Cardprofession from "./cardresumeprofession.js";
function Resume() {
  var pass_array = [
    {
      degree_name: "Bachelor of Engineering",
      degree_year: "2018-2022",
      degree_institution: "College",
      degree_organization: "Army Institute of Technology",
      degree_affiliated: "Affiliated",
      degree_affiliated_name: "Savitribai Phule Pune University",
      degree_cgpa_full: "Cumulative Grade Point Average (CGPA) ",
      degree_cgpa_ans: "8.9",
    },
    {
      degree_name: "Higher Secondary Education (12th)",
      degree_year: " 2016-2017",
      degree_institution: "School",
      degree_organization: "Sir Padampat Singhania School",
      degree_affiliated: "Affiliated",
      degree_affiliated_name: "Central Board of Secondary Education",
      degree_cgpa_full: "Percentage ( % ) ",
      degree_cgpa_ans: "81.6 %",
    },
    {
      degree_name: "Secondary Education (10th)",
      degree_year: " 2014-2015",
      degree_institution: "School",
      degree_organization: "Sir Padampat Singhania School",
      degree_affiliated: "Affiliated",
      degree_affiliated_name: "Central Board of Secondary Education",
      degree_cgpa_full: "Cumulative Grade Point Average (CGPA) ",
      degree_cgpa_ans: "9.8",
    },
  ];

  var profession_array = [
    {
      profession_title_data: "Full-Stack Web Developer",
      organization_title: "Organization",
      organization_data: "Guru Sidhant Puri Producer Limited",
      from_title: "From",
      from_data: "April 2021",
      to_title: "To",
      to_data: "May 2021",
      learned_data: [
        "Worked on 1 major project.",
        "Contributed in few minor projects.",
        "Fixed bugs in few projects",
      ],
    },
    {
      profession_title_data: "Front-End Developer",
      organization_title: "Organization",
      organization_data: "Guru Sidhant Puri Producer Limited",
      from_title: "From",
      from_data: "Novemer 2020",
      to_title: "To",
      to_data: "December 2021",
      learned_data: [
        "Worked on 2 major project.",
        "Contributed in few minor projects.",
        "Fixed bugs in few projects",
      ],
    },
    {
      profession_title_data: "Research & Development",
      organization_title: "Organization",
      organization_data: "FortyTwo Labs",
      from_title: "From",
      from_data: "January 2019",
      to_title: "To",
      to_data: "June 2019",
      learned_data: [
        "Made Keyboard Using Arduino.",
        "Made Line Tracer bot.",
        "Made obstacle detection bot",
        "Learned about few basic, intermediate amd advance concepts",
      ],
    },
  ];

  var skills_array = [
    {
      skill_name: "HTML",
      skill_percentage: "99%",
    },
    {
      skill_name: "CSS",
      skill_percentage: "85%",
    },
    {
      skill_name: "JAVASCRIPT",
      skill_percentage: "65%",
    },
    {
      skill_name: "PHP",
      skill_percentage: "20%",
    },
    {
      skill_name: "BOOTSTRAP",
      skill_percentage: "90%",
    },
    {
      skill_name: "C / C++",
      skill_percentage: "15%",
    },
    {
      skill_name: "SQL",
      skill_percentage: "75%",
    },
    {
      skill_name: "PYTHON PROGRAMMNG",
      skill_percentage: "5%",
    },
    {
      skill_name: "JAVA APPLETS",
      skill_percentage: "5%",
    },
    {
      skill_name: "REACT",
      skill_percentage: "75%",
    },
    {
      skill_name: "NODE.JS",
      skill_percentage: "75%",
    },
    {
      skill_name: "EMBEDDED JAVASCRIPT (EJS)",
      skill_percentage: "90%",
    },
    {
      skill_name: "MONGO DB",
      skill_percentage: "85%",
    },
    {
      skill_name: "EXPRESS.JS",
      skill_percentage: "85%",
    },
    {
      skill_name: "OBJECT ORIENTED PROGRAMMING",
      skill_percentage: "60%",
    },
    {
      skill_name: "DATA-STRUCTURE",
      skill_percentage: "60%",
    },
    {
      skill_name: "WORDPRESS",
      skill_percentage: "50%",
    },
    {
      skill_name: "DBMS",
      skill_percentage: "65%",
    },
  ];

  return (
    <div className="resume_total_div container">
      <Heading heading="QUALIFICATIONS" />
      <div className="row education_experience_row">
        <div className="col-lg-6">
          <p className="resume_perticular_heading">Education</p>
          {pass_array.map((pp) => {
            return <Card array={pp} />;
          })}
        </div>
        <div className="col-lg-6">
          <p className="resume_perticular_heading">Professional Experience</p>
          {profession_array.map((pp) => {
            return <Cardprofession array={pp} />;
          })}
        </div>
      </div>
      <hr />

      <div className="total_div_progressive_bar">
        <Heading heading="TECHNICAL SKILLS" />
        <div className="row skill_total_div_progress_bar">
          {skills_array.map((single_skill) => {
            return <SkillBar props={single_skill} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Resume;
