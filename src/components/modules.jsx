import home_image from "../assets/home_image.png";
import tv from "../assets/tv.png";

function Module() {
  return (
    <div className="flex h-[100vh]">
      {/* Left Side with Blue Background */}
      <div className="bg-figmaBlue w-[30%] h-full relative">
        <div className="absolute bottom-0">
          <img
            src={tv}
            alt="School Toolkit"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-[60%] ml-8 flex items-center justify-center flex-col">
        <h3 className="text-green-600 font-semibold text-sm mb-4">MODULES</h3>
        <h2 className="text-gray-900 text-3xl font-bold mb-6">
          Admin & Principals Module
        </h2>
        <p className="text-gray-600 mb-6">
          This module contains all details of the school regarding Students,
          teachers, parents, Grades, promotions, academic sessions, and results.
        </p>

        {/* Feature List */}
        <ul className="space-y-8">
          <li className="flex items-start">
            <span className="text-green-600 font-bold text-2xl mr-4">1</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                Admission Processing
              </h4>
              <p className="text-gray-600">
                The admin is responsible for admitting students, therefore the
                admin is provided with a means of creating opportunities for
                admissions and managing the steps required for admitting
                students.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 font-bold text-2xl mr-4">2</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                Data Creation & Management
              </h4>
              <p className="text-gray-600">
                All information and data relating to parents, teachers, classes,
                students, grades and academic sessions are created by the admin.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 font-bold text-2xl mr-4">3</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                Results & Report processing
              </h4>
              <p className="text-gray-600">
                The admin and principal have access to students results and
                school reports for past and present academic sessions.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 font-bold text-2xl mr-4">4</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                Notices & Messaging
              </h4>
              <p className="text-gray-600">
                The Principal has the ability to send notices to parents via
                their portal and can also send messages to them.
              </p>
            </div>
          </li>
        </ul>

        {/* Login Button */}
        <div className="mt-8">
          <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500">
            Principal's Login →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Module;
