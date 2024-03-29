import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return(
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>
        <form>
          <div>
          <label className='label p-2'>
							<span className='text-base label-text pt-3'>Full Name</span>
					</label>
            <input type='text' placeholder='Kushagra Darji' className='w-full input input-bordered  h-10' />
          </div>
          <div>
          <label className='label p-2'>
							<span className='text-base label-text pt-1'>User Name</span>
					</label>
            <input type='text' placeholder='greenmask' className='w-full input input-bordered  h-10' />
          </div>
          <div>
						<label className='label'>
							<span className='text-base label-text pt-1'>Password</span>
						</label>
					<input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
					</div>
          <div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
					<input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
					</div>

           <GenderCheckbox/>

           <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
						Already have an account?
					</a>
          <div>
            <button className='btn btn-block btn-sm mt-1.5 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>  
  );   
};

export default SignUp;




















// BASIC CODE SYNTAX BEFORE ANY CHANGES IN CLASSES AND ALL(BEFORE CONNECTING IT WITH BACKEND)....................
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return(
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>
//         <form>
//           <div>
//           <label className='label p-2'>
// 							<span className='text-base label-text pt-3'>Full Name</span>
// 					</label>
//             <input type='text' placeholder='Kushagra Darji' className='w-full input input-bordered  h-10' />
//           </div>
//           <div>
//           <label className='label p-2'>
// 							<span className='text-base label-text pt-1'>User Name</span>
// 					</label>
//             <input type='text' placeholder='greenmask' className='w-full input input-bordered  h-10' />
//           </div>
//           <div>
// 						<label className='label'>
// 							<span className='text-base label-text pt-1'>Password</span>
// 						</label>
// 					<input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
// 					</div>
//           <div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 					<input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
// 					</div>

//            <GenderCheckbox/>

//            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						Already have an account?
// 					</a>
//           <div>
//             <button className='btn btn-block btn-sm mt-1.5 border border-slate-700'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>  
//   );   
// };

// export default SignUp;