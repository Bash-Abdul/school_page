import home_image from "../assets/home_image.png";
import tv from "../assets/tv.png";

function Module(props) {

  let style 
  if(props.module_theme === 'bg-figmaGreen'){
    style = 'flex-row-reverse'
  }
  else if(props.module_theme === 'bg-figmaBlue'){
    style = 'flex-row'
  }

  return (
    <div>
      {style && <div className={`flex flex-col md:${style} h-[100vh]`}>
      {/* Left Side with Blue Background */}
      <div className={`${props.module_theme} w-full h-[30%] md:w-[30%] md:h-full relative`}>
        <div className="w-[35vw] absolute bottom-0 right-[-30%]">
          <img
            src={props.module_image}
            alt="School Toolkit"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-[60%] ml-8 flex items-center justify-center flex-col">
        <h3 className="text-green-600 font-semibold text-sm mb-4">MODULES</h3>
        <h2 className="text-gray-900 text-3xl font-bold mb-6">
          {props.module_title}
        </h2>
        <p className="text-gray-600 mb-6">
          {props.module_description}
        </p>

        {/* Feature List */}
        <ul className="space-y-8">
          <li className="flex items-start">
            <span className="text-green-600 font-bold text-2xl mr-4">1</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                {props.one_title}
              </h4>
              <p className="text-gray-600">
                {props.one_description}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 font-bold text-2xl mr-4">2</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                {props.two_title}
              </h4>
              <p className="text-gray-600">
                {props.two_description}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 font-bold text-2xl mr-4">3</span>
            <div>
              <h4 className="text-gray-900 font-semibold">
                {props.three_title}
              </h4>
              <p className="text-gray-600">
                {props.three_description}
              </p>
            </div>
          </li>
          {/* <li className="flex items-start">
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
          </li> */}
        </ul>

        {/* Login Button */}
        <div className="mt-8">
          <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500">
            {props.button_text}
          </button>
        </div>
      </div>
    </div>}
    </div>
  );
}

export default Module;
