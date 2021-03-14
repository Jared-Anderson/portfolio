import '../../App.scss';
import TechIKnow from './TechIKnow';

export function Home() {
    return (
        <>
            <div className="name-container">
                <span className="name-title">
                    &gt; Jared Anderson
                    <span className="blink-me">&nbsp;</span>
                    <p>
                        I am a web developer. My passion is building simple,
                        beautiful user experiences.
                    </p>
                </span>
            </div>
            <TechIKnow />
        </>
    );
}
