import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useDropdown from '../hooks/useDropdown';

const Container = styled.div`
  margin: 100px;
`;

const Label = styled.label`
  color: #9d9d9d;
  font-size: 16px;
  font-weight: 600;

  &.active {
    color: #6c00ff;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 10px;
`;

const MenuForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 2px solid #9d9d9d;
  border-radius: 8px;
  background: #ffffff;

  &.active {
    border: 2px solid #6c00ff;
  }
`;

const Title = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  color: #000000;
  font-size: 16px;
  line-height: 20px;
`;

const DropdownBtn = styled.button`
  flex-grow: 0;
  padding: 0 15px;
  border: none;
  background: none;

  svg {
    cursor: pointer;
    font-size: 16px;
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  border-radius: 8px;
  background: #ffffff;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.2));

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    padding: 0px 15px;

    &:hover {
      background: rgba(108, 0, 255, 0.7);
      color: #ffffff;
      cursor: pointer;
    }

    &:nth-of-type(1) {
      border-radius: 8px 8px 0 0;
    }
    &:nth-last-of-type(1) {
      border-radius: 0 0 8px 8px;
    }
  }
`;

export default function DropdownList() {
  const { isOpened, dropDownRef, onButtonClick } = useDropdown(false);
  const category = ['C', 'C++', 'Javascript', 'Python', 'JAVA'];

  return (
    <Container>
      <Label className={`${isOpened ? 'active' : ''}`}>MenuBar</Label>
      <MenuWrapper>
        <MenuForm ref={dropDownRef} className={`${isOpened ? 'active' : ''}`}>
          <Title>Language</Title>
          <DropdownBtn onClick={onButtonClick}>
            <FontAwesomeIcon icon={faCaretDown} />
          </DropdownBtn>
        </MenuForm>
        {isOpened && (
          <CategoryList>
            {category.map((category) => (
              <div key={category}>{category}</div>
            ))}
          </CategoryList>
        )}
      </MenuWrapper>
    </Container>
  );
}
