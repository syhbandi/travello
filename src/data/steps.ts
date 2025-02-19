import chooseDes from '../assets/images/choose-des.png';
import payment from '../assets/images/payment.png';
import taxi from '../assets/images/taxi.png';

type BookingSteps = {
  icon: string;
  title: string;
  content: string;
}
const bookingSteps: BookingSteps[] = [
  {
    icon: chooseDes,
    title:'Choose Destination',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. '
  },
  {
    icon:payment,
    title:'Make Payment',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. '
  },
  {
    icon:taxi,
    title:'Reach Airport on Selected Date',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. '
  }
]

export default bookingSteps