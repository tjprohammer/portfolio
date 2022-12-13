import styled from '@emotion/styled';

export const Container = styled.div`
    width: 477.079px;
    height: 477.079px;
    transform: rotate(45deg) translateY(-18.3492px);
    border-radius: 50%;
    background-color: teal;
    position: relative;
    top: -93.7848px;
    right: 95.8236px;
    z-index: 999;
    animation: 1s ease 0s 1 normal forwards running menuWrapperIn;
`;

export const Container2 = styled.div`
    width: 477.079px;
    height: 477.079px;
    transform: rotate(45deg) translateY(-18.3492px);
    border-radius: 50%;
    background-color: purple;
    position: relative;
    top: -42.8148px;
    right: -4.0776px;
    animation: 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards running
        menuWrapperChildIn;
`;

export const Burger = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    top: 12.5676px;
    gap: 4.7336px;
    cursor: pointer;
    z-index: 9999;
`;
export const BurgerLine = styled.div`
    width: 30px;
    height: 4px;
    border-radius: 5px;
    background-color: purple;
`;
