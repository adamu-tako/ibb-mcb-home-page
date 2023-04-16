import fallback from "../assets/images/fallback.png";
import { facultyMembers } from "../assets/faculty";
let mead = false;

const FacultyMembers = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly mt-5 ml-4 sm:ml-14 gap-5 w-[90vw]">
      {facultyMembers?.map((member) => (
        <div className="max-w-[13rem] sm:max-w-[19rem] mt-[5]">
          {member.image !== mead ? (
            <img src={member?.image} alt="faculty member photo" />
          ) : (
            <img src={fallback} alt="faculty member photo" />
          )}
          <p>
            <span className="font-semibold">Name:</span> {member?.name}
          </p>
          <p>
            <span className="font-semibold">Area of Specialization: </span>
            {member?.specialization}
          </p>
          <p>
            <span className="font-semibold">Position:</span> {member?.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FacultyMembers;
