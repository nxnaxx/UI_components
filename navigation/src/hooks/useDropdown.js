import { useEffect, useRef, useState } from 'react';

const useDropdown = (initialState) => {
  const dropDownRef = useRef(null);
  const [isOpened, setIsOpened] = useState(initialState);

  useEffect(() => {
    // 외부 영역 클릭 시 메뉴 닫기
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    };

    // 메뉴 오픈 상태에서 외부 스크롤 막기
    if (isOpened) {
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.documentElement.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDownRef, isOpened]);

  // 버튼 클릭 시 메뉴 열고 닫기
  const onButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return { isOpened, dropDownRef, onButtonClick };
};

export default useDropdown;
