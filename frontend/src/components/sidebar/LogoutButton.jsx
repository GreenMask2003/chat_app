import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>                        {/* Margin-top Auto = bottom */}
        {!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
    </div>
  );
};

export default LogoutButton;


















// BASIC CODE SYNTAX BEFORE ANY CHANGES IN CLASSES AND ALL(BEFORE CONNECTING IT WITH BACKEND)....................
// import { BiLogOut } from "react-icons/bi";
// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>                        {/* Margin-top Auto = bottom */}
//         <BiLogOut className='w-7 h-7 text-gray-300 cursor-pointer '/>
//     </div>
//   );
// };

// export default LogoutButton;