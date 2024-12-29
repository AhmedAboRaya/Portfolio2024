import React from 'react';
import { SkillsMarquee } from './SkillsMarquee';
import { Blocks, Palette} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faC, faT } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { name: 'JavaScript', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faJs} />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faT} />, color: 'text-blue-400' },
    { name: 'C', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faC} />, color: 'text-blue-500' },
    { name: 'Python', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faPython} />, color: 'text-yellow-500' },
    { name: 'HTML', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faHtml5} />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faCss3} />, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, color: 'text-cyan-400' },
    { name: 'Sass', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faSass} />, color: 'text-pink-500' },
    { name: 'React', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faReact} />, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faBootstrap} />, color: 'text-purple-600' },
    { name: 'NodeJS', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faNodeJs} />, color: ' text-green-400' },
    { name: 'C++', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faC} />, color: 'text-blue-500' },
    { name: 'MongoDB', icon: <Blocks className="w-5 h-5" />, color: 'text-green-400' },
    { name: 'Git', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faGit} />, color: 'text-orange-500' },
    { name: 'Github', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faGithub} />, color: 'text-gray-400' },
    { name: 'Figma', icon: <FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faFigma} />, color: 'text-pink-500' },
];

function Skill() {
    return (
        <div id='skills' className="p-4 md:p-8 -mt-26 overflow-x-hidden pt-10">
            <div className="w-full overflow-hidden z-50">
                <SkillsMarquee skills={skills} direction="left" speed="100s" />
                <SkillsMarquee skills={skills.reverse()} direction="right" speed="100s" />
            </div>
        </div>
    );
}


export default Skill;