import type { NextPage } from "next";
import ButtonFloat from "../components/button-float";
import Item from "../components/item";
import ItemGroup from "../components/item-group";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <ItemGroup>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </ItemGroup>
      <ButtonFloat href="/items/upload">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </ButtonFloat>
    </Layout>
  );
};

export default Home;