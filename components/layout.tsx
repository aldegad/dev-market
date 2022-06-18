import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

const Layout = ({title, canGoBack, hasTabBar, children}:LayoutProps) => {
  const router = useRouter();
  const onclick = () => {
    console.log(router);
    router.back();
  }
  return (
    <div>
      <div className="flex justify-between items-center px-4 bg-white w-full text-lg h-14 fixed text-gray-700 border-b top-0 inset-x-0 font-medium">
        <div className="relative z-10">
          {canGoBack ? 
            <button onClick={onclick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button> : null
          }
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0">{title ? <button className="cursor-pointer" onClick={onclick}>{title}</button> : null}</div>
      </div>
      <div className={cls("w-full max-w-xl mx-auto pt-14", hasTabBar ? "pb-20" : "")}>
        {children}
      </div>
      {hasTabBar ? 
        <nav className="fixed max-w-xl mx-auto bottom-0 h-20 inset-x-0 pt-1 bg-white text-gray-800 border-t justify-between items-center grid grid-cols-5">
          <Link href="/">
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>홈</span>
            </div>
          </Link>
          <Link href="/community">
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>동네생활</span>
            </div>
          </Link>
          <Link href="/chats">
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>채팅</span>
            </div>
          </Link>
          <Link href="/live">
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>라이브</span>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>내의 데브</span>
            </div>
          </Link>
        </nav> : null}
    </div>
  )
}

export default Layout;