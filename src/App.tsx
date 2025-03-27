import {Heading} from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App(){
    return(
        <>
            <Heading/>
            <Heading attr={123} attr2='string'>
                ola mundo 1
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi pariatur facere eveniet reiciendis, dicta vitae quibusdam doloribus nostrum vero nisi officia adipisci quam facilis repudiandae perspiciatis provident quos laborum?
            </p>
        </>
    )
}