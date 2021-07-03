function Cardprofession(props){
    console.log(props.array);
    return(
        <div className="div_seperate_resume_border">
                        <div className="resume_circle_border">                            
                        </div>
                        <div className="div_seperate_resume_bordera"></div>
                        <div className="margin_left_seperate">
                        <p className="degree_name_resume">{props.array.profession_title_data}</p>
                       <p><span className="bold_college_name_resume">{props.array.from_title} - {props.array.to_title} :- </span><span className="degree_year_resume">{props.array.from_data} - {props.array.to_data}</span></p> 
                    
                    <p><span className="bold_college_name_resume">{props.array.organization_title} :- </span><span className="college_name_resume"> {props.array.organization_data}</span> </p>
                    {props.array.learned_data.map((single)=>{
                        return(
                        <ul>
                            <li className="college_name_resume">{single}</li>
                        </ul>)
                    })}
                        </div>
                   
                    </div>
    )
}

export default Cardprofession;