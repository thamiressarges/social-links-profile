import { Container, Avatar } from "./styles";
import {SocialCard} from '../../components/SocialCard';

export function Home(){
    return(
        <Container>
            <Avatar />
            <h1>Jessica Randall</h1>
            <h3>London, United Kingdom</h3>

            <p>"Front-end developer and avid reader"</p>

            <SocialCard title="Github" />
            <SocialCard title="Frontend Mentor" />
            <SocialCard title="Linkedin" />
            <SocialCard title="Twitter" />
            <SocialCard title="Instagram" />
        </Container>
    )
}