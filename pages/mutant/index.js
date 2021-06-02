import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const Mutant = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Mutant page</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/mutant/environment">
                                <a onClick={handleSubmit} className="list-link">Générer un environnement</a>
                            </Link>
                            </li>
                        </ul>
            }
            
      </div>
    )
}

export default Mutant;