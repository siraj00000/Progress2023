import { Welcome } from '../assets'

export type CarouselListType = {
  BackgroundImage: any
  title: string
  description: string
}

export const CarouselList: CarouselListType[] = [
  {
    BackgroundImage: Welcome,
    title: 'Welcome to Umfana',
    description:
      'Founded in 2018, Umfana Initiative seeks to provide youth across the continent with growth opportunities through our various programs. Inspired by the culture of Ubuntu, we believe in the power of community and call upon everyone to get involved either by being a participant in our programs, signing up to be a mentor, donating to our cause or nominating others. Karibu Umfana!',
  },
  {
    BackgroundImage: Welcome,
    title: 'About Umfana Initiative',
    description:
      'Umfana Initiative seeks to empower the youth in the African Continent. To do this, the Initiative sets up activities that engage our participants throughout the year and culminate the experience by hosting a day camp every August that runs for five days with the purpose of empowering the participants through practical education and skill training.',
  },
]
