
import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>>`
    width: 100%;
    height: 42px;
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#81259D")};
    color: ${({ disabled }) => (disabled ? "#666" : "#FFF")};
    border: 1px solid ${({ disabled }) => (disabled ? "#ccc" : "#81259D")};
    border-radius: 21px;

    &:hover {
        opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
        cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
