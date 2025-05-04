import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser, display } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">

            {/* Sidebar */}
            <div
              className={`
                h-full 
                ${display ? "hidden" : "block w-full"} 
                lg:block lg:w-72
              `}
            >
              <Sidebar />
            </div>

            {/* Chat Container */}
            <div
              className={`
                h-full 
                ${display ? "block w-full" : "hidden"} 
                lg:flex lg:flex-1
              `}
            >
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
