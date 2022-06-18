import type { NextPage } from "next";
import { InputFloat } from "../../components/input-float";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="상대이름" canGoBack>
      <div className="py-10 px-4 space-y-4">
        <Message message="Hi how much are you selling them for?"></Message>
        <Message message="Hi how much are you selling them for?" reversed></Message>
        <Message message="Hi how much are you selling them for?"></Message>
        <InputFloat></InputFloat>
      </div>
    </Layout>
  );
};

export default ChatDetail;