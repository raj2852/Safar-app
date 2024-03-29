import {Navigation} from 'react-native-navigation';
import {Home} from './Home';
import {Explore} from './Explore';
import {Contact} from './Contact';
import {
   Kashmir,
  Himachal,
  Punjab,
  Delhi,
  Rajasthan,
  Gujrat,
  Maharashtra,
  Karnataka,
  Goa,
  Kerala,
  TamilNadu,
  Andhra,
  Telen,
  Jharkhand,
  Chattis,
  Orissa,
  Bihar,
  Bengal,
  Up,
  Assam,
  Meghalaya,
  Sikkim,
  Manipur,
  Mizonaga,
  Tripura,
  Aru,
  Uttarakhand,
  Madhya
} from './States';

export const registerScreen = async () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Explore', () => Explore);
  Navigation.registerComponent('Contact', () => Contact);

  Navigation.registerComponent('Kashmir', () => Kashmir);
  Navigation.registerComponent('Himachal', () => Himachal);
  Navigation.registerComponent('Punjab', () => Punjab);
  Navigation.registerComponent('Delhi', () => Delhi);
  Navigation.registerComponent('Rajasthan', () => Rajasthan);
  Navigation.registerComponent('Gujrat', () => Gujrat);
  Navigation.registerComponent('Maharashtra', () => Maharashtra);
  Navigation.registerComponent('Karnataka', () => Karnataka);
  Navigation.registerComponent('Goa', () => Goa);
  Navigation.registerComponent('Kerala', () => Kerala);
  Navigation.registerComponent('TamilNadu', () => TamilNadu);
  Navigation.registerComponent('Andhra', () => Andhra);
  Navigation.registerComponent('Telen', () => Telen);
  Navigation.registerComponent('Madhya', () => Madhya);
  Navigation.registerComponent('Jharkhand', () => Jharkhand);
  Navigation.registerComponent('Chattis', () => Chattis);
  Navigation.registerComponent('Orissa', () => Orissa);
  Navigation.registerComponent('Bihar', () => Bihar);
  Navigation.registerComponent('Bengal', () => Bengal);
  Navigation.registerComponent('Sikkim', () => Sikkim);
  Navigation.registerComponent('Assam', () => Assam);
  Navigation.registerComponent('Manipur', () => Manipur);
  Navigation.registerComponent('Mizonaga', () => Mizonaga);
  Navigation.registerComponent('Meghalaya', () => Meghalaya);
  Navigation.registerComponent('Tripura', () => Tripura);
  Navigation.registerComponent('Up', () => Up);
  Navigation.registerComponent('Uttarakhand', () => Uttarakhand);
  Navigation.registerComponent('Aru', () => Aru);
};
