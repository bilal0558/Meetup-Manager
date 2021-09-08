import styles from "./MeetupItem.module.css";

function MeetUpItem(props){
    return(
        <li className={styles.meetupContainer}>
            
            <div>
                <img src={props.meetup.image} alt={props.meetup.title} className={styles.image}/>
            </div>
            <div>
                <h2>{props.meetup.title}</h2>
                <address>{props.meetup.address}</address>
                <p className={styles.description}>{props.meetup.description}</p>
            </div>
            <div>
                <button className={styles.btn}>To Favourites</button>
            </div>
        </li>
    );
}

export default MeetUpItem;