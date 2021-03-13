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
  SiMicrosoftsqlserver,
  SiReact,
} from 'react-icons/si';

export default function TechIKnow() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ display: 'grid', justifyContent: 'center' }}>
        Technologies I know
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className='tech-container'>
          <span>
            <SiAngular />
            Angular
          </span>
          <span>
            <SiReact />
            React
          </span>
          <span>
            <SiPython />
            Python
          </span>
          <span>
            <SiRedux />
            Reduc
          </span>
          <span>
            <SiCsharp />C Sharp
          </span>
          <span>
            <SiTypescript />
            TypeScript
          </span>
          <span>
            <SiJavascript />
            JavaScript
          </span>
          <span>
            <SiCss3 />
            CSS3
          </span>
          <span>
            <SiHtml5 />
            HTML5
          </span>
          <span>
            <SiNpm />
            Npm
          </span>
          <span>
            <SiGithub />
            Github
          </span>
          <span>
            <SiGit />
            Git
          </span>
        </div>
      </div>
    </div>
  );
}
