import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 768px) {
    height: 260px;
    padding: 30px;
  }
`

export const BannerLeftPart = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const BannerImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    width: 120px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: #000000;
  margin-bottom: 8px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const BannerButton = styled.button`
  display: inline-block; /* keep it to text size */
  width: 220px; /* prevent stretching */
  padding: 5px 14px; /* slightly adjusted */
  border: 1px solid #000000;
  color: #000000;
  background: transparent;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid ${props => (props.dark ? '#383838' : '#909090')};
  border-radius: 4px;
  margin: 20px;
  width: 90%;
  height: 40px;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  /* changed from #000000 to #181818 for better dark theme visual */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  padding: 0 10px;
  color: ${props => props.color};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  ::placeholder {
    color: ${props => (props.dark ? '#cccccc' : '#616e7c')};
  }
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  width: 50px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => (props.dark ? '#333333' : '#e2e8f0')};
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
