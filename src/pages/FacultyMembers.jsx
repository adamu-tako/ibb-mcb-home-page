import fallback from "../assets/images/fallback.png";
import { facultyMembers } from "../assets/faculty";
let mead = false;

const FacultyMembers = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly mt-5 ml-4 sm:ml-14 gap-5 w-[90vw]">
      {facultyMembers?.map((member) => (
        <>
          <div class="max-w-[20rem] sm:max-w-[19rem] bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              {member.image !== mead ? (
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src={member?.image}
                  alt={member?.name}
                />
              ) : (
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src={fallback}
                  alt="faculty member photo"
                />
              )}
            </div>
            <div class="text-center">
              <p class="text-xl text-white font-bold mb-2">{member?.name}</p>
              <p class="text-base text-gray-400 font-normal">
                {member?.specialization}
              </p>
              <p class="text-base text-gray-400 font-normal">{member?.role}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FacultyMembers;
