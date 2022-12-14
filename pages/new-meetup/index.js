import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function newMeetupPage() {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default newMeetupPage;
