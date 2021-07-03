 import Certificate_image from './pictures/certificate.png';
 import Certificates from './single_certificate';
 import Heading from './heading';
function Certificate(){
    var certificate_data=[
        {
            course:"Introduction to Structured Query Language (SQL)",
            platform:"Coursera",
            issued:"February 2021",
            id:"35RLJHJRZDCS",
            url:"https://www.coursera.org/account/accomplishments/certificate/35RLJHJRZDCS"
        },
        {
            course:"Building Web Applications in PHP",
            platform:"Coursera",
            issued:"July 2020",
            id:"YZG646BP5CJT",
            url:"https://www.coursera.org/account/accomplishments/certificate/YZG646BP5CJT"
        },
        {
            course:"Java (Basics)",
            platform:"HackerRank",
            issued:"June 2020",
            id:"E9018BAF5882",
            url:"https://www.hackerrank.com/certificates/e9018baf5882"
        },
        {
            course:"Python Data Structures",
            platform:"Coursera",
            issued:"June 2020",
            id:" GFS3X7XS23FW",
            url:"https://www.coursera.org/account/accomplishments/certificate/GFS3X7XS23FW"
        },
        {
            course:"JPMorgan Chase & Co. Software Engineering Virtual Experience ",
            platform:"InsideSherpa",
            issued:"May 2020",
            id:" j29aqjMj3Ph7Hkhdv	",
            url:"https://drive.google.com/open?id=1QmlT1_YLh7wOv82Q3G1bPhMCE0aPv5Vc"
        },
        {
            course:"Java Programming: Arrays, Lists, and Structured Data",
            platform:"Coursera",
            issued:"May 2020",
            id:" ZSG4A3ZDTQQU",
            url:"https://www.coursera.org/account/accomplishments/certificate/ZSG4A3ZDTQQU"
        },
        {
            course:"Programming for Everybody (Getting Started with Python)",
            platform:"Coursera",
            issued:"May 2020",
            id:" R2NQ97PKAB4W",
            url:"https://www.coursera.org/account/accomplishments/certificate/R2NQ97PKAB4W"
        },
        {
            course:"The Fundamentals of Digital Marketing",
            platform:"Google",
            issued:"April 2020",
            id:" SHJ 7GX 744",
            url:"https://drive.google.com/file/d/1HtlGR0BkhVWnyhq36zSMzqmMJ_TtOZLs/view?usp=drivesdk"
        },
        {
            course:" Programming Foundations with JavaScript, HTML and CSS",
            platform:"Coursera",
            issued:"March 2020",
            id:" FSZC8Q3YEC8R",
            url:"https://www.coursera.org/account/accomplishments/certificate/FSZC8Q3YEC8R"
        },
        {
            course:"Java Programming: Solving Problems with Software",
            platform:"Coursera",
            issued:"March 2020",
            id:" M694V9XHZWW4",
            url:"https://www.coursera.org/account/accomplishments/certificate/M694V9XHZWW4"
        },
        {
            course:"Communication Skills",
            platform:"TCS iON LifeLong Learning",
            issued:"April 2020",
            id:" 91306-6781566-1016",
            url:"https://drive.google.com/file/d/13rhls2yR6yuHnvMtYzXt8zlKpJhSLeqh/view?usp=sharing"
        },
    ]

    return(
        <div className="certificate_total_div">
            <Heading heading="CERTIFICATES"/>
            <div className="container container_individual_certificate">
                {certificate_data.map((single)=>{
                    return(<Certificates array={single}/>)
                })}
            </div>
        </div>
    )
}
export default Certificate;