import { createContext, useState } from "react";
export const DataContext = createContext()

const ContextComponent = ({children}) => {
    const [about, setAbout] = useState(
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nemo quasi animi minima possimus maxime consectetur laboriosam illum architecto sed!'
    )
    const [team , setTeam] = useState([
        {name: 'Max', jobTitle: 'CEO'},
        {name: 'Armando', jobTitle: 'COO'},
        {name: 'Carlo', jobTitle: 'CTO'},
        {name: 'Jesus', jobTitle: 'Lead Designer'},
        {name: 'Valerio', jobTitle: 'Software Engineer'},
    ])
    const [contacts, setContacts] = useState('contacts')
    return (
        <DataContext.Provider value={
            {
                about, 
                team, 
                contacts,
            }
        }>
            {children}
        </DataContext.Provider>
    );
}

export default ContextComponent;

