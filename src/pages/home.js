import React from 'react';
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import {Feature, OptForm} from "../components";

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programs and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Whatch anywhere. Cancel at any time.
                    </Feature.SubTitle>                <OptForm>
                    <OptForm.Input placeholder='Email address'/>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    );
};

export default Home;