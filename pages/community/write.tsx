import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout title="동네생활" canGoBack>
      <form className="px-4 py-10">
        <TextArea placeholder="Ask a question" name="description" label="동네생활"></TextArea>
        <Button text="Submit"></Button>
      </form>
    </Layout>
  )
}

export default Write;