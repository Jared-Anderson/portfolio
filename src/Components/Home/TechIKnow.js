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
  SiMysql,
  SiJavascript,
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
          </span>
          <span>
            <SiPython />
          </span>
          <span>
            <SiRedux />
          </span>
          <span>
            <SiCsharp />
          </span>
          <span>
            <SiTypescript />
          </span>
          <span>
            <SiJavascript />
          </span>
          <span>
            <SiCss3 />
          </span>
          <span>
            <SiHtml5 />
          </span>
          <span>
            <SiNpm />
          </span>
          <span>
            <SiGithub />
          </span>
          <span>
            <SiGit />
          </span>
          <span>
            <SiMysql />
          </span>
        </div>
      </div>
    </div>
  );
}
