import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>                      {/* Using chat bubble from daisy ui components*/}
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src = {profilePic}  alt="Tailwind CSS Chat Bubble Component" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
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