import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import NoSSRWrapper from '../../components/util/NoSSRWrapper';

function newMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup </title>
      </Head>

      <NoSSRWrapper>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </NoSSRWrapper>
    </Fragment>
  );
}
export default newMeetupPage;
