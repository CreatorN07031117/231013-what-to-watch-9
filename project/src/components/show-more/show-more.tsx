type ShowMoreBtnProps = {
  setCount: () => void;
}


function ShowMoreBtn ({setCount}: ShowMoreBtnProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() =>
          setCount()}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreBtn;
