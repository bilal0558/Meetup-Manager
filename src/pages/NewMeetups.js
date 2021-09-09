import NewMeetupForm from "../components/Meetup/NewMeetupForm";

function NewMeetingPage(){
    function addMeetup(){

    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetup}/>
        </section>        
    )
}

export default NewMeetingPage;