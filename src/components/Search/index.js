import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import PopperSearch from '@/components/PopperSearch/Wrapper';
import AccountItems from '@/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Spinner from 'react-bootstrap/Spinner';
import useDebounce from '../hooks';
import * as APISearch from '@/Service/searchService';
function Search() {
  const input_ref = useRef();
  const [SearchValue, setSearchValue] = useState('');
  const [SearchResult, setSearchResult] = useState([]);
  const [ShowResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(SearchValue, 1000);
  const HandleSearch = (e) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(' ')) {
      setSearchValue(inputValue);
    }
  };
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await APISearch.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const HideSearch = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={ShowResult && SearchResult.length > 0}
      render={(attrs) => (
        <div className={styles.SearchResult} tabIndex="-1" {...attrs}>
          <PopperSearch>
            <h3 className={styles.title}>You may like</h3>
            {SearchResult.map((data) => (
              <AccountItems key={data.id} data={data} />
            ))}
          </PopperSearch>
        </div>
      )}
      onClickOutside={HideSearch}
    >
      <div className={styles.search}>
        <input
          ref={input_ref}
          value={SearchValue}
          placeholder="Search"
          spellCheck={false}
          onChange={HandleSearch}
          onFocus={() => setShowResult(true)}
        />
        {!!SearchValue && !loading && (
          <button
            className={styles.search_clear}
            onClick={() => {
              setSearchValue('');
              input_ref.current.focus();
              HideSearch();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && (
          <div className={styles.search_loadings}>
            <Spinner animation="border" size="2px" />
          </div>
        )}
        <Tippy content="Tìm kiếm">
          <button className={styles.search_manify} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Tippy>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
