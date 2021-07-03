import Heading from "./heading";
import SingleProject from './single_project';
function Project() {
  var project_details = [
    {
      project_heading: "Robotics-Club Website",
      project_content: [
        `I used HTML,CSS,JS,Node.js,Express.js,MongoDB in this project.`,
        `It includes registration form for registration of students for events, automatic e-mail generating feature. ( Whatever changes are made in websites are informed to the admins thorough e-mail ), blogging section and from admins account we can edit or delete blogs, album section and from admins account we can edit or delete photos. `,
        `Two different types of account can e created.( Admin type- Admins[Full access of website],Member type-Members[Limited Access of website] )`,
        `It also includes Approval/Decline feature.( If member uploads something
                    then it first it will send a notification to the admins and if anyone approves
                    then only it will get posted on website).`,
      ],
    },
    {
      project_heading: "Website for Student's Feedback",
      project_content: [
        `This form was made specially for colleges so that they can take
        student'sfeedback.`,
        `I used HTML, CSS, JS,AJAX, PHP, MySQL in this project.`,
        `It include automatic mail sending feature when student successfully
        completes his/her task.`,
      ],
    },
    {
        project_heading: "Racing car using Arduino ",
        project_content: [
          `It was a mechanical bot which was controlled using bluetooth module (HC-05).`,
          `Arduino was used as microcontroller.`,
          `An android app was used to controlled that bot.`,
        ],
      },
      {
        project_heading: "Pick and Place Bot ",
        project_content: [
          `It was completely a mechanical bot made for pickig things from one place and placing it to different position.`,
          `Motors, DPDT switches, motor driver(L293D) and copper wires were used in this project.`,
        ],
      },
      {
        project_heading: "Keyboard Matrix ",
        project_content: [
          `Used arduino as microcontroller.`,
          `Jumper wires and breadboard were used in this project.`,
        ],
      },
      {
        project_heading: "Pillar climbing Bot ",
        project_content: [
          `It was a mechancal bot designed to climb specific type of vertical wall.`,
          `Motors, DPDT switches, motor driver(L293D) and copper wires were used in this project.`,
          `It also had hooking and pick and place mechanism`,
        ],
      },
      {
        project_heading: "Line-tracng Bot ",
        project_content: [
          `This bot follows black line on white surface or the vice-versa.`,
          `Motors, IR sensors array and motor driver (L293D) were used in this project.`,
          `Arduino was used as microcontroller `,
        ],
      },
  ];
  return (
    <div className="project_total_div container">
      <Heading heading="PROJECTS" />
      {project_details.map((detail)=>{
          return(
            <SingleProject props={detail} />
          )
      })}
    </div>
  );
}
export default Project;
