import { useState, useEffect, useRef, FC } from "react";
import type { RootState } from '../../components/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { db,auth } from "../../server/firebaseConfig";
import { setChat } from "../../components/redux/slicer/CheckChat"
import { MdClose } from "react-icons/md";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Timestamp;
};



const ChatCo: FC = () => {
  
  const isColor = useSelector((state: RootState) => state.color.value);
  const userId = useSelector((state: RootState) => state.userId.value);
  
  const dispatch = useDispatch()
  const chatCheck = useSelector((state: RootState) => state.chatCheck.value) 
  
  const handle = () =>{
    dispatch(setChat(false))
  }
  
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const messagesRef = collection(db, "messages", user.uid, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [user]);

  const sendMessage = async () => {
    if (!user || input.trim() === "") return;

    const messagesRef = collection(db, "messages", user.uid, "messages");

    await addDoc(messagesRef, {
      text: input,
      sender: "user",
      timestamp: Timestamp.now(),
    });

    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="w-[94vw]  h-[80vh] md:h-[500px] max-w-md mx-auto border rounded-2xl relative shadow-lg flex flex-col  bg-white">
      {/* Header */}
      <div className="bg-orange-600 flex flex-row justify-between items-center text-white w-full h-[4rem]  rounded-t-2xl ">
      
        <h1 className="font-semibold m-4 text-lg">Messages</h1>
        
       <MdClose onClick={handle}  className="m-4 text-white text-3xl" />
        
      </div>

      {/* Messages */}
      <div style={{backgroundColor: isColor ? "#121212" :  ""}} className="flex-1 overflow-y-auto  p-4 space-y-2  flex flex-col">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-xl ${
              msg.sender === "user"
                ? "bg-orange-500 text-white self-end ml-auto"
                : "bg-gray-300 text-gray-800 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 flex items-center gap-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
        >
          Send
        </button>
      </div>
    </div>
    <div className="w-full h-[7vh]"></div>
    </div>
  );
};

export default ChatCo;
