function SkillBar(props) {
  return (
    <div className="col-lg-6">
      <div className="top_bottom_margin_progressbar">
        <span className="skill_heading">{props.props.skill_name}</span>
        <span className="skill_percentage">{props.props.skill_percentage}</span>
        <div className="progress_bar_grey">
          <div className="progress_bar_green" style={{width:props.props.skill_percentage}}></div>
        </div>
      </div>
    </div>
  );
}
export default SkillBar;
