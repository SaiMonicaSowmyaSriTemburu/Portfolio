import WordCloud from 'react-d3-cloud';
import { Link } from 'react-router-dom';

import '../styles/Skills.css';

const data = [
    { text: 'Node JS', value: 180 },
    { text: 'Javascript', value: 180 },
    { text: 'Typescript', value: 160 },
    { text: 'Microservices', value: 120 },
    { text: 'AWS Lambda', value: 120 },
    { text: 'AWS Step functions', value: 120 },
    { text: 'Express JS', value: 120 },
    { text: 'Mongo DB', value: 120 },
    { text: 'Terraform', value: 80 },
    { text: 'SQL', value: 80 },
    { text: 'React JS', value: 100 },
    { text: 'Rest API', value: 150 },
    { text: 'NPM', value: 150 },
    { text: 'GIT', value: 150 },
    { text: 'HTML', value: 60 },
    { text: 'Unit Testing', value: 150 }
];

interface Skill {
    text: string;
    value: number;
}

const Skills = () => {
    const fontSizeMapper = (word: Skill) => word.value / 5;
    return (
        <div className='wordCloud'>
            <WordCloud rotate={0} random={() => 0.75} data={data} height={250} spiral={'rectangular'} padding={10} fontSize={fontSizeMapper}/>
            <Link to='/projects'>
                <button className='button' style={{backgroundColor: 'cadetblue'}}>Interested to check some of my work ?</button>
            </Link>
        </div>

    )
}

export default Skills;
