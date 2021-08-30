import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  width: 300px;
  border: 1px solid #BEBEBE;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 16px;
  font-size: 24px;
  color: #222222;
  ::placeholder {
    color: #C1C1C1;
  }
`;

type Props = {
    name: string,
    type: string,
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const InputText = React.forwardRef((props: Props) => {
    const {
        name,
        type,
        placeholder,
        onChange
    } = props;
    return (
        <Input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
});

export default InputText;