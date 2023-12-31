import { SectionText } from "@/components/Atom/SubHeaders"
import { SiteContent } from "@/components/utilis/SiteContent"
import { TeamCardProps } from "@/components/Molecules/Card/TeamCard/type"
import { TeamCard } from "@/components/Molecules/Card/TeamCard";

const TeamSection = () => {
    const TeamList: TeamCardProps[] = SiteContent.Team;

  return (
    <section>
        <SectionText 
        title="Meet  team"
        description="Our team is dedicated to providing and ensuring breaking barriers and fostering a dynamic educational experience"
        />
        <div>
            {
                TeamList.map((items, index) => {
                    return (
                        <TeamCard 
                        key={index}
                        image={items.image}
                        userName={items.userName}
                        role={items.role}
                        status={items.status}
                        />
                    )
                })
            }
        </div>
    </section>
  )
}

export default TeamSection
