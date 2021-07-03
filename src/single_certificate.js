function Certificate(props){
    console.log(props);
    return(
        <div className="row">
                    <div className="col-lg-4 sd">
                        {/* <img src={Certificate_image}/> */}
                    </div>
                    <div className="col-lg-8">
                        <div className="certificated_para">
                            <p>
                              <span className="certificated_dark_text">Course :- </span>  <span className="certificate_normal_text">{props.array.course}</span>
                            </p>
                            <p>
                              <span className="certificated_dark_text">Platform :- </span>  <span className="certificate_normal_text"> {props.array.platform}</span>
                            </p>
                            <p>
                              <span className="certificated_dark_text">Issued Date :-</span>  <span className="certificate_normal_text">{props.array.issued} . No Expiration Date</span>
                            </p>
                            <p>
                              <span className="certificated_dark_text">Credential ID :-</span>  <span className="certificate_normal_text"> {props.array.id}</span>
                            </p>
                            <a href={props.array.url} target="blank">See credential</a>
                        </div>
                    </div>
                </div>
    )
}
export default Certificate;