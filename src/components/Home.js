import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

import PreviewCard from './PreviewCard'

const Section1 = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 240px;
h1{
  font-size: 38px;
  margin-bottom: 8px;
}
p{
  font-size: 18px;
  max-width: 800px;
  line-height: 22px
  text-align: center;
}
`
const Section2 = styled.section`
/* background: #5f83b1; */
width: 100%;
display: flex;
justfy-content: space-between;
`


class Home extends React.Component {
    render() {
        return (
            <div>
                <Section1>
                    <h1>Your Life. Your Career. Done Right!</h1>
                    <p>Unique and powerful suite of software to run your entire business. Coupled with two great blogs to help you navigate your way through your career and life.</p>
                </Section1>
                <hr />
                <Section2>
                    <PreviewCard content={{
                        title: 'Career',
                        spotlightText: 'Take Control of your career.',
                        description: 'Manage Projects large and small. Whether your an entrepreneur just getting started or a large enteprise looking to manage multiple teams.',
                        btnText: 'Explore More'
                    }
                    }></PreviewCard>
                    <PreviewCard content={{
                        title: 'Lifestyle',
                        spotlightText: 'Get the most out of life.',
                        description: 'Manage Projects large and small. Whether your an entrepreneur just getting started or a large enteprise looking to manage multiple teams.',
                        btnText: 'Explore More'
                    }
                    }></PreviewCard>
                </Section2>
                </div>
        )
    }
}

export default Home;