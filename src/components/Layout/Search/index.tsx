import ClassNames from 'classnames/bind'
import styles from './Search.module.scss'
// tippy
// import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless' // different import path! headless
import 'tippy.js/dist/tippy.css' // optional nếu xài tooltip thì cái trên và cái này..thieus trên k chạy
// import Tippy from '@tippyjs/react' // different import path! headless

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PopperItem, PopperWrapper } from '../../Popper'
import { Debounce } from '@/utils'
import * as React from 'react'
import { valueSearch } from './SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { valueSearchSelector } from './selector'
export interface SearchProps {
  onSearch?: any
}

const cx = ClassNames.bind(styles)

export function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = React.useState('')
  const [searchResult, setSeatchResult] = React.useState([])
  const [showResult, setShowResult] = React.useState(true)
  const dispath = useDispatch()
  const navigate = useNavigate()

  const Valuesearch: any = useSelector(valueSearchSelector)

  const inputRef: any = React.useRef('')
  function Search() {
    if (!onSearch) return

    try {
      const action = valueSearch(inputRef.current.value)
      dispath(action)
    } catch (error) {
      console.log(error)
    }
    onSearch(inputRef.current.value)
  }

  const handleChange: any = Debounce((value: any) => Search(), 1000)

  React.useEffect(() => {
    setSearchValue(inputRef.current.value)
    // try {
    //   const action = valueSearch(inputRef.current.value)
    //   dispath(action)
    // } catch (error) {
    //   console.log(error)
    // }

    // console.log('valuesaaa', Valuesearch)
  }, [inputRef.current.value])

  // useEffect(() => {}, [searchValue])

  const handleClear = () => {
    setSearchValue('')
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  const handleHideResult = () => {
    setShowResult(false)
  }

  return (
    <HeadlessTippy
      // ddeerd mình select được kq
      interactive
      // visible={searchResult.length > 0}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className="search-title">Accounts</h4>
            <PopperItem></PopperItem>
            <PopperItem></PopperItem>
            <PopperItem></PopperItem>
            <PopperItem></PopperItem>
          </PopperWrapper>
        </div>
      )}
      // khi click ra ngoai khỏi tippy.. thì làm j
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          // value={Valuesearch}
          ref={inputRef}
          type="text"
          placeholder="Search"
          spellCheck={false}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
        )}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </HeadlessTippy>
  )
}
