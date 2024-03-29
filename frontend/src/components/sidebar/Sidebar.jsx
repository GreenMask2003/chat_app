import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton/>
    </div>
  );
};

export default Sidebar;









// BASIC CODE SYNTAX BEFORE ANY CHANGES IN CLASSES AND ALL(BEFORE CONNECTING IT WITH BACKEND)....................
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton/>
//     </div>
//   );
// };

// export default Sidebar;