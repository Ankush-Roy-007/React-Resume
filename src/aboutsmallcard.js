function Card(propss){
    return(
            <div className="div_seperate_resume_border">
                        <div className="resume_circle_border">                            
                        </div>
                        <div className="div_seperate_resume_bordera"></div>
                        <div className="margin_left_seperate">
                        <p className="degree_name_resume">{propss.array.degree_name}</p>
                    <p className="degree_year_resume">{propss.array.degree_year}</p>
                    <p><span className="bold_college_name_resume">{propss.array.degree_institution} :- </span><span className="college_name_resume"> {propss.array.degree_organization}</span> </p>
                    <p><span className="bold_college_name_resume">{propss.array.degree_affiliated} :- </span><span className="college_name_resume"> {propss.array.degree_affiliated_name}</span> </p>
                    <p><span className="bold_college_name_resume">{propss.array.degree_cgpa_full} :- </span> <span className="college_name_resume"> {propss.array.degree_cgpa_ans}</span></p>
                        </div>
                   
                    </div>
        
    )
}
export default Card;