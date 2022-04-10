type ShowMoreBtnProps = {
  onClick: () => void;
}

function ShowMoreBtn ({onClick}: ShowMoreBtnProps): JSX.Element {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onClick()}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreBtn;
