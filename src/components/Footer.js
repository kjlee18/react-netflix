import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterContainer>
          <FooterContent>
            <FooterLinkContainer>
              <FooterLinkContent>
                <FooterLink href="https://help.netflix.com/ko/node/412">
                  넷플릭스 소개
                </FooterLink>
                <FooterLink href="https://help.netflix.com/ko/">
                  고객 센터
                </FooterLink>
                <FooterLink href="https://help.netflix.com/ko/">
                  미디어 센터
                </FooterLink>
                <FooterLink href="https://help.netflix.com/ko/">
                  이용 약관
                </FooterLink>
              </FooterLinkContent>
              <FooterDescContainer>
                <FooterDescRights>Netflix Rights Reserved.</FooterDescRights>
              </FooterDescContainer>
            </FooterLinkContainer>
          </FooterContent>
        </FooterContainer>
        
      </div>
    );
  }
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  // 위아래 center
  align-items: center;
  // 위아래 좌우
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  // 769 px 이하일 때 어떻게 스타일링 할지
  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30 px;
  }
`;

// 통일성을 위해 만들어주는 tag
const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768 px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottm: 21px;
  text-decoration: none;

  // 마우스 가져다 될 때 (hover)
  $:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
