const Message = () => {
  return (
    <div className='chat chat-end'>                      {/* Using chat bubble from daisy ui components*/}
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Tailwind CSS Chat Bubble Component" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hey! You are very Smart</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  );
};

export default Message;













// BASIC CODE SYNTAX BEFORE ANY CHANGES IN CLASSES AND ALL(BEFORE CONNECTING IT WITH BACKEND)....................
// const Message = () => {
//     return (
//       <div className='chat chat-end'>                      {/* Using chat bubble from daisy ui components*/}
//           <div className='chat-image avatar'>
//               <div className='w-10 rounded-full'>
//                   <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Tailwind CSS Chat Bubble Component" />
//               </div>
//           </div>
//           <div className={`chat-bubble text-white bg-blue-500`}>Hey! You are very Smart</div>
//           <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//       </div>
//     );
//   };
  
//   export default Message;