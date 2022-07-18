import React, { useState } from "react";
import LimitFilter from "./components/LimitFilter";
import Pagination from "./components/Pagination";
import Post from "./components/Post";
import Search from "./components/Search";
import { useGetPostsQuery } from "./redux";
import ThemeContext, { themes } from "./theme-context";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(10);
  const { data = [], isLoading } = useGetPostsQuery(250);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState("light");
  const [modalOpen, setModalOpen] = useState(false);
  const [curPost, setCurPost] = useState({ title: "", image: "" });

  const lastIndex = currentPage * count;
  const firstIndex = lastIndex - count;
  const currentData = (searchText ? searchData : data).slice(
    firstIndex,
    lastIndex
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const searching = (search: string) => {
    setSearchText(search);
    setCurrentPage(1);
    let sData = data.filter((d: any) => d.title.search(search) != -1);
    search ? setSearchData(sData) : [];
  };

  const countFiltering = (count: number) => {
    setCount(count);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const ModalVisible = (open: boolean, curP?: any) => {
    setModalOpen(open);
    setCurPost(curP);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <div className="p-[30px]">
        <div className="flex justify-between items-center mb-[40px]">
          <Search searching={searching} />
          <button
            className="ml-[25px]"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <img
              className="hover:scale-[1.15]"
              src={`${process.env.PUBLIC_URL}/assets/${
                theme === "light" ? "moon" : "sun"
              }.svg`}
              alt=""
            />
          </button>
        </div>
        <ul className="posts grid grid-cols-4 gap-[25px]">
          {currentData.map((item: any) => (
            <Post
              key={item.id}
              title={item.title}
              imageUrl={item.url}
              openModal={ModalVisible}
            />
          ))}
        </ul>
        {searchData.length === 0 && searchText ? (
          <h1 className="text-center mt-[40px] text-[25px] font-bold">
            Ничего не найдено ^_^
          </h1>
        ) : (
          <div className="flex justify-between items-center mt-[40px]">
            <Pagination
              dataPerPage={count}
              totalCount={searchText ? searchData.length : data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <LimitFilter countFiltering={countFiltering} count={count} />
          </div>
        )}
        {modalOpen && (
          <Modal
            close={ModalVisible}
            title={curPost.title}
            image={curPost.image}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
