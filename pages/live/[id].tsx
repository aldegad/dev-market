import { NextPage } from "next";
import Link from "next/link";
import { InputFloat } from "../../components/input-float";
import Layout from "../../components/layout";
import Message from "../../components/message";

const LiveDetail: NextPage = () => {
  return (
    <Layout title="라이브" canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video"></div>
          <h3 className="font-medium text-gray-700 text-2xl mt-2 pb-4">Let's try photatos</h3>
        </div>
        <div className="mt-10 pb-16 h-[50vh] space-y-4 overflow-y-auto">
          <Message message="hihi!!!"></Message>
          <Message message="hihi!!!" reversed></Message>
          <Message message="hihi!!!"></Message>
          <Message message="hihi!!!"></Message>
          <Message message="hihi!!!" reversed></Message>
          <Message message="hihi!!!" reversed></Message>
        </div>
        <InputFloat></InputFloat>
      </div>
    </Layout>
  )
}

export default LiveDetail;