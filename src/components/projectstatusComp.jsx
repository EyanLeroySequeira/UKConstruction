
import '../ResidentialProject/Resident.css'

const projectstatusComp = () => {

    const projectDetails = [
        { title: "Location", value: "Madikeri, Dakshina Kannada" },
        { title: "Status", value: "Completed" },
        { title: "Size", value: "15 Lakh Plus Sqrt" },
        { title: "Type", value: "All Type" }
    ];


    return (
        <div className='projectStatus'>
            {projectDetails.map((detail, index) => (
                <div key={index}>
                    <h1 >{detail.title}</h1>
                    <p >{detail.value}</p>
                </div>
            ))}
        </div>
    )

}

export default projectstatusComp;
