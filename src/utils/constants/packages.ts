import time from '../../assets/images/packageDetails/Time.svg'
import location from '../../assets/images/packageDetails/gis_location.svg'
import groups from '../../assets/images/packageDetails/groups.svg'
import dollor from '../../assets/images/packageDetails/dollor.svg'
import share from '../../assets/images/packageDetails/share.svg'
import task from '../../assets/images/packageDetails/task_alt.svg'
import avatar from '../../assets/images/packageDetails/avatar.svg'
import TourSchedule from '../../components/common/TourSchedule'

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
