export const packageDTO = {
    receive: (data: any) => {
        return {
            package: {
                title: data?.title || '--',
                time: data?.time || '--',
            },
        }
    },
}
