import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  // const router = useRouter();
  // console.log(router.query.meetupId)

  return <MeetupDetail
    image='https://www.flytap.com/-/media/Flytap/destinations/Suggestions/Lead/Recife-e-Olinda-Irmas-Banhadas-pelo-Atlantico_1920x1036.jpg?h=1036&w=1920&la=pt-BR&hash=E031D88F3DF632A4A2097567FF38422FACA8A26B'
    title='Meetup Title'
    address='Meetup Address'
    description='Meetup Description'
  />;
}

export async function getStaticPaths() { // since this is a dynamic page (path), we need this func to describe all possible meetupId values!
  return {
    fallback: false, // false => should then list all possibilities. true => list some paths (most popular) to pre-rendering
    paths: [
      {
        params: { meetupId: 'm1' },
      },
      {
        params: { meetupId: 'm2' },
      }
    ]
  }
}

export async function getStaticProps(context) {
  // fetch API data

  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://www.flytap.com/-/media/Flytap/destinations/Suggestions/Lead/Recife-e-Olinda-Irmas-Banhadas-pelo-Atlantico_1920x1036.jpg?h=1036&w=1920&la=pt-BR&hash=E031D88F3DF632A4A2097567FF38422FACA8A26B',
        title: 'Meetup Title',
        address: 'Meetup Address',
        description: 'Meetup Description'
      }
    }
  }
}

export default MeetupDetails;
