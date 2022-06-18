import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="상대이름" canGoBack>
      <div className="py-10 px-4 space-y-4">
        <Message message="Hi how much are you selling them for?"></Message>
        <Message message="Hi how much are you selling them for?" reversed></Message>
        <Message message="Hi how much are you selling them for?"></Message>
        <div className="fixed bottom-0 inset-x-0 w-full mx-auto max-w-md py-2">
          <div className="flex items-center">
            <input type="text" className="shadow-sm rounded-full w-full border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 pr-14"/>
            <div className="absolute inset-y-0 flex items-center justify-center pr-1.5 right-0">
              <button className="flex items-center bg-orange-500 rounded-full px-3 py-1.5 text-sm text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-600">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;