import { NextPage } from "next";
import Link from "next/link";
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
  )
}

export default LiveDetail;