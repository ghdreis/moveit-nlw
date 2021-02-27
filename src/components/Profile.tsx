import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFl-82nXpknrg/profile-displayphoto-shrink_800_800/0/1565308491086?e=1619654400&v=beta&t=SW_DwXdLpyXJbinlJPPUG_4-BjYo8jNOvugQUB99GP8" alt="Gustavo Reis" />
            <div>
                <strong>Gustavo Reis</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}