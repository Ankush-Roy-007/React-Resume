function Single_project(props){
    return(
        <div className="single_project">
        <ul>
          <li>
            <p className="project_heading">{props.props.project_heading}</p>
            <ul className="project_data">
              {props.props.project_content.map((content)=>{
                return(
                  <li>{content}</li>
                )
              })}
             
            </ul>
          </li>
        </ul>
        <hr className="hr_project" />
      </div>
    )
}
export default Single_project;