import { SectionText } from "@/components/Atom/SubHeaders"
import { SiteContent } from "@/components/utilis/SiteContent"
import { TeamCardProps } from "@/components/Molecules/Card/TeamCard/type"
import { TeamCard } from "@/components/Molecules/Card/TeamCard";
import styled from "styled-components"

const TeamSection = () => {
    const TeamList: TeamCardProps[] = SiteContent.Team;

  return (
    <section>
        <SectionText 
        title="Meet  team"
        description="Our team is dedicated to providing and ensuring breaking barriers and fostering a dynamic educational experience"
        />
        <TeamContent>
            {
                TeamList.map((items, index) => {
                    return (
                        <TeamCard 
                        key={index}
                        image={items.image}
                        Name={items.Name}
                        role={items.role}
                        />
                    )
                })
            }
        </TeamContent>
    </section>
  )
}

export default TeamSection

export const TeamContent = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-evenly;
margin: 10px auto;
width: 70%;
`;
