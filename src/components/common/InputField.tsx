import { TextInput } from '@mantine/core'
import { useFormContext } from 'react-hook-form'
import { useController } from 'react-hook-form'


const InputField = ({ name,  rules,...props }: any) => {
    const { control } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, rules })
    return (
        <TextInput
            {...props}
            {...field}
            error={error?.message}
        />
    )
}

export default InputField
