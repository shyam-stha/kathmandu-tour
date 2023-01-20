import React from 'react'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

export const CityTourTheme = (props: any) => {
    return (
        <MantineProvider
            theme={
                {
                    // // Override any other properties from default theme
                    // fontFamily: 'Open Sans',
                    // spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
                    // colors: {
                    //     brand: [
                    //         '#EEC4C4',
                    //         '#EA9393',
                    //         '#E67D7D',
                    //         '#E26868',
                    //         '#DD5252',
                    //         '#D93D3D',
                    //         '#D52727', // main color
                    //         '#AA1F1F',
                    //         '#801717',
                    //         '#551010',
                    //     ],
                    // },
                    // primaryColor: 'brand',
                    // breakpoints: {
                    //     // xs: 375,
                    //     // sm: 767,
                    //     // md: 1023,
                    //     // lg: 1365,
                    //     // xl: 1919,
                    //     xs: 0,
                    //     sm: 600,
                    //     md: 768,
                    //     lg: 1279,
                    //     xl: 1919,
                    // },
                }
            }>
            <NotificationsProvider>{props.children}</NotificationsProvider>
        </MantineProvider>
    )
}
