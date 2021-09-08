import MeetUpItem from "./MeetupItem";
import styles from "./MeetupList.module.css"

function MeetupList(props){
    return(
        <ul className={styles.meetupList}>
            {
                props.meetups.map(function(currMeetup){
                    return(
                        <MeetUpItem meetup={currMeetup}/>
                    )
                })
            }
        </ul>
    );
}

export default MeetupList;