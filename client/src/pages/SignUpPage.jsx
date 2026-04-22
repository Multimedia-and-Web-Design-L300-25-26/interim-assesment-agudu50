import { Link, useNavigate } from "react-router-dom";
import coinbaseImage from "../assets/coinbase-v2.svg";
import personalIcon from "../assets/profile-icon.svg";
import businessIcon from "../assets/business-icon.svg";
import developerIcon from "../assets/developer-icon.svg";


function SignUpPage() {
  const navigate = useNavigate();

  const handlePersonal = () => {
    navigate("/create-account?type=personal");
  };

  const handleBusiness = () => {
    navigate("/create-account?type=business");
  };

  const handleDeveloper = () => {
    navigate("/create-account?type=developer");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col ">
      {/* Top bar */}
      <div>
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/signup-splash" className="flex items-center gap-2">
            <img src={coinbaseImage} alt="Coinbase" className="h-10 w-10" />
            <span className="text-xl font-semibold text-gray-900"></span>
          </Link>
          <div className="flex items-center gap-4">
           
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-gray-50 mb-10">
           What kind of account are you <br />creating?
          </h1>
        
    

          

            {/* button */}
            <div className="flex flex-col gap-4 items-center w-full">
              <button
                type="button"
                onClick={handlePersonal}
                className="w-full sm:w-3/4 min-h-28 py-3 px-4 rounded-lg text-white border border-gray-800 hover:bg-gray-900 transition flex items-center gap-3"
              >
                <img src={personalIcon} alt="" className="h-12 w-12 shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-base">Personal</span>
                  <p className="text-sm text-gray-500 font-semibold">Trade crypto as an individual</p>
                </div>
              </button>
             
              <button
                type="button"
                onClick={handleBusiness}
                className="w-full sm:w-3/4 min-h-28 py-3 px-4 rounded-lg text-white border border-gray-800 hover:bg-gray-900 transition flex items-center gap-3"
              >
                <img src={businessIcon} alt="" className="h-12 w-12 shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-base">Business</span>
                  <p className="text-sm text-gray-500 font-semibold">Manage teams and portfolios, accept crypto payments access APIs, and more</p>
                </div>
              </button>
              <button
                type="button"
                onClick={handleDeveloper}
                className="w-full sm:w-3/4 min-h-28 py-3 px-4 rounded-lg text-white border border-gray-800 hover:bg-gray-900 transition flex items-center gap-3"
              >
                <img src={developerIcon} alt="" className="h-12 w-12 shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-base">Developer</span>
                  <p className="text-sm text-gray-500 font-semibold">Build onchain using developer tooling.</p>
                </div>
              </button>
            </div>


        </div>
      </div>

      
    </div>
  );
}

export default SignUpPage;
