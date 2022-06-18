import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout title="라이브" canGoBack>
      <form className=" space-y-5 py-10 px-4">
        <Input label="Name" name="name"></Input>
        <Input label="price" kind="price" name="price"></Input>
        <TextArea label="description" name="description"></TextArea>
        <Button text="Go live"></Button>
      </form>
    </Layout>
  );
};

export default Create;