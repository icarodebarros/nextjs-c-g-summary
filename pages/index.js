import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/sol.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/03/dondinho-seturl-30.jpg',
    address: 'Some address 10, 54321 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
