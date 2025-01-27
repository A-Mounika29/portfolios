import React from 'react';
import HBgAnimation from '../HBgAnimation';
import { HContainer, HBg, HLeftContainer, HRightContainer, HInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HStyle'; // Removed Img import
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HSection = () => {
    return (
        <div id="about">
            <HContainer>
                <HBg>
                    <HBgAnimation />
                </HBg>
                <HInnerContainer>
                    <HLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HLeftContainer>

                    <HRightContainer id="Right">
                        {/* Image tag removed */}
                    </HRightContainer>
                </HInnerContainer>
            </HContainer>
        </div>
    );
}

export default HSection;
