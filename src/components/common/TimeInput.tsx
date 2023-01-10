import { TimeInput } from '@mantine/dates'
import { useController, useFormContext } from 'react-hook-form'

const TimeInputConfiged = ({ name,rules, ...props }: any) => {
    const { control } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, rules })

    return (
        <TimeInput
            {...props}
            {...field}
            error={error?.message}
        />
    )
}

export default TimeInputConfiged
