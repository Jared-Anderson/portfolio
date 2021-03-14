import React from 'react';
import {
    SiRedux,
    SiCsharp,
    SiAngular,
    SiPython,
    SiTypescript,
    SiGit,
    SiCss3,
    SiHtml5,
    SiNpm,
    SiGithub,
    SiJavascript,
    SiReact,
} from 'react-icons/si';

export default function TechIKnow() {
    return (
        <div style={{ padding: '1rem' }}>
            <h2 style={{ display: 'grid', justifyContent: 'center' }}>
                Technologies I use
            </h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="tech-container">
                    <span>
                        <SiAngular />
                        <div>Angular</div>
                    </span>
                    <span>
                        <SiReact />
                        <div>React</div>
                    </span>
                    <span>
                        <SiPython />
                        <div>Python</div>
                    </span>
                    <span>
                        <SiRedux />
                        <div>Redux</div>
                    </span>
                    <span>
                        <SiCsharp />
                        <div>C Sharp</div>
                    </span>
                    <span>
                        <SiTypescript />
                        <div>TypeScript</div>
                    </span>
                    <span>
                        <SiJavascript />
                        <div>JavaScript</div>
                    </span>
                    <span>
                        <SiCss3 />
                        <div>CSS3</div>
                    </span>
                    <span>
                        <SiHtml5 />
                        <div>HTML5</div>
                    </span>
                    <span>
                        <SiNpm />
                        <div>Npm</div>
                    </span>
                    <span>
                        <SiGithub />
                        <div>Github</div>
                    </span>
                    <span>
                        <SiGit />
                        <div>Git</div>
                    </span>
                </div>
            </div>
        </div>
    );
}
