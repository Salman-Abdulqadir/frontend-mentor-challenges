import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchIpData } from "./redux/dataReducer";

//components
import Search from "./components/Search";
import Info from "./components/Info";
import Map from "./components/Map";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const {data,isLoading} = useSelector((state) => state.ip_data);

  useEffect(() => {
    dispatch(fetchIpData("192.212.174.101"));
  }, [dispatch]);

  if (isLoading || data.length === 0 ) {
    return <Loading/>;
  }
  return (
    <div className="App flex-col">
      <Search />
      <Info />
      <Map />
    </div>
  );
}

export default App;
