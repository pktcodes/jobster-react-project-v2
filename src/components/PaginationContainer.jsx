import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updatePage } from '../features/allJobs/allJobsSlice';

const PaginationContainer = () => {
  const { numOfPages, page } = useSelector((state) => state.allJobsState);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const handlePrevPage = () => {
    let pageNumber = page - 1;
    if (pageNumber < 1) {
      pageNumber = numOfPages;
    }
    dispatch(updatePage(pageNumber));
  };

  const handleNextPage = () => {
    let pageNumber = page + 1;
    if (pageNumber > numOfPages) {
      pageNumber = 1;
    }
    dispatch(updatePage(pageNumber));
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={handlePrevPage}>
        <HiChevronDoubleLeft />
        <span>prev</span>
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={pageNumber === page ? 'page-btn active' : 'page-btn'}
              onClick={() => dispatch(updatePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={handleNextPage}>
        <span>next</span>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`;

export default PaginationContainer;
