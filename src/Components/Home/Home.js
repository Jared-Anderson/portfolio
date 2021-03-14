import '../../App.scss';
import TechIKnow from './TechIKnow';

export function Home() {
    return (
        <>
            <div className="name-container">
                <span className="name-title">
                    &gt; My name is Jared Anderson
                    <span className="blink-me">&nbsp;</span>
                    <div>
                        <p>I am a web developer.</p>
                        <div>
                            My passion is building simple,
                            <div>beautiful user experiences.</div>
                        </div>
                    </div>
                </span>
            </div>
            <TechIKnow />
        </>
    );
}
