import React from "react";
import {
  NavbarContainer,
  PlaceHolder,
  Nav,
  LoginButton,
  HeadingText,
  TitleText,
  TitleTextShow,
  TextHolder,
  Input,
  Button,
  Form,
  Started,
  SectionContainer,
  InnerSectionContainer,
  InnerSectionContainerTwo,
  SectionHolderContainer,
  DataHeadings,
  DataTitles,
  ImageDivvers,
  DivTextHolder,
  SectionsImages,
  BoardVideo,
  PlayVideos,
  FaqDiv,
  FaqDivBlock,
  FaqLink,
  ImageLogo,
} from "./NavbarComponent";
import Image from "../image/logo.png";
import { Data, DataOne, DataTwo } from "../data";
import QAcomponent from "../pages/Q&A";

const Navbar = (props) => {
  return (
    <>
      <NavbarContainer>
        <PlaceHolder>
          <Nav>
            <ImageLogo src={Image} alt="logo" />
            <LoginButton>
              <b>Sign In</b>
            </LoginButton>
          </Nav>
          <TextHolder>
            <HeadingText>Unlimited Movies, Tv shows and more.</HeadingText>
            <TitleText>Watch anywhere. Cancel anytime.</TitleText>
            <TitleTextShow>
              Ready to watch? Enter your email to create or restart your
              membership
            </TitleTextShow>
          </TextHolder>
          <TextHolder>
            <Started>
              <Form>
                <Input type="text" placeholder="Email address" />
                <Button type="submit">GET STARTED</Button>
              </Form>
            </Started>
          </TextHolder>
        </PlaceHolder>
      </NavbarContainer>
      <SectionContainer>
        <SectionHolderContainer>
          <Section data={Data}></Section>
          <Section reverse data={DataOne}></Section>
          <Section data={DataTwo}></Section>
        </SectionHolderContainer>

        <InnerSectionContainerTwo>
          <QAcomponent></QAcomponent>
        </InnerSectionContainerTwo>

        <InnerSectionContainer style={{ display: "block" }}>
          <TitleTextShow>
            Ready to watch? Enter your email to create or restart your
            membership
          </TitleTextShow>
          <TextHolder>
            <Started style={{ display: "block" }}>
              <Form style={{ display: "block" }}>
                <Input type="text" placeholder="Email address" />
                <Button type="submit">GET STARTED</Button>
              </Form>
            </Started>
          </TextHolder>
        </InnerSectionContainer>
        <InnerSectionContainer>
          <TitleTextShow style={{ color: "grey", display: "block" }}>
            Questions? Contact us.
          </TitleTextShow>
          <FaqDiv>
            <FaqDivBlock>
              <FaqLink href="#">FAQ</FaqLink>
              <FaqLink href="#">Account</FaqLink>
              <FaqLink href="#">Investor Relations</FaqLink>
              <FaqLink href="#">Way to watch</FaqLink>
              <FaqLink href="#">privacy</FaqLink>
              <FaqLink href="#">Corporal Informal</FaqLink>
              <FaqLink href="#">Speed Test</FaqLink>
            </FaqDivBlock>
            <FaqDivBlock>
              <FaqLink href="#">Help Center</FaqLink>
              <FaqLink href="#">Media Center</FaqLink>
              <FaqLink href="#">Jobs</FaqLink>
              <FaqLink href="#">Terms of Use</FaqLink>
              <FaqLink href="#">Cookies Prefrences</FaqLink>
              <FaqLink href="#">Contact us</FaqLink>
              <FaqLink href="#">Lagal Notices</FaqLink>
            </FaqDivBlock>
          </FaqDiv>
          <TitleTextShow style={{ color: "grey" }}>
            Netflix Clone by Ayomide Boluwatife <br></br>Whatsapp:
            +2348149055068 <br></br> Peace!!
          </TitleTextShow>
        </InnerSectionContainer>
      </SectionContainer>
    </>
  );
};

const Section = (props) => {
  return (
    <>
      <InnerSectionContainer reverse>
        <DivTextHolder>
          <DataHeadings>{props.data.Heading}</DataHeadings>
          <DataTitles>{props.data.title} </DataTitles>
        </DivTextHolder>
        <ImageDivvers>
          <SectionsImages src={props.data.image} alt="images" />
          <BoardVideo>
            <PlayVideos src={props.data.video} loop autoPlay muted></PlayVideos>
          </BoardVideo>
        </ImageDivvers>
      </InnerSectionContainer>
    </>
  );
};

export default Navbar;
