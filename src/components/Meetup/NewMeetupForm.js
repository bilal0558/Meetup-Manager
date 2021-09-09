import { useRef } from 'react';

import './NewMeetupForm.module.css'

function NewMeetupForm(props){
    //Using refs to get the values from the form
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descRef = useRef();


    //Submit button Handler
    function submitHandler(event){
        event.preventDefault();

        //Reading current values from ref.
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descRef.current.value;

        //Creating meetup object
        const meetupData = {
            title : title,
            image : image,
            address : address,
            description : description
        }

        props.onAddMeetup(meetupData);
    }

    return(
        <form action="" onSubmit={submitHandler}>
            <p>Title : <input type="text" id="title" ref={titleRef}/></p>
            <p>Image URL : <input type="url" id="image" ref={imageRef}/></p>
            <p>Address : <textarea name="" cols="30" rows="5" id="address" ref={addressRef}></textarea></p>
            <p>Description : <textarea name="" cols="30" rows="5" id="desc" ref={descRef}></textarea></p>
            
            <input type="submit" value="Add Meeting"/>
        </form>
    );
}

export default NewMeetupForm;