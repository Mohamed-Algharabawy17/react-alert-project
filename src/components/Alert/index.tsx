import { ReactNode } from 'react';
import './index.scss'
import { X } from 'lucide-react';
import { AlertTypes } from '../../types/Alert';
interface IProps {
    type: AlertTypes;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}
const Alert = ({type='info-alert', title, icon, description, children}: IProps) => {    
    
    return (
        <div className={type}>
            <div className='first-wrapper'>
                <div className='title'>
                    {icon}
                    <h3>{title}</h3>    
                </div> 
                <a type='button'>
                    <X />
                </a>
            </div>            
            { children ? children : <p>{description}</p> }
        </div>
    );
};

export default Alert;