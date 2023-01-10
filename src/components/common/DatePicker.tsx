import { DatePicker } from '@mantine/dates'
import { useFormContext, useController } from 'react-hook-form'

const DatePickerConfiged = ({ name, rules, ...props }: any) => {
    const { control } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, rules })
    return (
        <DatePicker
            {...props}
            {...field}
            error={error?.message}
        />
    )
}

export default DatePickerConfiged
