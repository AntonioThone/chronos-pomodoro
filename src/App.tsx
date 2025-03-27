import {Heading} from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import {  TimerIcon } from 'lucide-react';

export function App(){
    return(
        <>
            <Heading>
                ola mundo 1

                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi pariatur facere eveniet reiciendis, dicta vitae quibusdam doloribus nostrum vero nisi officia adipisci quam facilis repudiandae perspiciatis provident quos laborum?
            </p>
        </>
    )
}