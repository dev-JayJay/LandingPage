import { SiteContent } from "@/components/utilis/SiteContent/TestimonialContent";
import { TestimonyCard } from "@/components/Molecules/Card/TestimoiCard";
import { Testimony } from "@/components/Molecules/Card/TestimoiCard/type";
import styled from "styled-components";

const Testimonials = () => {
    const TestimonyList: Testimony[] = SiteContent.Testimonials
    return(
        <section>
            <div>
                {/* Section sub header */}
            </div>
            <TestimonyWrap>
                {
                    TestimonyList.map((items, index) => {
                        return(
                            <TestimonyCard 
                            key={index}
                            Name={items.Name}
                            Content={items.Content}
                            Level={items.Level}
                            image={items.image}
                            />
                        )
                    })
                }
            </TestimonyWrap>


        </section>
    )
}
export default Testimonials;

export const TestimonyWrap = styled.div`
width: 90%;
margin: 10px auto;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;