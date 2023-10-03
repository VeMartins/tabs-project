const BtnContainer = ({ currentItem, jobs, setCurrentItem }) => {
  return (
    <article className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            type="button"
            key={item.id}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </article>
  );
};
export default BtnContainer;
