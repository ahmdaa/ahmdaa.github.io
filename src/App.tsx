import './sass/main.scss';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function App() {
    return (
        <div>
            <header>
                <h1>Hi, I'm Ahmed!</h1>
            </header>
            <div className='socials'>
                <div>
                    <a className='social-link' href="https://github.com/ahmdaa">
                        <AiFillGithub />
                        <div className='social-text'>
                            Github
                        </div>
                    </a>
                </div>
                <div>
                    <a className='social-link' href="https://linkedin.com/in/ahmed-abdalla-31a030142">
                        <AiFillLinkedin />
                        <div className='social-text'>
                            LinkedIn
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
