import CreatePost from "./CreatePost";
import Posts from "./Posts";

const MainComponent = ({ tabSelected }) => {
  return (
    <div className="md:w-[50%] w-[100%] pt-4 z-0">
      {tabSelected === "Create-Post" ? <CreatePost /> : <Posts />}
    </div>
  );
};

export default MainComponent;
