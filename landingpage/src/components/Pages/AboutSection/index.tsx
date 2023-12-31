import { SectionText } from "@/components/Atom/SubHeaders"
import Text from "@/components/Atom/Text"
import Image from "next/image"
import styled from "styled-components"


function AboutSection() {
  return (
    <section>
        <SectionText
        title="About"
        description=".Elevate Your Educational Journey With Schovela - Where Innovation Meets Education"
        />
        <AboutWrap>
          <Image
          src='/images/schovela3.jpg'
          alt="schovela Iamge"
          width={450}
          height={450}
          />
        <Text
        title="Elevate Your Learning Experience!"
        content="Discover Schovela, a collaborative project designed to revolutionize your academic pursuits. Dive into a vast repository of knowledge with PDFs, enabling you to access essential materials at your convenience. Additionally, enrich your understanding through audiovisual lectures meticulously curated for each course. "
        />
        </AboutWrap>
    </section>
  )
}

export default AboutSection;

export const AboutWrap = styled.div`
  display: flex;
  gap: 10;
  width: 70%;
  margin: 10px auto;
  align-items: center;
`;
