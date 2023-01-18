import time from '../../assets/images/packageDetails/Time.svg'
import location from '../../assets/images/packageDetails/gis_location.svg'
import groups from '../../assets/images/packageDetails/groups.svg'
import dollor from '../../assets/images/packageDetails/dollor.svg'
import share from '../../assets/images/packageDetails/share.svg'
import task from '../../assets/images/packageDetails/task_alt.svg'
import avatar from '../../assets/images/packageDetails/avatar.svg'
import TourSchedule from '../../components/common/TourSchedule'
import cost from '../../assets/images/cards/cost.svg'
import booking from '../../assets/images/cards/booking.svg'
import clock from '../../assets/images/cards/time.svg'
import views from '../../assets/images/cards/views.svg'
import nightStay from '../../assets/images/cards/night_stay.svg'
import bike from '../../assets/images/cards/bike.svg'
import foodBank from '../../assets/images/cards/food_bank.svg'
import familyRestroom from '../../assets/images/cards/family_restroom.svg'
import walk from '../../assets/images/cards/walk.svg'

export const tourTypes = [
    { title: 'Bike Tour', image: '' },
    { title: 'Food Tour', image: '' },
    { title: 'Walking Tour', image: '' },
    { title: 'Day Tour', image: '' },
    { title: 'Family Friendly', image: '' },
    { title: 'Night Tour', image: '' },
]

export const locationDetails = [
    {
        title: ' Duration',
        value: '3 Hours',
        icon: time,
    },
    {
        title: 'Starting Location',
        value: 'Bhaktapur Darbar Square',
        icon: location,
    },
    {
        title: 'Average Group',
        value: '5-10',
        icon: groups,
    },
    {
        title: 'Price',
        value: '$ 30 pp',
        icon: dollor,
    },
]

export const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const extraServiceList = ['Guid', 'Breakfast']

export const gearList = [
    'An umbrella or a rain jacket. You never know.',
    'Comfortable clothes - shorts are also fine of course..',
    'Some money (in case a souvenir tempts you, or you want to have a drink)',
    'Comfortable shoes - trainers are best!',
]

export const intineraryList = [
    {
        time: '10:40 AM',
        place: 'Bhaktapur Darbar Square',
    },
    {
        time: '12:20 PM',
        place: 'Sanga Mandir',
    },
    {
        time: '01:15 PM',
        place: 'Chandeshwari Temple',
    },
    {
        time: '03:25 PM',
        place: 'Banepa Resort',
    },
    {
        time: '04:12 PM',
        place: 'Panauti Community Home Stay ',
    },
]

export const cardItemObj = [
    {
        icon: cost,
        text: 'pp',
        value: '34',
    },
    {
        icon: booking,
        text: 'booking',
        value: '5',
    },
    {
        icon: clock,
        text: 'Hours',
        value: '1',
    },
    {
        icon: views,
        text: 'Views',
        value: '8',
    },
]

export const tourTripIcons = [
    {
        icon: bike,
        visible: true,
        tooltip: 'Bike',
    },
    {
        icon: familyRestroom,
        visible: true,
        tooltip: 'Family Restroom',
    },
    {
        icon: foodBank,
        visible: true,
        tooltip: 'Food Bank',
    },
    {
        icon: walk,
        visible: true,
        tooltip: 'Walk',
    },
    {
        icon: nightStay,
        visible: true,
        tooltip: 'Night Stay',
    },
]
