import { useState, useEffect } from "react";
import Loading from "./Loading";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
